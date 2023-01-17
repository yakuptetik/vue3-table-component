<script setup>
import { ref, onMounted } from 'vue';
import { useStudentStore } from '../store/student';

const studentStore = useStudentStore();

const newForm = ref({
	name: '',
	surname: '',
	age: '',
	date: '',
	faculty: '',
	lesson: '',
	studentNo: '',
});

const isEnterLoading = ref(false);

const props = defineProps({
	student: {
		required: true,
		type: Object,
	},
});
const emit = defineEmits([
	'close-modal',
]);

onMounted(() => {
	if (props.student) {
		newForm.value = props.student;
	}
});

// eslint-disable-next-line no-console
function handleAdd() {
	isEnterLoading.value = true;
	studentStore.updateStudent({ ...newForm.value })
		.then(() => {
			emit('close-modal');
		})
		.catch(() => {
		});
}
</script>
<template>
  <div class="flex justify-center bg-[#00000086] fixed items-center top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleAdd()" class="bg-white p-4  mx-4 rounded-xl" @click.stop>
      <div class="font-medium text-lg text-black">Update Student {{ student.studentNo }} </div>

      <div class="relative flex items-center ">
        <div class="cursor-pointer absolute right-0" @click="$emit('close-modal')" @keypress="'close-modal'">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20" /><path d="m26 6-20 20" /></svg>
        </div>
      </div>

      <div class="py-8">
        <div class="flex items-center justify-between gap-3">
          <div class="w-full">
            <label class="block" for="Name">
              Name
            </label>
            <input
              required
              v-model="newForm.name"
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
              required
              v-model="newForm.surname"
              type="text"
              placeholder="Surname..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
          </div>

          <div class="w-full">
            <label class="block" for="lesson">
              Optional Lesson
            </label>
            <input
              required
              v-model="newForm.lesson"
              type="text"
              placeholder="Optional Lesson..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
          </div>

        </div>

        <div class="flex items-center justify-between gap-3 mt-3">
          <div class="w-full">
            <label class="block" for="age">
              Age
            </label>
            <input
              required
              v-model="newForm.age"
              type="number"
              placeholder="Age..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
          </div>

          <div class="w-full ">
            <label class="block" for="lesson">
              Faculty
            </label>
            <input
              required
              v-model="newForm.faculty"
              type="text"
              placeholder="Faculty..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
          </div>

          <div class="w-full">
            <label class="block" for="date">
              Start Date
            </label>
            <input
              required
              v-model="newForm.date"
              type="date"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
          </div>

        </div>
      </div>
      <div class="relative flex items-center pt-3">
        <button type="submit" class="cursor-pointer pt-3 absolute right-0 bottom-0">
          <div class="bg-blue-600 hover:bg-blue-800  rounded-lg px-3 py-1 text-white ">
            <template v-if="isEnterLoading">
              <div role="status" class="flex items-center justify-center text-white text-md space-x-2">
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
                <span class=" text-white">Kaydet</span>
              </div>
            </template>

            <template v-else>
              <div role="status" class="flex items-center justify-center text-white text-md space-x-2">
                <span class=" text-white h-6 flex items-center">Kaydet</span>
              </div>
            </template>
          </div>

        </button>
      </div>
    </form>
  </div>
</template>
