export default defineEventHandler(async event => {
  const kvStorage = useStorage('deno')
  await kvStorage.setItem('test', 'works 123')
  return await kvStorage.getItem('test')
});
