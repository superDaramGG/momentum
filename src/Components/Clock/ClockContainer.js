import React, { Component } from "react";
import ClockPresenter from "./ClockPresenter";

class ClockContainer extends Component {
  state = {
    time: "",
    greeting: "",
  };

  getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = `${hour > 9 ? hour : `0${hour}`}:${
      minute > 9 ? minute : `0${minute}`
    }`;

    this.setState({
      time,
    });

    if (hour >= 5 && hour < 12) {
      this.setState({
        greeting: "새로운 아침이야 분발하자",
      });
    } else if (hour >= 12 && hour < 17) {
      this.setState({
        greeting: "활기찬 오후 조금만 힘내면 퇴근",
      });
    } else {
      this.setState({
        greeting: "맥주 한 잔?",
      });
    }
  };

  componentDidMount() {
    setInterval(this.getTime, 2);
  }

  render() {
    const { time, greeting } = this.state;
    const { name } = this.props;
    return <ClockPresenter name={name} time={time} greeting={greeting} />;
  }
}

export default ClockContainer;
