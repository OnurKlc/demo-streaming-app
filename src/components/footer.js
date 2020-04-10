import React from "react";
import styled from "styled-components";
import {COLORS} from "../assets/constants";
import PaddingLayout from "./padding-layout";
import FacebookSvg from "../assets/social/facebook-white.svg";
import TwitterSvg from "../assets/social/twitter-white.svg";
import InstagramSvg from "../assets/social/instagram-white.svg";
import AppStoreSvg from "../assets/store/app-store.svg";
import PlayStoreSvg from "../assets/store/play-store.svg";
import WindowsStoreSvg from "../assets/store/windows-store.svg";

const Outer = styled.div`
margin-top: auto;
width: 100%;
background-color: ${COLORS.primaryDark};
color: white;
font-size: 12px;
.link-container {
  padding: 30px 0 10px 0;
}
.link {
  color: white;
  text-decoration: none;
}
.link:after {
  content: "|";
  margin: 0 5px;
}
.link:last-child:after {
  content: "";
}
.external-links {
  flex-wrap: wrap;
  padding: 30px 0;
}
.social-media {
  margin: 10px 0;
  img {
    height: 20px;
    margin-right: 10px;
  }
  @media(max-width: 414px) {
    width: 100%;
  }
}
.stores {
  flex-wrap: wrap;
  div {
    margin: 10px 5px 0 5px;
    width: 110px;
    height: 35px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    border: 0.5px solid rgba(255,255,255,0.5);
    &:last-child {
      border-radius: 0;
      margin-left: 0;
    }
    &:first-child {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
`;

const links = ['Home', 'Terms and Conditions', 'Privacy Policy', 'Collection Statement', 'Help', 'Manage Account'];

const Footer = () => {
  return (
    <Outer>
      <PaddingLayout>
        <div className="link-container">
          {links.map(link => (
            <a href="#" className="link" key={Math.random()}>{link}</a>
          ))}
        </div>
        <div className="copyright">
          Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
        </div>
        <div className="external-links display-flex justify-content-space-between align-items-center">
          <div className="social-media display-flex justify-content-center">
            <img src={FacebookSvg} alt="Facebook Logo"/>
            <img src={TwitterSvg} alt="Twitter Logo"/>
            <img src={InstagramSvg} alt="Instagram Logo"/>
          </div>
          <div className="stores display-flex justify-content-center">
            <div style={{backgroundImage: `url(${AppStoreSvg})`}}/>
            <div style={{backgroundImage: `url(${PlayStoreSvg})`}}/>
            <div style={{backgroundImage: `url(${WindowsStoreSvg})`}}/>
          </div>
        </div>
      </PaddingLayout>
    </Outer>
  )
};

export default Footer;
