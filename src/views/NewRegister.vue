<script setup>
import { ref } from 'vue';
import { useStudentStore } from '../store/student';

const studentStore = useStudentStore();
const form = ref({
	name: '',
	surname: '',
	age: '',
	date: '',
	faculty: '',
	lesson: '',
	studentNo: '',
});

const isLoading = ref(false);

function handleSubmit() {
	isLoading.value = true;

	studentStore.addStudent({ ...form.value })
		.then(() => {
			form.value = {
				name: '',
				surname: '',
				age: '',
				date: '',
				faculty: '',
				lesson: '',
				studentNo: '',
			};
		})
		.catch((err) => {
			// eslint-disable-next-line no-alert
			alert(err.message);
		}).finally(() => {
			isLoading.value = false;
		});
}

</script>
<template>
  <div class="flex  justify-center bg-gray-300">
    <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/2 sm:w-1/2 rounded-xl">
      <h3 class="text-2xl font-bold text-center">Registration Form</h3>
      <form @submit.prevent="handleSubmit">
        <div class="mt-4">
          <div class="flex items-center justify-between gap-3">
            <div class="w-full">
              <label class="block" for="Name">
                Name
              </label>

              <input
                v-model="form.name"
                required
                type="text"
                placeholder="Name..."
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </div>

            <div class="w-full">
              <label class="block" for="Surname">
                Surname
              </label>

              <input
                v-model="form.surname"
                required
                type="text"
                placeholder="Surname..."
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </div>
          </div>

          <div class="flex items-center justify-between gap-3">
            <div class="mt-4 w-full">
              <label class="block" for="age">
                Age
              </label>

              <input
                v-model.number="form.age"
                required
                type="number"
                placeholder="Age..."
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </div>

            <div class="mt-4 w-full">
              <label class="block" for="lesson">
                Faculty
              </label>

              <input
                v-model="form.faculty"
                required
                type="text"
                placeholder="Faculty..."
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </div>
          </div>

          <div class="flex items-center justify-between gap-3">
            <div class="mt-4 w-full">
              <label class="block" for="age">
                Student No
              </label>

              <input
                v-model.number="form.studentNo"
                required
                type="number"
                placeholder="Student No..."
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </div>

            <div class="mt-4 w-full">
              <label class="block" for="age">
                Optional Lesson
              </label>

              <input
                v-model.number="form.lesson"
                required
                type="text"
                placeholder="Optional Lesson..."
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </div>
          </div>

          <div class="mt-4 w-full">
            <label class="block" for="date">
              Start Date
            </label>

            <input
              v-model="form.date"
              required
              type="date"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
          </div>
          <div class="flex">
            <button type="submit" class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              <template v-if="isLoading">
                <div aria-label="Loading..." role="status" class="flex items-center justify-center text-white text-base space-x-2">
                  <svg class="h-6 w-6 animate-spin stroke-white" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  </svg>
                  <span class=" text-white">Loading...</span>
                </div>
              </template>

              <template v-else>
                <div class="text-base">
                  Create
                </div>
              </template>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
