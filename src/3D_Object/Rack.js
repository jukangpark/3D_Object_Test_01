import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Box, useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import tile from "../tile";

const Rack = ({ surfaceCode, alarmseverity }) => {
  const { width, height } = tile;

  const [texture_1, texture_2, texture_3, texture_4, texture_5, texture_6] =
    useLoader(TextureLoader, [
      "/assets/texture/rack3.png",
      "/assets/texture/rack2.png",
      "/assets/texture/tile_01.jpg",
      "/assets/texture/rack2.png",
      "/assets/texture/rack.png", // 정면
      "/assets/texture/rack2.png",
    ]);

  const [hovered, setHovered] = useState();
  useCursor(hovered);
  let x = Number(surfaceCode?.slice(6, 7));
  let z = Number(surfaceCode?.slice(4, 5));

  let color = null;

  switch (alarmseverity) {
    case "1":
      color = "yellow";
      break;
    case "2":
      color = "orange";
      break;
    case "3":
      color = "red";
      break;
    default:
      color = "whitesmoke";
      break;
  }

  // 정육면체에 Texture 매핑을 하려면 이렇게 6면 매핑하면됨.

  return (
    <Box
      animated={true}
      position={[
        x === 1 ? x * (width + width / 2) : x * width + width / 2,
        1.5,
        z === 1 ? z * (height + height / 2) : z * height + height / 2,
      ]}
      args={
        hovered
          ? [(width / 2.5) * 1.2, height, (height / 2.5) * 1.2]
          : [width / 2.5, height, height / 2.5]
      }
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={color} attach="material-0" map={texture_1} />
      <meshStandardMaterial color={color} attach="material-1" map={texture_2} />
      <meshStandardMaterial color={color} attach="material-2" map={texture_3} />
      <meshStandardMaterial color={color} attach="material-3" map={texture_4} />
      <meshStandardMaterial color={color} attach="material-4" map={texture_5} />
      <meshStandardMaterial color={color} attach="material-5" map={texture_6} />
    </Box>
  );
};

export default Rack;
