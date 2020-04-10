import React from "react";
import styled from "styled-components";

const Outer = styled.div`
display: flex;
flex-direction: column;
  span {
    font-size: 14px;
    margin-top: 5px;
    max-width: 100px;
  }
`;

const MovieItem = (props) => {
  return (
    <Outer>
      <img src={props.cardData.images['Poster Art'].url} alt="props.cardData.description" height="150" width="100"/>
      <span>{props.cardData.title} - {props.cardData.programType}</span>
    </Outer>
  )
};

export default MovieItem;
