export async function load() {
  return {
    path: '',
    // @ts-expect-error TypeScript macht komische Sachen
    content: await import('$pages/de/home.md')
  }
}