import React from "react";
import PaddingLayout from "./padding-layout";
import CardItem from "./card-item";
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <>
      <PaddingLayout>
        <Link to={"/series"}>
          <CardItem title="SERIES" text="Popular Series"/>
        </Link>
        <Link to={"/movies"}>
          <CardItem title="MOVIES" text="Popular Movies"/>
        </Link>
      </PaddingLayout>
    </>
  )
};

export default Home;
