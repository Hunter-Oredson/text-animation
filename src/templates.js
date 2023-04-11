export const properFraction =
  () => `text:  1; animation: bounce; animation_duration: 500; animation_pause: 400; text_color: #292626;

text: %2% ➖ ; animation: bounce; animation_duration: 500; animation_pause: 400; text_color: #292626;

text:  %2%; animation: bounce; animation_duration: 500; animation_pause: 400; text_color: #292626;`;

export const threeExamples = () => `text: 
     Meters (m) %📏📐%
    Gallons (gal) %🥛🍼%
     Pounds (lb) %⚖️🏋️% ; animation: jello; animation_duration: 600; animation_pause: 600; text_color: #292626;`;

export const cube = () => `text: %💧% 
 <font-size: 24pt>🧊</>↕️ 
 ↔️ ; animation: bounce; animation_duration: 500; animation_pause: 400; text_color: #292626;`;

export const improperFractionConversion =
  () => `text:         1         %5%  ; animation_type: text; animation: spin; animation_duration: 500; animation_pause: 2000; text_color: #292626;

text: %1% + ➖  =  ➖ ; animation_type: text; animation: spin; animation_duration: 500; animation_pause: 400; text_color: #292626;

text:       %2%         4; animation_type: text; animation: bounce; animation_duration: 500; animation_pause: 100; text_color: #292626;`;

export const plugInValues =
  () => `text: distance = speed ✖️ time; animation_type: text; animation: roll-off; animation_duration: 700; animation_pause: 1000; text_color: #292626;

text: 🟰 ; animation_type: text; animation: roll-off; animation_duration: 700; animation_pause: 1000; text_color: #292626;

text: distance = %60% %✖️% %2%; animation_type: text; animation: jello; animation_duration: 700; animation_pause: 1000; text_color: #292626;`;

export const equationChange = () => `text: distanceAtStartTime = 
6%0%✖️2 = ; animation_type: text; animation: roll-off; animation_duration: 700; animation_pause: 1000; text_color: #292626;

text: %12%%0%; animation_type: text; animation: jello; animation_duration: 700; animation_pause: 1200; text_color: #292626;`;

// make sure to update this anytime we add any more templates!
export const allTemplates = [
  { title: "Proper Fraction", text: properFraction() },
  { title: "3 Examples", text: threeExamples() },
  { title: "Cube", text: cube() },
  {
    title: "Fraction Conversion - Improper",
    text: improperFractionConversion(),
  },
  { title: "Plug in Values", text: plugInValues() },
  { title: "Equation Change", text: equationChange() },
];
