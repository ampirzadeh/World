import ForceGraph3D from "3d-force-graph";
import "./style.css";

// Random tree
const N = 5_000;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i })),
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1)),
    })),
};

new ForceGraph3D(document.getElementById("3d-graph")!).graphData(gData);
