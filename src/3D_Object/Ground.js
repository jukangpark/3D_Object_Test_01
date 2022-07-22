const Ground = () => {
  return (
    <mesh>
      <boxGeometry args={[25, 0.1, 25]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Ground;
