import React from "react";
import styled from "styled-components";

const Outer = styled.div`
padding: 0 200px;
@media(max-width: 1600px) {
  padding: 0 150px;
}
@media(max-width: 1280px) {
  padding: 0 100px;
}
@media(max-width: 1024px) {
  padding: 0 50px;
}
@media(max-width: 768px) {
  padding: 0 20px;
}
@media(max-width: 414px) {
  padding: 0 10px;
}
`;

const PaddingLayout = (props) => {
  return (
    <Outer>
      {props.children}
    </Outer>
  )
};

export default PaddingLayout;
