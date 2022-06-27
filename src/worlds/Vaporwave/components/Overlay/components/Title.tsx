import styled from "@emotion/styled";

const Container = styled.div`
  top: 0;
  margin-top: 10%;
`;

const Name = styled.h1`
  font-family: Thunderstorm;
  font-size: 5em;
  text-align: center;
  letter-spacing: 5px;
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
