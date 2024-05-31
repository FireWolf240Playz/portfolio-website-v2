"use client";

import Spline from "@splinetool/react-spline";

function HeroScene() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="relative mt-[10rem] left-6 transform scale-[1.3]">
        <Spline scene="https://prod.spline.design/PVWfKVIWM4giTo3U/scene.splinecode" />
      </div>
    </div>
  );
}

export default HeroScene;
