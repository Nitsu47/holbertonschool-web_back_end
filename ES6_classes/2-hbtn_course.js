export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be a array of strings');
    }
    for (const i of students) {
      if (typeof i !== 'string') {
        throw TypeError('Students must be a array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
  get students() {
    return this._students;
  }
  set students(value) {
    this._students = value;
  }
}