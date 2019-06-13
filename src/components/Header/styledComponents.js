import React from "react"
import { AppBar, Container } from "@material-ui/core"
import styled from "styled-components"

const StyledAppBar = styled(({ headerissticky, ...props }) => (
  <AppBar {...props} />
))`
    && {
      ${props => !props.headerissticky && "box-shadow: none;"}
      background-color: ${props =>
        props.headerissticky ? "white" : "transparent"};
      transition: 300ms;
    }
    padding-top: ${props => (props.headerissticky ? "0px" : "25px")};
    && button {
      ${props => !props.headerissticky && "color: white"}
    }
  `
const StyledContainer = styled(Container)`
  display: flex;
`

const Title = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${props => props.headerissticky && "black"};
`

export { StyledAppBar, StyledContainer, Title }
