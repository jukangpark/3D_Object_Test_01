import { Box } from "@react-three/drei";
import { useEffect } from "react";

const Server = ({ surfaceCode, alarmseverity }) => {
  console.log(surfaceCode);
  let x = surfaceCode?.slice(6, 7);
  let z = surfaceCode?.slice(4, 5);

  useEffect(() => {
    console.log(x, z);
    console.log(alarmseverity);
  }, []);

  let color = null;

  if (alarmseverity === "0") {
    color = "whitesmoke";
  } else if (alarmseverity === "1") {
    color = "yellow";
  } else if (alarmseverity === "2") {
    color = "orange";
  } else if (alarmseverity === "3") {
    color = "red";
  }

  return (
    <Box position={[x * 4, 1.5, z * 4]} args={[2, 3, 2]}>
      <meshBasicMaterial color={color} />
    </Box>
  );
};

export default Server;
