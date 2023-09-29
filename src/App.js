import React, { useState } from "react";
import Button from "./components/UI/Button";
import StudentList from "./components/student/StudentList";

function App() {
  const student = [
    {
      id: 2,
      title: "Azis",
    },
    {
      id: 3,
      title: "DN",
    },
    {
      id: 1,
      title: "Hello world",
    },
  ];
  const [show, setShow] = useState(false);

  function formSetShow() {
    setShow((prevstate) => !prevstate);
  }

  return (
    <div>
      {show &&
        student.map((el) => {
          return <StudentList name={el.title} />;
        })}
      <Button onClick={formSetShow}>Click</Button>
    </div>
  );
}

export default App;
