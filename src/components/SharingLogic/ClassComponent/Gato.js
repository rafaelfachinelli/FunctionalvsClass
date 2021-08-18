import React from "react";

import GatoImage from "../../../assets/images/cat.gif";

class Gato extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={GatoImage}
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
          left: mouse.x,
          top: mouse.y
        }}
        alt="Gato"
      />
    );
  }
}

export default Gato;
