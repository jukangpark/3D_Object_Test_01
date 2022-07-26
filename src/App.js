import {
  OrthographicCamera,
  PerspectiveCamera,
  TrackballControls,
  Text,
  Line,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./3D_Object/Ground";
// import Stats from "stats.js";
import Server from "./3D_Object/Server";
import data from "./data";
import CameraButton from "./components/CameraButton";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cameraProperty } from "./atoms";
import { useEffect } from "react";
import tile from "./tile";
import ZaxisLine from "./3D_Object/ZaxisLine";
import XaxisLine from "./3D_Object/XaxisLine";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// const stats = new Stats();
// document.body.append(stats.domElement);

const App = () => {
  const [perspectiveCamera, setPerspectiveCamera] =
    useRecoilState(cameraProperty);

  const { width, height, length, padding } = tile;

  const tileArray = [];

  for (let i = 0; i < length + 1; i++) {
    i = "0" + i;

    tileArray.push(i);
  }

  // const sizes = {
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // };

  useEffect(() => {
    tileArray.map((item) => console.log(item));
  }, []);
  // const camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  // 만약 "03A0409" 라는 좌표데이터가 들어왔을 때 표시해주는 코드
  // [4,9] => x 좌표 값이 4이고, z 좌표 값이 9인 서버 (Object BOX)

  return (
    <CanvasContainer>
      <CameraButton />

      <Canvas style={{ backgroundColor: "black" }}>
        <PerspectiveCamera
          position={[0, 50, 50]}
          fov={45} // 카메라 절사체 수직 시야, 도 단위로 표시되는 수직 시야이다. 기본값은 50이다.
          // aspect={sizes.width / sizes.height} 카메라 절두체 종횡비, 대부분의 경우 화변 너비 / 화면 높이 이다. 기본값은 1 (정사각형 화면)이다.
          makeDefault={perspectiveCamera}
        />

        <OrthographicCamera
          position={[0, 50, 50]}
          fov={45} // 카메라 절사체 수직 시야, 도 단위로 표시되는 수직 시야이다. 기본값은 50이다.
          // aspect={sizes.width / sizes.height} 카메라 절두체 종횡비, 대부분의 경우 화변 너비 / 화면 높이 이다. 기본값은 1 (정사각형 화면)이다.
          zoom={20}
          makeDefault={!perspectiveCamera}
        />

        <pointLight position={[0, 5, 5]} />

        {data.data.RACK_LIST.map((rack, index) => (
          <Server
            key={index}
            surfaceCode={rack.surfaceCode}
            alarmseverity={rack.alarmseverity}
          />
        ))}

        <Server />

        {tileArray.map((i, key) => (
          <Text
            index={key}
            color="white"
            position={[width * i + padding, 3, 0]}
            fontSize={2}
            textAlign={"left"}
          >
            {i}
          </Text>
        ))}

        {tileArray.map((i, key) => (
          <Text
            index={key}
            color="white"
            position={[-3, 0, height * i + padding]}
            fontSize={2}
            textAlign={"left"}
          >
            {"R" + i}
          </Text>
        ))}

        {tileArray.map((i, key) => (
          <XaxisLine i={i} key={key} />
        ))}

        {tileArray.map((i, key) => (
          <ZaxisLine i={i} key={key} />
        ))}

        <Ground />

        <gridHelper args={[100, 100]} />
        <axesHelper args={[100]} />
        <TrackballControls />
      </Canvas>
    </CanvasContainer>
  );
};

export default App;
