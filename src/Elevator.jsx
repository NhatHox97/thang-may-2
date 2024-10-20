import styled from "styled-components";

export const StyledElevator = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const StyledElevatorCage = styled.div`
  height: 100%;
  width: 30px;
  background: black;
  border-radius: 3px;
`;

export const Elevator = (props) => {
  return (
    <StyledElevator>
      <StyledElevatorCage />
    </StyledElevator>
  );
};
