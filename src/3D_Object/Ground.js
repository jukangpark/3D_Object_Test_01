import tile from "../tile";

const Ground = () => {
  const { width, height, length, padding } = tile;

  const groundWitdth = width * 11;
  const groundHeight = height * 11;
  // const texture = useLoader(THREE.TextureLoader, "/assets/texture/tiles.jpg");

  // props 로 Ground 너비 높이 데이터를 받아서
  // 해당 Ground 너비 높이만큼의 절반정도 값을 x 축 z 축 좌표만큼 이동시켜 설정한다.
  // 그리고 Ground 의 너비 값은 데이터의 양에 따라(?) 달라질지 ?
  // 아니면 사용자가 Ground 의 너비 값을 설정할 수 있게 끔 설정할지 ?
  return (
    <mesh position={[groundWitdth / 2, 0, groundHeight / 2]}>
      <boxGeometry args={[groundWitdth, 0.5, groundHeight]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  );
};

export default Ground;
