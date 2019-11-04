import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import VideoList from "../VideoList/VideoList";

const Content = styled.div`
  min-height: 85vh;
  padding: 2rem;
`;

const EachCategory = styled.div`
  padding: 1rem;
`;

const Main: React.FC = () => {
  return (
    <Content>
      <Nav />
      <EachCategory>
        <VideoList />
      </EachCategory>
    </Content>
  );
};

export default Main;
