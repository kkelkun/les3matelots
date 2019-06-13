import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
// import Typography from "@material-ui/core/Typography"

import ImageGridList from "../ImageGridList/ImageGridList"

// function TabContainer({ children, dir }) {
//   return (
//     // <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//     //   {children}
//     // </Typography>
//     <ImageGridList data={}/>
//   )
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired,
// }

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}))

export default () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  function handleChangeIndex(index) {
    setValue(index)
  }

  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
              sourceInstanceName: { eq: "gallery" }
            }
          ) {
            group(field: relativeDirectory) {
              fieldValue
              nodes {
                childImageSharp {
                  resize(width: 300, quality: 80) {
                    src
                  }
                }
                name
              }
            }
          }
        }
      `}
      render={({ allFile: { group: data } }) => {
        console.log(data)
        const imagesGridLists = data.map(({ nodes: images }) => (
          <ImageGridList data={images} />
        ))
        return (
          <div className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>

            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              {imagesGridLists}
            </SwipeableViews>
          </div>
        )
      }}
    />
  )
}
