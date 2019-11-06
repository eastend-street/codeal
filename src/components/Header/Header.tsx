import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const StyledAppBar = styled(AppBar)`
  && {
    color: #fff;
    background-color: #232c3b;
    box-shadow: none;
  }
`;

const Logo = styled(Typography)`
  && {
    padding-left: 1rem;
    font-size: 1.5rem;
    color: #ffcb00;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo variant="h6" component="h1">
          Codeo
        </Logo>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
