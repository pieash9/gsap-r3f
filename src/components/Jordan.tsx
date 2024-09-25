import { useGLTF } from "@react-three/drei";
import { JordanGLTF } from "../typings";

const Jordan = () => {
  const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;

  return (
    <>
      <group scale={10} position={[2, 1, -1]} rotation-x={[-Math.PI * 0.5]}>
        <mesh geometry={nodes.shoe_shoe_0.geometry} material={materials.shoe} />

        <mesh
          geometry={nodes.shoelace_shoelace_0.geometry}
          material={materials.shoelace}
        />
      </group>
    </>
  );
};

export default Jordan;
