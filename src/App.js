import {
  OrthographicCamera,
  PerspectiveCamera,
  TrackballControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./3D_Object/Ground";
import Rack from "./3D_Object/Rack";
import data from "./data";
import CameraButton from "./components/CameraButton";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cameraProperty } from "./atoms";
import tile from "./tile";
import XaxisText from "./3D_Object/text/XaxisText";
import ZaxisText from "./3D_Object/text/ZaxisText";
import XaxisLine from "./3D_Object/line/ZaxisLine";
import ZaxisLine from "./3D_Object/line/XaxisLine";
import ThemeButton from "./components/ThemeButton";
import Alarm from "./components/Alarm";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [perspectiveCamera, setPerspectiveCamera] =
    useRecoilState(cameraProperty);

  const { xAxisLength, zAxisLength } = tile;

  const textXaxisArray = [];
  const textZaxisArray = [];
  const lineXaxisArray = [];
  const lineZaxisArray = [];

  for (let i = 0; i < xAxisLength + 1; i++) {
    i = "0" + i;
    textXaxisArray.push(i); // 3D text
    lineZaxisArray.push(Number(i)); // Line 의 좌표값 계산을 위해 Number로 타입 변환
  }
  for (let i = 0; i < zAxisLength + 1; i++) {
    i = "0" + i;
    textZaxisArray.push(i); // 3D text
    lineXaxisArray.push(Number(i)); // Line 의 좌표값 계산을 위해 Number로 타입 변환
  }

  lineXaxisArray.push(zAxisLength + 1);
  lineZaxisArray.push(xAxisLength + 1);

  return (
    <CanvasContainer>
      <ThemeButton />
      <CameraButton />
      <Alarm />

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
          <Rack
            key={index}
            surfaceCode={rack.surfaceCode}
            alarmseverity={rack.alarmseverity}
          />
        ))}

        <Rack />

        {textXaxisArray.map((i, index) => (
          <XaxisText key={index} i={i} />
        ))}

        {textZaxisArray.map((i, index) => (
          <ZaxisText key={index} i={i} />
        ))}

        {lineXaxisArray.map((i, index) => (
          <XaxisLine key={index} i={i} />
        ))}

        {lineZaxisArray.map((i, index) => (
          <ZaxisLine key={index} i={i} />
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
