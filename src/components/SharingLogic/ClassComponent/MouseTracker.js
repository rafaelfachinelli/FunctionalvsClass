import React from "react";

import Mouse from "./Mouse";
import Gato from "./Gato";

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Movimente o mouse!</h1>
        <Mouse render={(mouse) => <Gato mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;
