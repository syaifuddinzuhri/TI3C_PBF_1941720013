import React from "react";
import Card from "./Card";

export default function List() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <Card title="Product 1"/>
          <Card title="Product 2"/>
          <Card title="Product 3"/>
          <Card title="Product 4"/>
          <Card title="Product 5"/>
          <Card title="Product 6"/>
        </div>
      </div>
    </>
  );
}
