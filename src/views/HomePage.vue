<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<script setup>
import { ref } from 'vue';
import { useStudentStore } from '../store/student';
import TableRow from '../components/TableRow.vue';
import ChevronIcon from '../components/ıcons/ChevronIcon.vue';
import DownChevron from '../components/ıcons/DownChevron.vue';

const studentStore = useStudentStore();

const search = ref('');
const sort = ref({
	type: 'name',
	desc: false,
});

function handleSort(type) {
	if (sort.value.type !== type) {
		sort.value = { type, desc: false };
	} else {
		sort.value.desc = !sort.value.desc;
	}
	studentStore.sortStudent(sort.value);
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
          <table class="w-full rounded-tl-lg sortable">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm rounded-t2xl">
                <th @click="handleSort('name')" class="py-3 px-6 text-center rounded-tl-xl">
                  <div class="flex items-center justify-center">
                    name
                    <template v-if="sort.type === 'name'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('surname')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    surname
                    <template v-if="sort.type === 'surname'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('age')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    age
                    <template v-if="sort.type === 'age'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('faculty')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    faculty
                    <template v-if="sort.type === 'faculty'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('studentNo')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    student No
                    <template v-if="sort.type === 'studentNo'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('lesson')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    optİonal lesson
                    <template v-if="sort.type === 'lesson'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('date')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    date
                    <template v-if="sort.type === 'date'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th class="py-3 px-6 text-center rounded-tr-xl">
                  actions
                </th>
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
