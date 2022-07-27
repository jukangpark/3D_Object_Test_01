import { Text } from "@react-three/drei";

import tile from "../../tile";

const ZaxisText = ({ i }) => {
  const { padding, height } = tile;
  return (
    <Text
      color="white"
      position={[-3, 0, height * i + padding]}
      fontSize={2}
      textAlign={"left"}
    >
      {"R" + i}
    </Text>
  );
};

export default ZaxisText;
