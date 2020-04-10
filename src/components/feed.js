import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import PaddingLayout from "./padding-layout";
import MovieItem from "./movie-item";

const Outer = styled.div`
  .item-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    justify-items: center;
    margin-top: 50px;
  }
`;

const Feed = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const currentPath = location.pathname.substring(1);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json",
    }).then(response => {
      dataHandler(response.data.entries);
      setLoading(false);
    });
  }, []);

  const dataHandler = (programs) => {
    if (currentPath === "series") {
      let seriesCopy = [...programs];
      seriesCopy = seriesCopy.filter(item => item.programType === "series");
      seriesCopy.splice(21);
      setData(seriesCopy);
    } else if (currentPath === "movies") {
      let movieCopy = [...programs];
      movieCopy = movieCopy.filter(item => item.programType === "movie");
      movieCopy.splice(21);
      setData(movieCopy);
    }
  };

  return (
    <Outer>
      <PaddingLayout>
        <div className="item-container">
          {!loading && data.map(item => <MovieItem cardData={item} key={item.title}/>)}
        </div>
        {loading && "Loading..."}
      </PaddingLayout>
    </Outer>
  )
};

export default Feed;
