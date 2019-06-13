import React from "react"

import PropTypes from "prop-types"

class Parallax extends React.Component {
  constructor(props) {
    super(props)
    var windowScrollTop = () => (window ? window.pageYOffset / 3 : 0)
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    }
    this.resetTransform = this.resetTransform.bind(this)
  }
  componentDidMount() {
    var windowScrollTop = () => (window ? window.pageYOffset / 3 : 0)
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    })
    window.addEventListener("scroll", this.resetTransform)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform)
  }
  resetTransform() {
    var windowScrollTop = () => (window ? window.pageYOffset / 3 : 0)
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    })
  }
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          ...this.state,
        }}
        ref="parallax"
      >
        {children}
      </div>
    )
  }
}

Parallax.propTypes = {
  children: PropTypes.node,
}

export default Parallax
