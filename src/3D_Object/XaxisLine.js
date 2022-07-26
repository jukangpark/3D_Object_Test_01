import { Line } from "@react-three/drei";
import tile from "../tile";

const XaxisLine = ({ i }) => {
  const { width, height, length } = tile;

  return (
    <Line
      points={[
        [0, 0.3, height * i],
        [width * 11, 0.3, height * i],
      ]}
      color={"white"}
      lineWidth={1}
    />
  );
};

export default XaxisLine;
