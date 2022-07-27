import { Text } from "@react-three/drei";

import tile from "../../tile";

const XaxisText = ({ i }) => {
  const { width, padding } = tile;
  return (
    <Text
      color="white"
      position={[width * i + padding, 3, 0]}
      fontSize={2}
      textAlign={"left"}
    >
      {i}
    </Text>
  );
};

export default XaxisText;
