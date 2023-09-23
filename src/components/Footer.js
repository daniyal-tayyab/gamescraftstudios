import React from "react";
import styled from "styled-components";

import { c1, c2, c3, socialIcons } from "../utils/dummyData";


import { Link } from "react-router-dom";

const Column = styled.div`
  margin: 0 2rem;

  h4 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;

    li {
      margin: 1rem 0;
      font-size: 1.2rem;
      color: #9b9d9f;
      cursor: pointer;
      transition: all 0.15s;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__left__useful-links">
          <Column>
            <ul>
              {c1.map((item, index) => (
                <Link to={item.to}>
                  <li key={index}>{item.title}</li>
                </Link>
              ))}
            </ul>
          </Column>
          <Column>
            <ul>
              {c2.map((item, index) => (
                <Link to={item.to}>
                  <li key={index}>{item.title}</li>
                </Link>
              ))}
            </ul>
          </Column>
          {/* <Column>
            <ul>
              {c3.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Column> */}
        </div>
      </div>
      <div className="footer__left__social-links">
          <Column>
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              {socialIcons.map((Item, index) => (
                <Item key={index} className="social-icons__icon" />
              ))}
            </div>
            <div className="copyright">
              Copyright © {new Date().getFullYear()} GamesCraft Studios. All Rights Reserved
            </div>
          </Column>
        </div>
    </div>
  );
};

export default Footer;
