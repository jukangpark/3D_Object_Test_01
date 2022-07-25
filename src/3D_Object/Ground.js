const Ground = () => {
  return (
    <mesh position={[25, 0, 25]}>
      <boxGeometry args={[50, 0.5, 50]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Ground;
