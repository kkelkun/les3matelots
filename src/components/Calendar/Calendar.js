import React, { Component } from "react"
import "antd/dist/antd.css"
import { Calendar, Alert } from "antd"
import moment from "moment"

class CustomCalendar extends Component {
  state = {
    value: moment("2017-01-25"),
    selectedValue: moment("2017-01-25"),
  }

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    })
  }

  onPanelChange = value => {
    this.setState({ value })
  }

  render() {
    const { value, selectedValue } = this.state
    return (
      <div>
        <Alert
          message={`You selected date: ${selectedValue &&
            selectedValue.format("YYYY-MM-DD")}`}
        />
        <Calendar
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
        />
      </div>
    )
  }
}

export default CustomCalendar
