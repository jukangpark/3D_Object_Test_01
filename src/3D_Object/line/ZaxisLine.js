import { Line } from "@react-three/drei";
import tile from "../../tile";

const ZaxisLine = ({ i }) => {
  const { width, height, xAxisLength } = tile;

  return (
    <Line
      points={[
        [0, 0.3, height * i],
        [width * (xAxisLength + 1), 0.3, height * i],
      ]}
      color={"white"}
      lineWidth={0.5}
    />
  );
};

export default ZaxisLine;
