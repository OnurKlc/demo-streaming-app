import React from "react";
import styled from "styled-components";
import {COLORS} from "../assets/constants";
import PaddingLayout from "./padding-layout";

const Outer = styled.div`
.sub-header {
color: white;
font-weight: 600;
padding: 20px;
font-size: 20px;
}
.upper {
background-color: ${COLORS.primaryBlue};
}
.lower {
background-color: ${COLORS.primaryDark};
}
.login-button {
background-color: transparent;
border: none;
color: white;
outline: 0;
cursor: pointer;
margin-right: 10px;
}
.trial-button {
background-color: ${COLORS.primaryDark};
border: none;
color: white;
padding: 5px 10px;
cursor: pointer;
}
`;

const Header = (props) => {
  return (
    <Outer>
      <div className="sub-header upper">
        <PaddingLayout>
          <div className="display-flex justify-content-space-between">
          <div>DEMO Streaming</div>
            <div>
              <button className="login-button">Log in</button>
              <button className="trial-button">Start your free trial</button>
            </div>
          </div>
        </PaddingLayout>
      </div>
      <div className="sub-header lower">
        <PaddingLayout>
          <div>{props.title}</div>
        </PaddingLayout>
      </div>
    </Outer>
  )
};

export default Header;
