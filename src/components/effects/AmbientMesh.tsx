"use client";

import { useEffect, useRef, useState } from "react";

interface AmbientMeshProps {
  speed?: number;
  opacity?: number;
}

export default function AmbientMesh({ speed = 0.6, opacity = 0.2 }: AmbientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const saveData = (navigator as unknown as { connection?: { saveData?: boolean } })?.connection?.saveData === true;

    if (prefersReducedMotion || saveData) return;

    setCanRender(true);
  }, []);

  useEffect(() => {
    if (!canRender) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return;

    const isMobile = window.innerWidth < 768;
    const dpr = Math.max(0.5, Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2) * (isMobile ? 0.5 : 1));
    const effectiveSpeed = isMobile ? speed * 0.3 : speed;

    const vsSource = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform float uSpeed;
      uniform float uOpacity;
      uniform vec2 uMouse;
      uniform float uMouseInteractive;
      varying vec2 vUv;

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        float t = iTime * uSpeed;

        float n1 = sin(uv.x * 3.0 + t * 0.5) * cos(uv.y * 2.5 + t * 0.3);
        float n2 = sin(uv.x * 1.5 - t * 0.4 + 1.0) * cos(uv.y * 3.0 + t * 0.6);
        float n3 = sin((uv.x + uv.y) * 2.0 + t * 0.2) * 0.5;

        vec2 mouseNorm = uMouse / iResolution;
        float mouseDist = length(uv - mouseNorm);
        float mouseEffect = smoothstep(0.4, 0.0, mouseDist) * uMouseInteractive * 0.05;
        n1 += mouseEffect;

        float blend = (n1 + n2 + n3) * 0.33 + 0.5;

        vec3 color1 = vec3(0.859, 0.918, 0.996); // #DBEAFE
        vec3 color2 = vec3(0.576, 0.773, 0.992); // #93C5FD
        vec3 color3 = vec3(0.780, 0.824, 0.996); // #C7D2FE

        vec3 color = mix(color1, color2, smoothstep(0.3, 0.7, blend));
        color = mix(color, color3, smoothstep(0.5, 0.9, n3 + 0.5));

        vec3 finalColor = mix(vec3(1.0), color, uOpacity);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function compileShader(type: number, source: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      return shader;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 16, 0);

    const uvLoc = gl.getAttribLocation(program, "uv");
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 16, 8);

    const iTimeLoc = gl.getUniformLocation(program, "iTime");
    const iResLoc = gl.getUniformLocation(program, "iResolution");
    const uSpeedLoc = gl.getUniformLocation(program, "uSpeed");
    const uOpacityLoc = gl.getUniformLocation(program, "uOpacity");
    const uMouseLoc = gl.getUniformLocation(program, "uMouse");
    const uMouseIntLoc = gl.getUniformLocation(program, "uMouseInteractive");

    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    if (!isMobile) window.addEventListener("mousemove", onMouseMove);

    function resize() {
      if (!canvas || !gl) return;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    const startTime = Date.now();
    const targetDelta = isMobile ? 50 : 33;
    let lastFrame = 0;

    function loop(ts: number) {
      if (ts - lastFrame < targetDelta) {
        raf = requestAnimationFrame(loop);
        return;
      }
      lastFrame = ts;

      if (!gl || !canvas) return;
      gl.uniform1f(iTimeLoc, (Date.now() - startTime) / 1000);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.uniform1f(uSpeedLoc, effectiveSpeed);
      gl.uniform1f(uOpacityLoc, opacity);
      gl.uniform2f(uMouseLoc, mouse.x * dpr, (window.innerHeight - mouse.y) * dpr);
      gl.uniform1f(uMouseIntLoc, isMobile ? 0 : 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [canRender, speed, opacity]);

  if (!canRender) {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/30" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 bg-white">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
