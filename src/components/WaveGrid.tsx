'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { throttle } from 'lodash';

export const WaveGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Grid parameters
    const size = 50;
    const geometry = new THREE.PlaneGeometry(size, size, 50, 50);
    const material = new THREE.MeshPhongMaterial({
      color: 0xFFF68F,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      shininess: 100,
    });

    const grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = -Math.PI / 3;
    scene.add(grid);

    // Lighting
    const light = new THREE.PointLight(0xFFF68F, 2);
    light.position.set(0, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 30;

    // Mouse movement handler (throttled)
    const onMouseMove = throttle((event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    }, 50); // Update every 50ms

    window.addEventListener('mousemove', onMouseMove);

    // Animation
    let frame = 0;
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      frame += 0.03;

      // Update vertices based on mouse position
      const positions = geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);

        // Distance from mouse
        const distanceToMouse = Math.sqrt(
          Math.pow(x / size - mousePosition.current.x, 2) +
          Math.pow(y / size - mousePosition.current.y, 2)
        );

        // Wave effect
        const wave = Math.sin(frame + distanceToMouse * 5) * 1.5; // Slightly reduced intensity
        const influence = Math.max(0, 1 - distanceToMouse);

        positions.setZ(i, wave * influence);
      }

      positions.needsUpdate = true;

      // Rotate grid slightly based on mouse position
      grid.rotation.x = -Math.PI / 3 + mousePosition.current.y * 0.05; // Reduced rotation intensity for subtlety
      grid.rotation.y = mousePosition.current.x * 0.05;

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      geometry.dispose();
      material.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-black"
      style={{ WebkitBackfaceVisibility: 'hidden' }}
    />
  );
};
