import styled from "@emotion/styled";

const Container = styled.div`
  top: 0;
  margin-top: 10%;
  //border: 2px dashed red;
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
	);

}
