import { Line } from "@react-three/drei";
import tile from "../../tile";

const XaxisLine = ({ i }) => {
  const { width, height, zAxisLength } = tile;

  return (
    <Line
      points={[
        [width * i, 0.3, 0],
        [width * i, 0.3, height * (zAxisLength + 1)],
      ]}
      color={"white"}
      lineWidth={0.5}
    />
  );
};

export default XaxisLine;
