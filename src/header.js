import React from "react";
import "./HeaderCss.css";

const Header = () => {
  return (
    <header>
      <div className="Head">
        <div id="logo">
          <a href="#!">로고그림</a>
        </div>
        <ul>
          <li>
            <a href="https://naver.com">공지사항</a>
          </li>
          <li>
            <a href="#!">강사소개</a>
          </li>
          <li>
            <a href="#!">가격표</a>
          </li>
          <li>
            <a href="#!">작업인증</a>
          </li>
          <li>
            <a href="#!">작업현황</a>
          </li>
          <li>
            <a href="#!">작업후기</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
