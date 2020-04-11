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
    margin: 50px 0;
  }
`;

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const location = useLocation();
  const currentPath = location.pathname.substring(1);


  useEffect(() => {
    axios({
      method: "get",
      url: "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json",
    }).then(response => {
      dataHandler(response.data.entries);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      setData(() => {
        throw new Error(error);
      })
    });

    return () => {
      setError(false);
    }
  }, []);

  const dataHandler = (programs) => {
    let programsCopy = [...programs];
    programsCopy = programsCopy.filter(item => (item['programType'] === currentPath && Number(item['releaseYear']) > 2009));
    programsCopy.splice(21);
    let mapped = programsCopy.map((el, i) => {
      return {index: i, value: el.title.toLowerCase()};
    });

    mapped.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    let result = mapped.map(el => programsCopy[el.index]);

    setData(result);
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
