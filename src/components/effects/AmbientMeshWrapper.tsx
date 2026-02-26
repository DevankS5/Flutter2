"use client";

import dynamic from "next/dynamic";

const AmbientMesh = dynamic(() => import("@/components/effects/AmbientMesh"), {
  ssr: false,
});

export function AmbientMeshWrapper(props: { speed?: number; opacity?: number }) {
  return <AmbientMesh {...props} />;
}
