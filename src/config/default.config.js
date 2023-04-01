export const OUTPUTS = {
  TEXT: "Text",
  OBJECT: "Object in a Grid",
};
export const animations = [
  "bounce",
  "bounce-off",
  "blink",
  "blink-off",
  "jello",
  "jello-off",
  "wobble",
  "wobble-off",
  "spin",
  "dance",
  "grow",
  "shrink",
  "roll",
  "roll-off",
  "scale",
  "scale-off",
  "swing",
  "swing-off",
];
export const outputs = ["Text"];

// INPUT for grid -> text: We can think of 97% x %6% as 97% groups of %5%  ⚽️.; animation: bounce; animation_duration: 700; animation_pause: 200; text_color: #FFFFFF; height: 308; width: 350; background_color: #1F2937
export const ANIMATION = {
  INPUT:
    "text: We can think of 2 x 8 as %2% groups of %8% circles; animation_type: text; animation: bounce; animation_duration: 500; animation_pause: 400; background_color: #1F2937; text_color: #FFFFFF",
  DURATION: 700,
  PAUSE: 200,
  PREVIEW_BOX: {
    BG_COLOR: "#1F2937",
    HEIGHT: 125,
    WIDTH: 375,
  },
  TEXT_COLOR: "#FFFFFF",
  STYLE: {
    BOUNCE: "bounce",
    BLINK: "blink",
    JELLO: "jello",
    WOBBLE: "wobble",
    BOUNCEOFF: "bounce-off",
    BLINKOFF: "blink-off",
    JELLOOFF: "jello-off",
    WOBBLEOFF: "wobble-off",
    SPIN: "spin",
    DANCE: "dance",
    GROW: "grow",
    SHRINK: "shrink",
    ROLL: "roll",
    ROLLOFF: "roll-off",
    SCALE: "scale",
    SCALEOFF: "scale-off",
    SWING: "swing",
    SWINGOFF: "swing-off",
  },
};
