import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";

 function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "tanush", score: 9 },
    { id: 2, name: "armaan", score: 45 },
    { id: 3, name: "madhav", score: 90 },
    { id: 4, name: "naveen", score: 32 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) }
          : student
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: students.length + 1,
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  const totalStudents = students.length;
  const passedStudents = students.filter(
    (student) => student.score >= 40
  ).length;

  const avgScore = Math.round(
    students.reduce((sum, student) => sum + student.score, 0) /
      students.length
  );

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <div className="card">
          <h3>Total</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="card">
          <h3>Passed</h3>
          <p>{passedStudents}</p>
        </div>

        <div className="card">
          <h3>Avg Score</h3>
          <p>{avgScore}</p>
        </div>
      </div>

      <StudentTable
        students={students}
        updateScore={updateScore}
      />
    </div>
  );
}

export default App;