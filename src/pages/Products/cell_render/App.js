import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import NameCustomComponent from './component';


const empList = [
  { section: 'Entrance', camera1: "3 persons, 1 bag , 1 mobile ", camera2: " 1 bag, 1 mobile", status: 0, dob: 'Mon, 27 June 12:16:29' },
  { section: 'Entrance', camera1: "2 warning, 2 bag, 1 mobile ,", camera2: " 3 person, 2 bag", status: 2, dob: 'Mon, 27 June 12:16:31' },
  { section: 'Entrance', camera1: "4 persons, 1 bag ", camera2: " 3 bag, 5 person", status: 0, dob:'Mon, 27 June 12:16:32' },
  { section: 'Entrance', camera1: "2 warning ", camera2: "2 person , 1 laptop", status: 2, dob: 'Mon, 27 June 12:16:34' },
  { section: 'Entrance', camera1: "3 person, 2 bag", camera2: "4 persons, 1 bag ", status: 0, dob: 'Mon, 27 June 12:17:20' },
  { section: "Dock", camera1: "3 persons, 2 jumping ", status: 1, dob: 'Mon, 27 June 12:17:41' },
  { section: "Dock", camera1: "1 persons, 1 jumping",  dob:'Mon, 27 June 12:18:32' },
  { section: "Dock", camera1: "1 persons, 1 climb",  status: 0, dob: 'Mon, 27 June 12:18:34' },
  { section: "Dock", camera1: "1 pack damage, 1 jumping  ", status: 2, dob: 'Mon, 27 June 12:19:29' },
  { section: "Dock", camera1: "2 pack damage ", status: 2, dob: 'Mon, 27 June 12:16:31' },
  { section: "Dock", camera1: "1 pack damage ,", status: 2, dob:'Mon, 27 June 12:19:32' },
  { section: "Dock", camera1: "1 jumping", status: 0, dob: 'Mon, 27 June 12:19:34' },
  { section: "Dock", camera1: "1 jumping", status: 1, dob: 'Mon, 27 June 12:22:29' },
  { section: "Dock", camera1: "1 climb , 2 pack damage", status: 1, dob: 'Mon, 27 June 12:23:31' },
  { section: "work area", camera1: "1 warning , 1 package open ",      camera2: "2 warning", status: 2, dob:'Mon, 27 June 12:26:32' },
  { section: "work area", camera1: "1 warning ,1 package open",        camera2: "3 warning, 1 pack damage", status: 0, dob: 'Mon, 27 June 12:26:34' },
  { section: "work area", camera1: "1 theft , 2 mobile phones" , camera2: " 1 warning 1 theft . 1 mobile phones", status: 2, dob: 'Mon, 27 June 12:28:29' },
  { section: "work area", camera1: "1 theft 1 smart devices", camera2: " 1 warning , 1 theft ", status: 2, dob: 'Mon, 27 June 12:32:31' },
  { section: "work area", camera1: "3 warning , 1 package open ", camera2: "1 mobile phones , 1 package open", status: 2, dob:'Mon, 27 June 12:33:32' },
  { section: "work area", camera1: "2 package open , 2 mobile phones", camera2: "2 pack open, 1 warning, 2 pack damage", status: 0, dob: 'Mon, 27 June 12:35:34' },
  { section: "work area", camera1: "1 warning , 1 package open ", camera2: "1 theft , 1 package open , 1 warning", status: 2, dob: 'Mon, 27 June 12:41:29' },
  { section: "work area", camera1: "1 theft , 2 warning", camera2: "2 warning , 1 theft , 1 package open", status: 2, dob: 'Mon, 27 June 12:44:31' },
  { section: "work area", camera1: "1 pack damage , 1 warning ", camera2: "2 mobile phone , package damage", status: 2, dob:'Mon, 27 June 12:48:32' },
  { section: "work area", camera1: "2 pack damage , 3 warning ", camera2: "3 pack damage, 1 mobile phone", status: 0, dob: 'Mon, 27 June 12:52:34' },
]

function App() {

  const [data] = useState(empList)

  const columns = [
    { title: "company", field: 'section' },
    {
      title: "camera 1", field: "camera1", render: (row) => <NameCustomComponent name={row.camera1} />
    },
    { title: "camera x", field: "camera2" },
    {
      title: "Status", field: 'status', render: (row) => <div className={row.status ? "high " : "low" }>
        {row.status ? "High" : "Low"}
      </div>
    },
    { title: "Date", field: "dob", }
  ]


  return (
    <div className="App">
      <h1 align="center">Express Dashboard Highlighting </h1>
      <h4 align='center'></h4>
      <MaterialTable
      // style={{
        
      //   backgroundColor: "pink"
      // }}
        title="video camera data's"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
