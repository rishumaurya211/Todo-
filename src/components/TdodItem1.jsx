import React from "react";

const TdodItem1 = ({ TodoName, TodoDate, onDeleteClick }) => {
  return (
    <div>
      <div className="container ">
        <div className="row r-row">
          <div className="col-6">{TodoName}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger b-btn"
              onClick={() => onDeleteClick(TodoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TdodItem1;
