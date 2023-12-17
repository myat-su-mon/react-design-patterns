import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${(p) => p.flex};
`;

const SplitScreen = ({ children,leftWidth, rightWidth}) => {
  const [left, right]= children;
  return (
    <Container>
      <Panel flex={leftWidth}>
        {left}
      </Panel>
      <Panel flex={rightWidth}>
        {right}
      </Panel>
    </Container>
  );
};

export default SplitScreen;
