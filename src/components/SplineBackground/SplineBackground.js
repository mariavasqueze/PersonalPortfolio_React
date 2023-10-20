import "./spline-background.css";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

export default function SplineBackground({ url, isLoaded, setIsLoaded }) {
  console.log("HEREEE", isLoaded);
  function handleLoad() {
    setIsLoaded(true);
  }

  return (
    <div className="spline-wrapper">
      <Spline
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="spline-background"
        scene={url}
      />
    </div>
  );
}
