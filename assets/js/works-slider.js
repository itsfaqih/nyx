import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

const works = tns({
  container: '.works-slider',
  items: 3,
  fixedWidth: 530,
  gutter: 48,
  mouseDrag: true,
  controls: false,
  nav: false,
});