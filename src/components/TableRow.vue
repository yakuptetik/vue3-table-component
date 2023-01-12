<script setup>
import { ref } from 'vue';
import FormUpdateModal from './FormUpdateModal.vue';
import { useStudentStore } from '../store/student';

const studentStore = useStudentStore();

const isModalShow = ref(false);
const isDeleteLoading = ref(false);

defineProps({
	student: {
		required: true,
		type: Object,
	},
});

function handleDelete(studentNo) {
	isDeleteLoading.value = true;

	studentStore.deleteStudent(studentNo)
		.then(() => {
			isDeleteLoading.value = false;
		})
		.catch(() => {
			// eslint-disable-next-line no-alert
			window.alert('dwefrgthythrgef');
		});
}
</script>

<template>
  <tr
    class="border-b border-gray-200 hover:bg-gray-100 "
  >
    <td class="py-3 px-6 text-center">
      <div class="flex items-center justify-center">
        {{ student.name }}
      </div>
    </td>

    <td class="py-3 px-6 text-center">
      <div class="flex items-center justify-center">
        {{ student.surname }}
      </div>
    </td>

    <td class="py-3 px-6 text-center whitespace-nowrap">
      <div class="flex items-center justify-center">
        {{ student.age }}
      </div>
    </td>
    <td class="py-3 px-6 text-center whitespace-nowrap">
      <div class="flex items-center justify-center">
        {{ student.faculty }}
      </div>
    </td>

    <td class="py-3 px-6 text-center whitespace-nowrap">
      <div class="flex items-center justify-center">
        {{ student.studentNo }}
      </div>
    </td>

    <td class="py-3 px-6 text-center whitespace-nowrap">
      <div class="flex items-center justify-center">
        {{ student.lesson }}
      </div>
    </td>

    <td class="py-3 px-6 text-center">
      <div class="flex items-center justify-center">
        {{ student.date }}
      </div>
    </td>

    <td class="py-3 px-6 ">
      <div class="flex item-center justify-center">
        <div @click="isModalShow = true" @keypress="isModalShow = true" class="w-4 mr-2 transform hover:text-green-600 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>

        <div @click="handleDelete(student.studentNo)" @keypress="handleDelete(student.studentNo)" class="w-4 mr-2 transform hover:text-red-700 hover:scale-110">
          <template v-if="isDeleteLoading">
            <div aria-label="Loading..." role="status" class="flex animate-spin items-center justify-center text-red-700 text-base space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </template>

          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </template>
        </div>
      </div>
    </td>

    <FormUpdateModal :student="{ ...student }" v-if="isModalShow" @close-modal="isModalShow = false" />
  </tr>
</template>
