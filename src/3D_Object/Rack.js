import * as THREE from "three";
import { Box, useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import tile from "../tile";
// import { useSpring } from "@react-spring/three";

// const loader = new THREE.ObjectLoader();

const Rack = ({ surfaceCode, alarmseverity }) => {
  const { width, height, padding } = tile;
  const texture = useLoader(THREE.TextureLoader, "/assets/texture/rack.png");
  // Rack Texture 로 고객사에 맞게 이미지 png 매핑
  const [hovered, setHovered] = useState();
  useCursor(hovered);
  let x = Number(surfaceCode?.slice(6, 7));
  let z = Number(surfaceCode?.slice(4, 5));

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

  // const { scale } = useSpring({ sacle: hovered ? [1.5, 1.5, 1.5] : [2, 5, 2] });

  return (
    <Box
      animated={true}
      position={[
        x === 1 ? x * (width + padding) : x * width + padding,
        1.5,
        z === 1 ? z * (height + padding) : z * height + padding,
      ]}
      args={
        hovered
          ? [(width / 2.5) * 1.2, height, (height / 2.5) * 1.2]
          : [width / 2.5, height, height / 2.5]
      }
      castShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshBasicMaterial color={color} map={texture} />
    </Box>
  );
};

export default Rack;
