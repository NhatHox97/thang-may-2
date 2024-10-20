import styled from "styled-components";
import PropTypes from "prop-types";
import { Elevator, StyledElevator } from "./Elevator";
import { BuildingFloor } from "./BuildingFloor";

const FLOOR_HEIGHT = 100;

const StyledBuilding = styled.div`
  height: ${(props) => props.floors * FLOOR_HEIGHT}px;
  width: 200px;
  background: gray;

  position: relative;
  ${StyledElevator} {
    height: ${FLOOR_HEIGHT}px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-${(props) => props.currentFloor * FLOOR_HEIGHT}px);
    transition: 1s ease-in-out transform;
  }
`;

export const Building = (props) => {
  const buildingFloors = [];
  for (let i = 0; i < props.floors; i += 1) {
    buildingFloors.push(<BuildingFloor height={FLOOR_HEIGHT} />);
  }

  return (
    <StyledBuilding {...props}>
      {buildingFloors}
      <Elevator />
    </StyledBuilding>
  );
};

Building.propTypes = {
  floors: PropTypes.number,
  currentFloor: PropTypes.number
};

Building.defaultProps = {
  currentFloor: 6
};
