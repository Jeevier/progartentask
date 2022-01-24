import React from "react";
import TableItem from "./TableItem";

const Table = (props) => {
  return (
    <div>
      <div className="p-4 m-4">
        <span className="mr-4">Language</span>
        <select value={props.lang} onChange={(e)=> props.changeLang(e.target.value)}>
          <option value="">Any</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="javascript">Javascript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>

        </select>
      </div>
      <div>
        {props.data.map((item, i) => {
          return (
            <TableItem
              name={item.name}
              desc={item.desc}
              stars={item.stars}
              forks={item.forks}
              language={item.language}
              key={i}
            ></TableItem>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
