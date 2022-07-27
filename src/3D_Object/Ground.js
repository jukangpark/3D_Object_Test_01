import tile from "../tile";
// import { useLoader } from "@react-three/fiber";
// import * as THREE from "three";

const Ground = () => {
  const { width, height, xAxisLength, zAxisLength } = tile;

  const groundWidth = width * (xAxisLength + 1);
  const groundHeight = height * (zAxisLength + 1);
  // const texture = useLoader(THREE.TextureLoader, "/assets/texture/tiles.jpg");
  // Ground Texture 로 고객사에 맞게 이미지 png 매핑

  return (
    <mesh position={[groundWidth / 2, 0, groundHeight / 2]}>
      <boxGeometry args={[groundWidth, 0.5, groundHeight]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  );
};

export default Ground;
