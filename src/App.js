import {
  OrthographicCamera,
  PerspectiveCamera,
  TrackballControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./3D_Object/Ground";
import Rack from "./3D_Object/Rack";
import data from "./data";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cameraProperty } from "./atoms";
import tile from "./tile";
import XaxisText from "./3D_Object/text/XaxisText";
import ZaxisText from "./3D_Object/text/ZaxisText";
import XaxisLine from "./3D_Object/line/ZaxisLine";
import ZaxisLine from "./3D_Object/line/XaxisLine";
import { Suspense } from "react";
import Poiman from "./3D_Object/Poiman";

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
      {/* <ThemeButton />
      <CameraButton />
      <Alarm /> */}

      <Canvas style={{ backgroundColor: "black" }}>
        <PerspectiveCamera
          position={[40, 100, 150]}
          fov={50} // 전방 시야 default는 75
          // aspect={sizes.width / sizes.height} 카메라 절두체 종횡비, 대부분의 경우 화변 너비 / 화면 높이 이다. 기본값은 1 (정사각형 화면)이다.
          makeDefault={perspectiveCamera}
        />

        <OrthographicCamera
          position={[40, 100, 150]}
          fov={50} // 전방 시야 default는 75
          zoom={10}
          // aspect={sizes.width / sizes.height} 카메라 절두체 종횡비, 대부분의 경우 화변 너비 / 화면 높이 이다. 기본값은 1 (정사각형 화면)이다.

          makeDefault={!perspectiveCamera}
        />

        <pointLight position={[100, 200, 100]} />
        <Suspense fallback={null}>
          {data.data.RACK_LIST.map((rack, index) => (
            <Rack
              key={index}
              surfaceCode={rack.surfaceCode}
              alarmseverity={rack.alarmseverity}
            />
          ))}
        </Suspense>

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
        <Poiman />
        <Ground />

        <gridHelper args={[100, 100]} />
        <axesHelper args={[100]} />
        {/* <Suspense fallback={null}>
          <TestBox />
        </Suspense> */}
        <TrackballControls />
      </Canvas>
    </CanvasContainer>
  );
};

export default App;
