import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Token = localStorage.getItem("token");

function Userschemelist() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3108/document/getscheme", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + Token,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        setTableData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 font-sans">
      <h2 className="text-4xl mb-6 text-center font-medium font-sans">Applied schemes</h2>
      <ul className="w-full mt-4">
        <li className="flex justify-between items-center text-white font-bold p-2 mb-2 bg-[#19514F]">
          <div className="w-1/6 flex-1">Scheme Id</div>
          <div className="w-2/6 flex-1">Scheme Name</div>
          <div className="w-1/6 flex-1">Status</div>
          <div className="w-2/6 flex-1">Remark</div>
        </li>
        {tableData.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 my-4 rounded shadow-md mb-2 odd:bg-green-200 even:bg-white"
          >
            <div className="w-1/6" data-label="Scheme Id">
              {item.schemeid}
            </div>
            <div className="w-2/6" data-label="Scheme Name">
              {item.schemename}
            </div>
            <div className="w-1/6" data-label="Status">
              {item.status}
            </div>
            <div className="w-2/6" data-label="Remark">
              {item.remark}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Userschemelist;
