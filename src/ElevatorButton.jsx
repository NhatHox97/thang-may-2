import PropTypes from "prop-types";
import styled from "styled-components";

const StyledElevatorButton = styled.button`
  &[aria-pressed="true"] {
    background: yellow;
  }
  border-radius: 50%;
  border: 5px solid black;
  height: 100px;
  width: 100px;
  font-weight: bold;
  font-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ElevatorButton = ({ pressed, ...rest }) => {
  return <StyledElevatorButton aria-pressed={!!pressed} {...rest} />;
};

ElevatorButton.propTypes = {
  pressed: PropTypes.bool
};
