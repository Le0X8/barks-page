export async function load() {
  return {
    path: '',
    // @ts-expect-error TypeScript macht komische Sachen
    content: await import('$pages/en/home.md')
  }
}