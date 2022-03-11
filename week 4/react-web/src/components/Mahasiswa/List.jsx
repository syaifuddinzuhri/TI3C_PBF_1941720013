import React from "react";

const List = (props) => {
  return (
      <div className="row">
        <div className="col-md-3"><b>{props.title}</b></div>
        <div className="col-md-9">{props.value}</div>
      </div>
  );
};

export default List;
