import SampleFunctionalComponent from "./components/SampleFunctionalComponent";
import SampleClassComponent from "./components/SampleClassComponent";
import MouseTracker from "./components/SharingLogic/ClassComponent/MouseTracker";
import { RFC } from "./components/SharingLogic/FunctionalComponent/RFC";

function App() {
  return (
    <div className="App">
      {/* <SampleFunctionalComponent /> */}
      {/* <SampleClassComponent /> */}
      {/* <MouseTracker /> */}
      <RFC />
    </div>
  );
}

export default App;
