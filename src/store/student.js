import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '../utils/API';

// eslint-disable-next-line import/prefer-default-export
export const useStudentStore = defineStore('student', () => {
	const students = ref([]);

	function addStudent(student) {
		return new Promise((resolve, reject) => {
			try {
				// eslint-disable-next-line import/no-named-as-default-member
				API.createStudent(student, students.value)
					.then((response) => {
						students.value.push(response.data);

						localStorage.setItem('students', JSON.stringify(students.value));
					})
					.catch((err) => {
						throw new Error(err);
					})
					.finally(() => {
						resolve();
					});
			}	catch (err) {
				reject(err.message);
			}
		});
	}

	function deleteStudent(studentNo) {
		return new Promise((resolve, reject) => {
			try {
				// eslint-disable-next-line import/no-named-as-default-member
				API.deleteStudent(studentNo, students)
					.then((response) => {
						if (response.data < 0) {
							throw new Error('Öğrenci bulunamadı');
						}

						students.value.splice(response.data, 1);
						localStorage.setItem('students', JSON.stringify(students.value));

						resolve();
					})
					.catch((err) => {
						throw new Error(err);
					});
			}	catch (err) {
				reject(err.message);
			}
		});
	}

	function updateStudent(student) {
		return new Promise((resolve, reject) => {
			try {
				// eslint-disable-next-line import/no-named-as-default-member
				API.updateStudent(student, students)
					.then((response) => {
						if (response.data < 0) {
							throw new Error('Öğrenci bulunamadı');
						}

						students.value.splice(response.data, 1, student);
						localStorage.setItem('students', JSON.stringify(students.value));
						resolve();
					})
					.catch((err) => {
						throw new Error(err);
					});
			}	catch (err) {
				reject(err.message);
			}
		});
	}

	return {
		students, addStudent, deleteStudent, updateStudent,
	};
});
