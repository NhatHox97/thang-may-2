import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ElevatorButton } from "./ElevatorButton";

const StyledElevatorButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ElevatorButtons = ({
  floors,
  pressed,
  onFloorRequest,
  ...rest
}) => {
  const onButtonPress = React.useCallback(
    (index) => (e) => {
      if (typeof onFloorRequest === "function") {
        onFloorRequest(index);
      }
    },
    [onFloorRequest]
  );

  const buttons = [];
  for (let i = 0; i < floors; i += 1) {
    buttons.push(
      <ElevatorButton key={i} pressed={pressed[i]} onClick={onButtonPress(i)}>
        {i + 1}
      </ElevatorButton>
    );
  }

  return <StyledElevatorButtons {...rest}>{buttons}</StyledElevatorButtons>;
};

ElevatorButtons.propTypes = {
  floors: PropTypes.number,
  pressed: PropTypes.arrayOf(PropTypes.bool),
  onFloorRequest: PropTypes.func
};

ElevatorButtons.defaultProps = {
  floors: 12,
  pressed: [],
  onFloorRequest: () => {}
};
