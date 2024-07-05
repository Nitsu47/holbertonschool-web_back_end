export default function updateStudentGradeByCity(arrayOfStudents, city, newGrades) {
    return arrayOfStudents
      .filter(student => student.location === city)
      .map(student => {
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);
        return {
          ...student,
          grade: gradeObj && gradeObj.grade > 0 ? gradeObj.grade : 'N/A',
        };
      });
}
