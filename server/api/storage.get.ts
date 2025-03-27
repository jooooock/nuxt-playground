export default defineEventHandler(async event => {
  // Default storage is in memory
  // await useStorage('test').setItem('foo', { name: 'champ', age: 20 })
  // return await useStorage('test').getItem('foo')

  // You can also specify the base in useStorage(base)
  // await useStorage('test').setItem('foo', { hello: 'world' });

// You can use data storage to write data to default .data/kv directory
  const kvStorage = useStorage('kv')
//   console.log(dataStorage.getMount('data:test'));
  await kvStorage.setItem('test', 'works 123')
  return await kvStorage.getItem('test') // Value persists

// You can use generics to define types
//   await useStorage<{ hello: string }>('test').getItem('foo')
//   await useStorage('test').getItem<{ hello: string }>('foo')

});
