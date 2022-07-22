import { Box, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./3D_Object/Ground";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 50, 50], fov: 30 }}>
      <pointLight position={[0, 5, 5]} />
      <Box position={[0, 1, 0]} args={[1, 3]} />
      <Ground />
      <TrackballControls />
    </Canvas>
  );
};

export default App;
