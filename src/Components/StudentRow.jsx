function StudentRow({ student, updateScore }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(student.id, e.target.value)}
        />
      </td>

      <td className={student.score >= 40 ? "pass" : "fail"}>
        {student.score >= 40 ? "Pass" : "Fail"}
      </td>
    </tr>
  );
}

export default StudentRow;