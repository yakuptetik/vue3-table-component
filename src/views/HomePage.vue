<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<script setup>
import { ref } from 'vue';
import { useStudentStore } from '../store/student';
import TableRow from '../components/TableRow.vue';

const studentStore = useStudentStore();

const search = ref('');
const desc = ref(false);

function sortName() {
	studentStore.sortStudent({ desc: desc.value });
	desc.value = !desc.value;
}

</script>
<template>
  <div class="w-full px-20 bg-gray-300">
    <div class=" flex items-start justify-center">
      <div class="w-full ">

        <div class="flex items-center">
          <label for="search" />
          <input
            v-model="search"
            class="flex border h-10 pl-5 shadow-md  items-center justify-center rounded-full outline-none focus:outline focus:outline-indigo-400"
            type="text"
            autocomplete="off"
            name="search"
            placeholder="Search..."
          />
        </div>

        <div class="bg-white shadow-md my-6 rounded-tl-xl rounded-tr-xl">
          <table class="w-full rounded-tl-lg">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm rounded-t2xl">
                <th @click="sortName()" class="py-3 px-6 text-center rounded-tl-xl">name &#8597;</th>
                <th class="py-3 px-6 text-center">surname</th>
                <th class="py-3 px-6 text-center">age</th>
                <th class="py-3 px-6 text-center">faculty</th>
                <th class="py-3 px-6 text-center">Student no</th>
                <th class="py-3 px-6 text-center">OPTIONAL LESSON</th>
                <th class="py-3 px-6 text-center">Start Date</th>
                <th class="py-3 px-6 text-center rounded-tr-xl">actions</th>
              </tr>
            </thead>

            <tbody class="text-gray-600 text-sm font-light">

              <TableRow
                v-for="student in studentStore.filteredStudents(search)"
                :key="student.number"
                :student="student"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
