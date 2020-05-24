import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

const testimonies = tns({
  container: '.testimonies-slider',
  items: 2,
  center: true,
  gutter: 96,
  mouseDrag: true,
  controls: false,
  nav: false,
  startIndex: 1,
});