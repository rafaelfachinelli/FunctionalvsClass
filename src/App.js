import SampleFunctionalComponent from "./components/DifferenceLogic/FunctionalComponent/SampleFunctionalComponent";
import SampleClassComponent from "./components/DifferenceLogic/ClassComponent/SampleClassComponent";
import MouseTracker from "./components/SharingLogic/ClassComponent/MouseTracker";
import { RFC } from "./components/SharingLogic/FunctionalComponent/RFC";

function App() {
  return (
    <div className="App">
      <SampleFunctionalComponent />
      <SampleClassComponent />
      {/* <MouseTracker /> */}
      {/* <RFC /> */}
    </div>
  );
}

export default App;
