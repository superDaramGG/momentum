import React, { Component } from "react";
import NamePresenter from "./NamePresenter";

class NameContainer extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value, // input에 입력된 값 가져오기
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // 이벤트 방지(새로고침)
    const { value } = this.state;
    this.props.saveName(value);
  };

  render() {
    const { value } = this.state;
    return (
      <NamePresenter
        value={value}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NameContainer;
