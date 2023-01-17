<script setup>
import Navbar from './components/NavbarComp.vue';
import { useStudentStore } from './store/student';

const studentStore = useStudentStore();

if (localStorage.getItem('students')) {
	studentStore.students = JSON.parse(localStorage.getItem('students'));
}
</script>

<template>
  <div class="w-full h-full  bg-gray-300">
    <Navbar />
    <RouterView />
  </div>
</template>
