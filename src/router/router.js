import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomePage.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/NewRegister.vue'),

	},

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
