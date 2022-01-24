import React from "react";

const TableItem = ({ name, desc, stars, forks, language }) => {
  return (
    <div className="p-4 bg-gray-200 m-4 rounded-md flex items-center justify-between">
      <div className="basis-7/10">
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
        <p className="text-sm text-gray-700">Language: <span className="text-sm font-medium text-gray-800">{language}</span></p>
      </div>
      <div className="basis-3/10">
        <p className="text-sm text-gray-900">⭐ Stars: <span className="text-gray-900">{stars}</span></p>
        <p className="text-sm text-gray-500">📌 Forks: {forks}</p>
      </div>
    </div>
  );
};

export default TableItem;
