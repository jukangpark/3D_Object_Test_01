import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const TestBox = () => {
  const [texture_1, texture_2, texture_3, texture_4, texture_5, texture_6] =
    useLoader(TextureLoader, [
      "/assets/texture/dice_01.jpeg",
      "/assets/texture/dice_02.jpeg",
      "/assets/texture/dice_03.jpeg",
      "/assets/texture/dice_04.jpeg",
      "/assets/texture/dice_05.jpeg",
      "/assets/texture/dice_06.jpeg",
    ]);

  return (
    <mesh position={[10, 5, 10]}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material-0" map={texture_1} />
      <meshStandardMaterial attach="material-1" map={texture_2} />
      <meshStandardMaterial attach="material-2" map={texture_3} />
      <meshStandardMaterial attach="material-3" map={texture_4} />
      <meshStandardMaterial attach="material-4" map={texture_5} />
      <meshStandardMaterial attach="material-5" map={texture_6} />
    </mesh>
  );
};

export default TestBox;
