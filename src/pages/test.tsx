import styled from 'styled-components';

const Test = () => {
  const flexItems = ['item1', 'item2'];
  const metors = Array.from([...Array(10).keys()]).map((i) => ++i);

  const add = (a: number, ...b: number[]) => {
    console.log(a, b);
  };

  add(1, 2, 3)
  return (
    <FlexContainer>
      {flexItems.map((item) => (
        <FlexItem>{item}</FlexItem>
      ))}
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  width: 1000px;
  height: 500px;
  background-color: coral;
  > div:nth-child(1) {
    background-color: pink;
  }
  > div:nth-child(2) {
    background-color: skyblue;
  }
`;

const FlexItem = styled.div``;

export default Test;
