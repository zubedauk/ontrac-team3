import React from "react";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import "../index.css";
import Header from './Header'
import Footer from './Footer'
import './main.css'
import useStudentsData from "./useStudentsData";
// import pd-fake-data.json from "./pd-fake-data.json"

const PDTracker = () => {
  const [students] = useStudentsData();
  const columns = [
    {
      title: "#",
      dataIndex: "student_id",
      key: "student_id",
      // render: (text) => <a href="http://google.co.uk">{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="http://google.co.uk">{text}</a>,
    },
    {
      title: "Communication",
      dataIndex: "Communication",
      key: "Communication",
    },
    {
      title: "Resilience",
      dataIndex: "Resilience",
      key: "Resilience",
    },
    {
      title: "Growth",
      dataIndex: "Growth",
      key: "Growth",
    },
    {
      title: "Homework Handed In",
      dataIndex: "homework_submitted",
      key: "homework_submitted",
      // render: (text) => <a href="http://google.co.uk">{text}</a>,

      render: (homework_submitted) => (
        <>
       
          {homework_submitted.map((hwk) => {
            let color = hwk === "yes" ? "geekblue" : "green";
            if (hwk === "no") {
              color = "red";
            }
            return (
              <Tag color={color} key={hwk}>
                {hwk.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (email, record) => (
        <Space size="middle">
          <a href="mailto:{email}">Send {record.name} email</a>
          {/* <a href="http://google.co.uk">Delete</a> */}
        </Space>
      ),
    },
  ];

  return (
    <>
     <Header />
     <hr></hr>
     <div style={{width:'90vw',marginLeft:'auto',marginRight:'auto',padding:'1rem'}}>
        <Table columns={columns} dataSource={students} />
     </div>
      <hr></hr>
      <Footer />
  </>
  );
};

export default PDTracker;
