<script setup lang="ts">
import { useStore } from "vuex"
import { computed, ref } from "vue"
defineProps<{ msg: string }>()

const store = useStore()

function add() {
	store.dispatch("add")
}

const count = computed(() => {
	return store.state.sample.count
})
</script>

<template>
	<h1>{{ msg }}</h1>

	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
		+
        <a href="https://yarnpkg.com/">Yarn</a>
        +
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        +
        <a href="https://prettier.io/">Prettier</a>
        +
        <a href="https://eslint.org/">ESLint</a>
        +
        <a href="https://tailwindcss.com/">Tailwind CSS</a>
        +
        <a href="https://sass-lang.com/">SASS</a>
	</p>

	<p>See <code>README.md</code> for more information.</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank">
			Vite Docs
		</a>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
	</p>

	<button type="button" @click="add">count is: {{ count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
