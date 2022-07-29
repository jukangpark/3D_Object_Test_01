import { Text } from "@react-three/drei";

import tile from "../../tile";

const XaxisText = ({ i }) => {
  const { width } = tile;
  return (
    <Text
      color="white"
      position={[width * i + width / 2, 3, 0]}
      fontSize={2}
      textAlign={"left"}
    >
      {i}
    </Text>
  );
};

export default XaxisText;
