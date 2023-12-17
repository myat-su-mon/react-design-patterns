import SplitScreen from "./components/SplitScreen";

const LeftSideCompo = () => {
  return <h2>I am left</h2>;
};

const RightSideCompo = () => {
  return <h2>I am right</h2>;
};

const App = () => {
  return <SplitScreen Left={LeftSideCompo} Right={RightSideCompo} />;
};

export default App;
