<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<script setup>
import { useStudentStore } from '../store/student';
import TableRow from '../components/TableRow.vue';

const studentStore = useStudentStore();
</script>
<template>
  <div class="w-full px-20 bg-gray-300">
    <div class=" flex items-start justify-center">
      <div class="w-full ">
        <div class="bg-white shadow-md my-6 rounded-tl-xl rounded-tr-xl">
          <table class="w-full rounded-tl-lg">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm rounded-t2xl">
                <th class="py-3 px-6 text-center rounded-tl-xl">name</th>
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
                v-for="student in studentStore.students"
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
