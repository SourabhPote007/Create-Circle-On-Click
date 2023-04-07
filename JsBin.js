import React from "react";

class MousePosition extends React.Component {
  constructor(props) {
    super(props);
    this.screenLog = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.logkey);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.logkey);
  }

  logkey = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const circle = document.createElement("div");
    circle.style.backgroundColor = "red";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";
    circle.style.top = `${y - 100}px`;
    circle.style.bottom = `${y + 100}px`;
    circle.style.right = `${x + 100}px`;
    circle.style.left = `${x - 100}px`;
    this.screenLog.current.appendChild(circle);
  };

  render() {
    return (
      <div>
        <p>Move your mouse to its position.</p>
        <p ref={this.screenLog}></p>
      </div>
    );
  }
}

export default MousePosition;
