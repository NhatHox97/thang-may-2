import React from "react";
import { ElevatorButtons } from "./ElevatorButtons";
import { Building } from "./Building";
import { Layout } from "./Layout";

const FLOORS = 8;

export default function App() {
  const [currentFloor, setCurrentFloor] = React.useState(0);
  const [elevatorRequests, setElevatorRequests] = React.useState([]);
  const [directionUp, setDirectionUp] = React.useState(true); // Track elevator direction
  const interval = React.useRef();

  // Update elevator requests when an elevator button is pressed
  const onFloorRequest = React.useCallback(
    (floor) => {
      if (!elevatorRequests[floor] && floor !== currentFloor) {
        const newRequests = [...elevatorRequests];
        newRequests[floor] = true;
        setElevatorRequests(newRequests);
      }
    },
    [elevatorRequests, currentFloor]
  );

  const moveToFloor = React.useCallback(
    (floor) => {
      setCurrentFloor(floor);
      const newRequests = [...elevatorRequests];
      newRequests[floor] = false;
      setElevatorRequests(newRequests);
    },
    [elevatorRequests]
  );

  // Check for requests, process requests based on current direction
  React.useEffect(() => {
    clearTimeout(interval.current);
    interval.current = setInterval(() => {
      if (directionUp) {
        // Look for requests in the upward direction first
        for (let i = currentFloor + 1; i < FLOORS; i++) {
          if (elevatorRequests[i]) {
            moveToFloor(i);
            return;
          }
        }
        // If no requests upwards, switch to downward direction
        setDirectionUp(false);
      } else {
        // Look for requests in the downward direction
        for (let i = currentFloor - 1; i >= 0; i--) {
          if (elevatorRequests[i]) {
            moveToFloor(i);
            return;
          }
        }
        // If no requests downwards, switch to upward direction
        setDirectionUp(true);
      }
    }, 2000);
  }, [currentFloor, elevatorRequests, moveToFloor, directionUp]);

  return (
    <Layout className="App">
      <Building floors={FLOORS} currentFloor={currentFloor} />
      <ElevatorButtons
        floors={FLOORS}
        onFloorRequest={onFloorRequest}
        pressed={elevatorRequests}
      />
    </Layout>
  );
}
