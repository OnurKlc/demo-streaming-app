import React from "react";
import styled from "styled-components";

const Outer = styled.div`
padding: 0 100px;
`;

const PaddingLayout = (props) => {
  return (
    <Outer>
      {props.children}
    </Outer>
  )
};

export default PaddingLayout;
