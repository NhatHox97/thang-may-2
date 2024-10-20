import styled from "styled-components";

const StyledWindow = styled.div`
  background: #fff;
  height: 100%;
`;

const StyledElevatorShaft = styled.div``;

export const StyledBuildingFloor = styled.div`
  height: ${(props) => props.height}px;
  padding: 10px;
  display: flex;
  gap: 10px;
  box-sizing: border-box;

  ${StyledWindow} {
    flex: 1 1 auto;
  }

  ${StyledElevatorShaft} {
    flex: 1 1 auto;
  }
`;

export const BuildingFloor = ({ height, ...rest }) => {
  return (
    <StyledBuildingFloor height={height} {...rest}>
      <StyledWindow />
      <StyledWindow />
      <StyledWindow />
      <StyledElevatorShaft />
      <StyledWindow />
      <StyledWindow />
      <StyledWindow />
    </StyledBuildingFloor>
  );
};
