export default function appendToEachArrayValue(array, appendString) {
  const new_Array = [];
  for (const value of array) {
    new_Array.push(appendString + value);
  }
  return new_Array;
}
