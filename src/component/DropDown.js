import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import product from "../images/상품 아이콘.png";
import book from "../images/북마크 아이콘.png";

const Boxlist = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6rem;
  right: 3rem;
  bottom: 0%;
  background: #ffffff;
  border-radius: 12px;
  z-index: 9999;

  img {
    padding-right: 8px;
  }

  .box1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    flex: none;
    order: 0;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px 12px 0px 0px;
    border-bottom: 0px;
  }

  .box2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    flex: none;
    order: 1;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 0px;
  }

  .box3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    flex: none;
    order: 2;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 12px 12px;
  }
`

function DropDown() {
  return(
    <Boxlist>
      <div className="box1">000님, 안녕하세요!</div>
      <Link to='/products/list' style={{textDecoration:"none", color:"black"}}><div className="box2">
        <img className="gift" src={product} alt="상품" />상품리스트 페이지</div></Link>
      <Link to='/bookmark' style={{textDecoration:"none", color:"black"}}><div className="box3">
        <img className="book" src={book} alt="북마크" />북마크 페이지</div></Link>
    </Boxlist>
  )
}

export default DropDown;