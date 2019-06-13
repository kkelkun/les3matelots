import React from "react"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

const ImageGridList = ({ data }) => {
  return (
    <GridList style={{ margin: 0 }} cellHeight={160} cols={3}>
      {data.map(image => {
        let src = image.childImageSharp.resize.src
        let title = image.name

        return (
          <GridListTile key={src} cols={1}>
            <img src={src} alt={title} />
          </GridListTile>
        )
      })}
    </GridList>
  )
}

export default ImageGridList
