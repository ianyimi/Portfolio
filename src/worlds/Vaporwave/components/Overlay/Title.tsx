import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  //border: 2px dashed red;
  z-index: 2;
`;

const Name = styled.h1`
  font-family: Thunderstorm;
  font-size: 5em;
  text-align: center;
  letter-spacing: 5px;
  //border: 2px blue dashed;
  color: white;
  background-color: rgba(0, 0, 0, 0);
`;

export default function Title() {

  return (
    <Container>
      <Name>Isaiah Anyimi</Name>
    </Container>
  )
}
