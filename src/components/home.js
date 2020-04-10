import React from "react";
import PaddingLayout from "./padding-layout";
import CardItem from "./card-item";


const Boilerplate = () => {
  return (
    <>
      <PaddingLayout>
        <CardItem title="SERIES" text="Popular Series"/>
        <CardItem title="MOVIES" text="Popular Movies"/>
      </PaddingLayout>
    </>
  )
};

export default Boilerplate;
