import React from "react";
import styled from "styled-components";

const Outer = styled.div`
display: inline-block;
margin-right: 20px;
.icon-container {
background-color: #1e1e1e;
position: relative;
margin-top: 50px;
height: 200px;
width: 135px;
display: flex;
justify-content: center;
align-items: center;
.icon {
  background-color: #3F3F3F;
  width: 70px;
  height: 50px;
  border-radius: 4px;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 15px;
    background-color: #3F3F3F;
    transform: rotate(-20deg);
    transform-origin: bottom left;
    position: absolute;
    top: -10px;
  }
  .cutter-container {
    transform: rotate(-20deg);
    transform-origin: bottom left;
  }
  .cutter {
    background-color: #1e1e1e;
    width: 7px;
    height: 15px;
    display: block;
    position: absolute;
    transform: skewX(40deg);
    top: -10px;
  }
  .first {
    left: 2px;
  }
  .second {
    left: 21px;
  }
  .third {
    left: 40px;
  }
  .fourth {
    left: 59px;
  }
}
.title {
  color: white;
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  letter-spacing: 1.6px;
  font-size: 24px;
}
}
.bottom-text {
  font-size: 14px;
  margin-top: 5px;
}
`;

const Boilerplate = (props) => {
  return (
    <Outer>
      <div className="icon-container">
        <div className="icon">
          <div className="cutter-container">
            <span className="cutter first"></span>
            <span className="cutter second"></span>
            <span className="cutter third"></span>
            <span className="cutter fourth"></span>
          </div>
        </div>
        <div className="title">
          {props.title}
        </div>
      </div>
      <div className="bottom-text">
        {props.text}
      </div>
    </Outer>
  )
};

export default Boilerplate;
