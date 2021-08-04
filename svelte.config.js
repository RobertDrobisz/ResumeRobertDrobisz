import static_adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: static_adapter({
			// default options are shown
			pages: '.svelte-kit/static/build',
			assets: '.svelte-kit/static/build',
			fallback: null
		}),
		target: '#svelte',
		paths: {
			base: '/ResumeRobertDrobisz',
			assets: '/ResumeRobertDrobisz'
		}
	}
};

export default config;
