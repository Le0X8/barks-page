import type { EntryGenerator } from './$types';

const files = import.meta.glob('$pages/de/**/*.md');

export const entries: EntryGenerator = () =>
	Object.keys(files).map((path) => ({
		path: path.slice(14, -3)
	}));

export async function load({ params }) {
	const path = `/src/pages/de/${params.path}.md`;
	return {
		path: params.path,
		content: await files[path](),
	};
}
