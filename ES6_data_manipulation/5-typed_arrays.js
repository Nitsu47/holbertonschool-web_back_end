export default function createInt8TypedArray(length, position, value) {

  if(position >= length) {
    throw new Error("Position outside range");
  }    
  const buffArr = new ArrayBuffer(length);
  const editor = new DataView(buffArr);
  editor.setInt8(position, value);

  return editor;
}