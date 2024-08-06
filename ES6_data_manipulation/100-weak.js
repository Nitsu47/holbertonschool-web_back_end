const weakMap = new WeakMap();
export default weakMap;

export function queryAPI(endpoint){
  let count;
  if (weakMap.has(endpoint))
    count = weakMap.get(endpoint) + 1;
  else {
    count = 1;
  }
  if (count >= 5)
    throw new Error('Endpoint load is high');
  weakMap.set(endpoint, count);
}
