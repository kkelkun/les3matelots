import React from "react"
import { StyledAppBar, StyledContainer, Title } from "./styledComponents"

//MUI Components
import { Toolbar } from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

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
