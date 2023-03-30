export const OUTPUTS = {
  TEXT: "Text",
  OBJECT: "Object in a Grid",
};
export const animations = ["bounce", "blink", "jello", "wobble"];
export const outputs = ["Text"];

// INPUT for grid -> text: We can think of 97% x %6% as 97% groups of %5%  ⚽️.; animation: bounce; animation_duration: 700; animation_pause: 200; text_color: #FFFFFF; height: 308; width: 350; background_color: #1F2937
export const ANIMATION = {
  INPUT:
    "text: We can think of 2 x 8 as %2% groups of %8% circles; animation_type: text; animation: bounce; animation_duration: 500; animation_pause: 400; background_color: #1F2937; text_color: white",
  DURATION: 700,
  PAUSE: 200,
  PREVIEW_BOX: {
    BG_COLOR: "#1F2937",
    HEIGHT: 250,
    WIDTH: 350,
  },
  TEXT_COLOR: "#FFFFFF",
  STYLE: {
    BOUNCE: "bounce",
    BLINK: "blink",
    JELLO: "jello",
    WOBBLE: "wobble",
  },
};
