import { Box, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./3D_Object/Ground";
import Stats from "stats.js";
import Server from "./3D_Object/Server";
import data from "./data";
import { useEffect } from "react";

const stats = new Stats();
document.body.append(stats.domElement);

const App = () => {
  useEffect(() => {
    console.log(data.data);
  }, []);
  // const camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  // 만약 "03A0409" 라는 좌표데이터가 들어왔을 때 표시해주는 코드
  // [4,9] => x 좌표 값이 4이고, z 좌표 값이 9인 서버 (Object BOX)

  return (
    <Canvas camera={{ position: [0, 50, 50], fov: 45 }}>
      <pointLight position={[0, 5, 5]} />

      {data.data.RACK_LIST.map((rack, index) => (
        <Server
          key={index}
          surfaceCode={rack.surfaceCode}
          alarmseverity={rack.alarmseverity}
        />
      ))}
      <Server />

      <Ground />
      <gridHelper args={[100, 100]} />
      <axesHelper args={[100]} />
      <TrackballControls />
    </Canvas>
  );
};

export default App;
