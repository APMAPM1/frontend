// src/components/Table.js
import React from 'react';
//import { Link } from 'react-router-dom';

function Table() {
  const tableData = [
    {
      schemeid: 42235,
      schemename: 'MYSY',
      status: 'Pending',
    },
    {
      schemeid: 42442,
      schemename: 'PM Kisan',
      status: 'Pending',
    },
    {
      schemeid: 42257,
      schemename: 'Digital Gujarat',
      status: 'Waiting',
    },
    {
      schemeid: 42311,
      schemename: 'PM Sahay Yojana',
      status: 'Waiting',
    },
  ];

  return (
    <div className="container mx-auto p-4 font-sans">
      <h2 className="text-4xl font-medium mb-4 text-center font-sans">Government registered schemes</h2>
      {/* <Link to="/addscheme">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add New Scheme</button>
      </Link> */}
      <ul className="w-full mt-4">
        <li className="flex text-white font-bold p-2 mb-2 bg-[#19514F]">
          <div className="flex-1">Scheme Id</div>
          <div className="flex-1">Scheme Name</div>
          <div className="flex-1">Status</div>
          <div className="flex-1">View</div>
        </li>
        {tableData.map((item, index) => (
          <li key={index} className="flex shadow-md mb-2 odd:bg-green-200 even:bg-white">
            <div className="flex-1 p-2">{item.schemeid}</div>
            <div className="flex-1 p-2">{item.schemename}</div>
            <div className="flex-1 p-2">{item.status}</div>
            <div className="flex-1 p-2">
              {/* <Link to="/showdocuments">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">View Applications</button>
              </Link> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
