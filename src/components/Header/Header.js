import React from "react"
import styled from "styled-components"

//MUI Components
import { AppBar, Toolbar, Container } from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

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

const Header = ({ siteTitle, children, handleTrigger }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 200 })
  handleTrigger(trigger)
  return (
    <StyledAppBar position="fixed" headerissticky={trigger}>
      <StyledContainer>
        <Title headerissticky={trigger}>{siteTitle}</Title>
        <Toolbar>{children}</Toolbar>
      </StyledContainer>
    </StyledAppBar>
  )
}

export default Header
