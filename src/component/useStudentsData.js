// eslint-disable-next-line
import React, { useState, useEffect } from "react";

const useStudentsdData = () => {
  //   const [hasError, setErrors] = useState(false);
  const [students, setStudents] = useState([]);

  //Fetch Data
  async function fetchStudents() {
    const res = await fetch("https://ontrack-team3.herokuapp.com/pd/students/");
    res.json().then((res) => setStudents(res));
    //   .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchStudents();
  }, []);
  return [students];
  // console.log(country);
};

export default useStudentsdData;
