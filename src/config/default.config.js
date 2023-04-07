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
  INPUT: `text: distanceAtStartTime = 
  6%0%✖️2 = ; animation_type: text; animation: roll-off; animation_duration: 700; animation_pause: 1000; background_color: #FFFFFF; text_color: #292626;

text: %12%%0%; animation_type: text; animation: jello; animation_duration: 700; animation_pause: 1200; background_color: #FFFFFF; text_color: #292626;
`,

  DURATION: 700,
  PAUSE: 200,
  PREVIEW_BOX: {
    BG_COLOR: "#FFFFFF",
  },
  TEXT_COLOR: "#292626",
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
