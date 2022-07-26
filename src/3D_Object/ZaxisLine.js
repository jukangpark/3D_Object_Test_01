import { Line } from "@react-three/drei";
import tile from "../tile";

const ZaxisLine = ({ i }) => {
  const { width, height } = tile;

  return (
    <Line
      points={[
        [width * i, 0.3, 0],
        [width * i, 0.3, height * 11],
      ]}
      color={"white"}
      lineWidth={1}
    />
  );
};

export default ZaxisLine;
