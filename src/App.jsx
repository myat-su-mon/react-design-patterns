import SplitScreen from "./components/SplitScreen";

const LeftSideCompo = ({ title }) => {
  return <h2 style={{ background: "brown" }}>{title}</h2>;
};

const RightSideCompo = ({ title }) => {
  return <h2 style={{ background: "gray" }}>{title}</h2>;
};

const App = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideCompo title={"Left"} />
      <RightSideCompo title={"Right"} />
    </SplitScreen>
  );
};

export default App;
