import "./spline-background.css";
import Spline from "@splinetool/react-spline";

export default function SplineBackground({ url }) {
  return (
    <div className="spline-wrapper">
      <Spline className="spline-background" scene={url} />
    </div>
  );
}
