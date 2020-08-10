import React from "react";

function Results(props) {
    return (
        <ul className="list-group">
        {props.results.map((result) => (
          <li className="list-group-item" key={result.id}>
            <h1>
                {result.employee_name}
            </h1>
            <p>
                Salary: ${result.employee_salary}
            </p>
            <p>
                Age: {result.employee_age}
            </p>
          </li>
        ))}
      </ul>
    );
}

export default Results;