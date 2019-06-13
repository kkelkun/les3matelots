/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import styled from "styled-components"

// MUI Components
import { Tabs, Tab } from "@material-ui/core"
// Own Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Carousel from "./Carousel/Carousel"
import Parallax from "./Parallax/Parallax"
// Others
import SwipeableViews from "react-swipeable-views"

const StyledSwipeableViews = styled(SwipeableViews)`
  position: relative;
  top: -5vh;
`

class Layout extends Component {
  state = {
    value: 0,
    trigger: false,
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }
  handleTrigger = trigger => {
    if (trigger !== this.state.trigger) {
      this.setState({ trigger })
    }
  }
  render() {
    const { viewTitles } = this.props

    const tabs = viewTitles.map(({ title }) => <Tab label={title} />)
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              handleTrigger={this.handleTrigger}
            >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor={this.state.trigger ? "primary" : "secondary"}
                textColor="primary"
                variant="fullWidth"
              >
                {tabs}
              </Tabs>
            </Header>

            <Parallax>
              <Carousel />
            </Parallax>

            <StyledSwipeableViews
              axis="x"
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              {this.props.children}
            </StyledSwipeableViews>

            <Footer />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  viewTitles: PropTypes.node.isRequired,
}

export default Layout
