import { createVcr } from "dom-vcr";
import * as gif from "modern-gif";

export async function generateDownloadable(duration) {
  const divToRecord = document.getElementById("previewElement");
  const numFrames = duration;

  const gifVcr = await createVcr(divToRecord, {
    debug: true,
    type: "gif",
    gif,
    interval: 80,
  });

  await gifVcr.record(numFrames, { delay: 50 });
  const blob = await gifVcr.render();
  window.open(URL.createObjectURL(blob));
}
