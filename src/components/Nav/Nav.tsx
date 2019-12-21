import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import AppContext from "../../contexts/AppContext";
import { getVideos, updateVideoDetail } from "../../actions";

import NavJSON from "../../data/nav.json";

const Container = styled.div`
  position: relative;
`;

const NavUl = styled.ul`
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const NavLi = styled.li`
  padding: 0.5rem 1rem;
`;

const Underline = styled.span<{ underlineLeft: number }>`
  background: #fff;
  height: 0.1rem;
  display: block;
  position: absolute;
  left: ${props => props.underlineLeft}px;
  bottom: 0;
  width: 2rem;
  transition: 0.4s;
  @media (max-width: 920px) {
    display: none;
  }
`;

const StyledNavButton = styled.div<{ selected: boolean }>`
  margin: 0 0.5rem;
  /* border: ${props =>
    props.selected ? "0.0625rem solid #fff" : "0.0625rem solid #fff"}; */
  border-radius: 1rem;
  opacity: ${props => (props.selected ? "1" : "0.5")};
  transition: 0.7s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

type NavData = {
  title: string;
  param: string;
};

const Nav: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(28.89);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getVideos("react tutorial", dispatch);
  }, [dispatch]);

  const handleOnClick = (param: string, index: number, element: any) => {
    setSelectedNav(index);
    const left = element.getBoundingClientRect().left;
    const width = element.getBoundingClientRect().width;
    setUnderlineLeft(left + width / 2 - 16);
    getVideos(param, dispatch);

    // close videoDetail
    const videoDetail = {
      video: {},
      isVisible: false,
      videoId: "",
      rowNum: 0
    };
    updateVideoDetail(videoDetail, dispatch);
  };

  const renderNav = () => {
    const navData: NavData[] = NavJSON;
    return navData.map((eachData: NavData, index) => {
      const selected = index === selectedNav ? true : false;
      return (
        <NavLi key={index}>
          <StyledNavButton
            selected={selected}
            onClick={e => handleOnClick(eachData.param, index, e.target)}
          >
            {eachData.title}
          </StyledNavButton>
        </NavLi>
      );
    });
  };

  return (
    <Container>
      <NavUl>{renderNav()}</NavUl>
      <Underline underlineLeft={underlineLeft} />
    </Container>
  );
};

export default Nav;
