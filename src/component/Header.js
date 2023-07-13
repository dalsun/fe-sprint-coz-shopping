import React, { useState } from "react";
import logo from "../images/로고.png";
import button from "../images/햄버거 버튼.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropDown from "./DropDown";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  position: fixed;

  nav {
    width: 100%;
  }

  h1 {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem;
  }

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 2rem;
  }

  span {
    margin-right: 65rem;
    font-weight: 600;
    font-size: 30px;
    color: #000000;
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }

`

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true)
  };

  return (
    <>
    <HeaderContainer>
      <nav>
      <h1>
      <Link to='/'><img className="logo" src={logo} alt="로고" /></Link>
      <Link to='/' style={{textDecoration:"none"}}><span>COZ Shopping</span></Link>
      <button onClick={openModalHandler}>
        <img src={button} alt="hamburger" />
      </button>
      </h1>
      </nav>
    </HeaderContainer>
    <div>
    {isOpen ? <DropDown/> : null}
    </div>
    </>
  )
}

export default Header;