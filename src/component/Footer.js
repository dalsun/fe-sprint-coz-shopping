import React from "react";
import styled from "styled-components";

const FooterList = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #888888;

  .one, .two {
    text-align: center;
  }
`

function Footer() {
  return (
    <FooterList>
      <div className="one">
        개인정보 처리방침 | 이용 약권
      </div>
      <div className="two">
        All rights reserved @ Codestates
      </div>
    </FooterList>
  )
}

export default Footer;