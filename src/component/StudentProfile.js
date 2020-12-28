import React, { useState, useEffect } from "react";
import { Table, Progress, Input } from "antd";
import ViewProfile from "./ViewProfile"
import {InputForm} from "./InputForm"

const StudentProfile = ({ id, setShowProfile }) => {
  const [studentProfile, setStudentProfile] = useState(null);
    useEffect(() => {
    console.log("Fetching data from heroku");

    fetch(`https://ontrack-team3.herokuapp.com/profile/student/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudentProfile([data]);
      });
  }, []);
  const columns = [
    {
      title: "Student Id",
      dataIndex: "student_id",
      key: "student_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Attendance",
      key: "attendance",
      dataIndex: "attendance",
      render: (attendance) => (
        <>
          {attendance.map((element) => {
            return (
              <Progress
                type="circle"
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={element}
                width={80}
              />
            );
          })}

        </>
      ),
    },
    {
      title: "Assignment",
      dataIndex: "assignment",
      key: "assignment",

      render: (assignment) => (
        <>
          {assignment.map((element) => {
            return (
              <Progress
                type="circle"
                strokeColor={{
                  "0%": "#108ee9",
                  "50%": "amber",
                  "100%": "#87d068",
                }}
                percent={(element * 10).toFixed(2)}
                width={80}
              />
            );
          })}
        </>
      ),
    },
    {
      title: "Assignments Missing",
      dataIndex: "assignments_missing",
      key: "assignments_missing",
    },
    {
      title: "Class_Late",
      dataIndex: "class_late",
      key: "class_late",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
  
  ];
  return (<><Table columns={columns} dataSource={studentProfile} />
  <InputForm />
  <ViewProfile />
  <button onClick={() => setShowProfile(false)}>Back</button></>);
};
export default StudentProfile;
