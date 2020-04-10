import React from "react";
import styled from "styled-components";
import {useLocation, useHistory} from "react-router-dom";
import {COLORS} from "../assets/constants";
import PaddingLayout from "./padding-layout";

const Outer = styled.div`
.sub-header {
  color: white;
  font-weight: 600;
  padding: 20px 0;
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
  margin-left: 20px;
  padding: 10px;
}
.trial-button {
  background-color: ${COLORS.primaryDark};
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
}
`;

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1);
  const history = useHistory();

  return (
    <Outer>
      <div className="sub-header upper">
        <PaddingLayout>
          <div className="display-flex justify-content-space-between align-items-center">
            <div onClick={() => history.push("/")} style={{cursor: "pointer"}}>DEMO Streaming</div>
            <div className="display-flex flex-wrap-wrap justify-content-flex-end">
              <button className="login-button">Log in</button>
              <button className="trial-button">Start your free trial</button>
            </div>
          </div>
        </PaddingLayout>
      </div>
      <div className="sub-header lower">
        <PaddingLayout>
          <div>{currentPath === "series" ? "Popular Series" : currentPath === "movies" ? "Popular Movies" : "Popular Titles"}</div>
        </PaddingLayout>
      </div>
    </Outer>
  )
};

export default Header;
