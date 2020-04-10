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
position: absolute;
bottom: 0;
width: 100%;
background-color: ${COLORS.primaryDark};
color: white;
.social-media {
  img {
    height: 25px;
  }
}
.stores {
  div {
    width: 110px;
    height: 35px;
    margin-left: 5px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    border: 0.5px solid rgba(255,255,255,0.5);
    &:last-child {
      border: 0.1px solid rgba(255,255,255,0.5);
      border-radius: 0;
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
            <a className="link">{link}</a>
          ))}
        </div>
        <div className="copyright">
          Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
        </div>
        <div className="external-links display-flex justify-content-space-between">
          <div className="social-media display-flex">
            <img src={FacebookSvg} alt="Facebook Logo"/>
            <img src={TwitterSvg} alt="Twitter Logo"/>
            <img src={InstagramSvg} alt="Instagram Logo"/>
          </div>
          <div className="stores display-flex">
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
