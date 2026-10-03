import { Text, useScroll, Image } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import { usePortalStore } from "@stores";

const Team = () => {
  const { camera } = useThree();
  const isActive = usePortalStore((state) => state.activePortalId === "team");
  const data = useScroll();

  useEffect(() => {
    // Hide scrollbar when active.
    data.el.style.overflow = isActive ? 'hidden' : 'auto';
    if (isActive) {
      if (isMobile) {
        gsap.to(camera.position, { z: 10, y: -39, x: 0, duration: 1 });
      } else {
        gsap.to(camera.position, { z: 12, y: -39, x: 0, duration: 1 });
      }
    }
  }, [isActive]);

  useFrame((state, delta) => {
    if (isActive) {
      if (!isMobile) {
        camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -(state.pointer.x * Math.PI) / 8, 0.03);
        camera.position.z = THREE.MathUtils.damp(camera.position.z, 12 - state.pointer.y * 2, 7, delta);
      }
    }
  });

  const titleProps = useMemo(() => ({
    font: "./soria-font.ttf",
    color: "black",
  }), []);

  const subtitleProps = useMemo(() => ({
    font: "./Vercetti-Regular.woff",
    color: "#222",
  }), []);

  return (
    <group>
      <group position={[0, 0, -1]}>
        <Image url="/team_painting.png" scale={isMobile ? [6, 6] : [10, 10]} />
      </group>
      <group position={isMobile ? [0, 0, 0] : [0, 1, 0]}>
        <Text {...titleProps} color="#fff" position={[0, 2, 0]} fontSize={isMobile ? 0.8 : 1.2} maxWidth={isMobile ? 3 : 5} textAlign="center">
          STARCHAIN LABS
        </Text>
        <Text {...subtitleProps} color="#ddd" position={[0, 0.5, 0]} fontSize={0.3} maxWidth={5} textAlign="center" lineHeight={1.5}>
          Founded by infinity1306it Pandey (MD & CTO).
        </Text>
        <Text {...subtitleProps} color="#ddd" position={[0, -0.5, 0]} fontSize={0.3} maxWidth={5} textAlign="center" lineHeight={1.5}>
          Backed by a world-class Engineering Team specializing in Frontend, Backend, and cutting-edge Web3 & Blockchain solutions.
        </Text>
        <Text {...subtitleProps} position={[0, -1.8, 0]} fontSize={0.25} maxWidth={5} textAlign="center" color="#bbb">
          Focusing on practical implementation, live projects, and structured mentorship.
        </Text>
      </group>
    </group>
  );
};

export default Team;
