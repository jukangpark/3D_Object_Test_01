import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cameraProperty } from "../atoms";

const CameraToggleButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const CameraButton = () => {
  const [perspectiveCamera, setPerspectiveCamera] =
    useRecoilState(cameraProperty);
  const handleAngleOfView = () => {
    console.log("handleAngleOfView");
  };
  const handleProperty = () => {
    setPerspectiveCamera(!perspectiveCamera);
  };

  return (
    <div>
      <CameraToggleButton onClick={handleAngleOfView}>
        시야각 조정
      </CameraToggleButton>
      <CameraToggleButton onClick={handleProperty}>
        {perspectiveCamera ? "Orthographic Camera" : "Perspective Camera"}
      </CameraToggleButton>
    </div>
  );
};

export default CameraButton;
