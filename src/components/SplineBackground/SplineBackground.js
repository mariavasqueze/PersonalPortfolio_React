import "./spline-background.css";
import Spline from "@splinetool/react-spline";

export default function SplineBackground({}) {
  return (
    <div className="spline-wrapper">
      <Spline
        className="spline-background"
        scene="https://prod.spline.design/Pcz3HZiVYE9vnMhx/scene.splinecode"
      />
    </div>
  );
}
