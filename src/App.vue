<template>
  <div class="container max-w-7xl px-3 md:px-12 py-24">
    <div class="grid md:grid-cols-2 gap-6">
      <div class="text-lg font-semibold mb-3">Options</div>
      <div class="text-lg font-semibold mb-3">Preview</div>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-container p-6 rounded-md md:h-full">
        <!-- <div class="flex flex-wrap gap-3">
          <label class="flex items-center mt-3 border px-3 py-2 cursor-pointer rounded-md font-semibold" :class="{ 'btn-selected': formData.isImportFromCsv === false }">
            <input type="radio" name="animation" class="hidden form-radio border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" @click="() => formData.isImportFromCsv = false">
            <span>Text Input</span>
          </label>
          <label class="flex items-center mt-3 border px-3 py-2 cursor-pointer rounded-md font-semibold" :class="{ 'btn-selected': formData.isImportFromCsv === true }">
            <input type="radio" name="animation" class="hidden form-radio border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" @click="() => formData.isImportFromCsv = true">
            <span>Import from CSV</span>
          </label>
        </div> -->
        <div v-if="!formData.isImportFromCsv">
          <label class="block mt-3">
            <span>Input Text:</span>
            <textarea
              rows="4"
              @change="handleInputChange"
              type="text"
              class="mt-1 block w-full bg-input rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="formData.input"
            >
            </textarea>
          </label>

          <label class="block mt-5">Animation Type: </label>
          <div class="flex flex-wrap gap-3">
            <label
              v-for="(item, index) in outputs"
              :key="index"
              class="flex items-center mt-1 border px-3 py-2 cursor-pointer rounded-md font-semibold"
              :class="{ 'btn-selected': formData.animation_type === item }"
            >
              <input
                @change="handleFormUpdate"
                type="radio"
                name="animation_type"
                class="hidden form-radio border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="formData.animation_type"
                :value="item"
              />
              <span>{{ item }}</span>
            </label>
          </div>

          <div>
            <label class="flex items-center mt-3 color-label">
              <span>Text Color:</span>
              <div class="cp_wrapper">
                <input
                  type="color"
                  @input="handleFormUpdate"
                  name="text_color"
                  class="ml-3 rounded-md bg-input border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  v-model="formData.text_color"
                />
              </div>
            </label>
          </div>
          <hr />
          <h3 class="group-title">Box</h3>
          <div>
            <div class="container flex mt-3">
              <label class="block mt-3" style="max-width: 45%">
                <span class="block">Width (px):</span>
                <input
                  @keyup="handleFormUpdate"
                  type="number"
                  name="box_width"
                  class="rounded-md bg-input border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  style="max-width: 100%"
                  v-model="formData.preview_box.width"
                  placeholder="Width"
                />
              </label>
              <span class="block mt-11 ml-2 mr-2">X</span>
              <label class="block mt-3" style="max-width: 45%">
                <span class="block">Height (px):</span>
                <input
                  @keyup="handleFormUpdate"
                  type="number"
                  name="box_height"
                  class="rounded-md bg-input border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  style="max-width: 100%"
                  v-model="formData.preview_box.height"
                  placeholder="Height"
                />
              </label>
            </div>
          </div>
          <div>
            <label class="flex items-center mt-3 color-label">
              <span>Background Color:</span>
              <div class="cp_wrapper">
                <input
                  @input="handleFormUpdate"
                  type="color"
                  name="box_bg_color"
                  class="ml-3 rounded-md bg-input border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  v-model="formData.preview_box.bg_color"
                />
              </div>
            </label>
          </div>
          <hr />
          <label class="block mt-4">Animation Style: </label>
          <div class="flex flex-wrap gap-3">
            <label
              v-for="(item, index) in animations"
              :key="index"
              class="flex items-center mt-1 border px-3 py-2 cursor-pointer rounded-md font-semibold"
              :class="{ 'btn-selected': formData.animation === item }"
            >
              <input
                @click="handleClick"
                type="radio"
                name="animation"
                class="hidden form-radio border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="formData.animation"
                :value="item"
              />
              <span>{{ item }}</span>
            </label>
          </div>
          <div>
            <label class="block mt-4">
              <span class="block">Animation Duration (ms):</span>
              <input
                @keyup="handleFormUpdate"
                type="number"
                step="50"
                class="mt-1 rounded-md bg-input border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="formData.animation_duration"
              />
            </label>
          </div>
          <div>
            <label class="block mt-4">
              <span class="block">Animation Pause (ms):</span>
              <input
                @keyup="handleFormUpdate"
                type="number"
                step="50"
                class="mt-1 rounded-md bg-input border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="formData.animation_pause"
              />
            </label>
          </div>
        </div>
        <div v-else>
          <label class="block mt-5">
            <span>Import CSV:</span>
            <input
              type="file"
              class="form-file mt-3 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="onFileUpload"
            />
          </label>
          <div v-if="csvFileName" class="mt-3">
            File name: {{ csvFileName }}
          </div>
        </div>
      </div>
      <div>
        <div
          class="bg-container rounded-md p-1 md:h-full text-center flex items-center justify-center"
          id="previewElement"
          :style="{
            backgroundColor: formData.preview_box.bg_color,
            height: formData?.preview_box?.height
              ? formData?.preview_box?.height + 'px'
              : 'fit-content',
            width: formData?.preview_box?.width
              ? formData?.preview_box?.width + 'px'
              : 'fit-content',
          }"
        >
          <div
            ref="previewElement"
            style="white-space: pre-wrap"
            v-html="formData.result"
          ></div>
        </div>
        <div class="flex">
          <input
            type="button"
            class="mt-3 px-3 py-2 font-semibold rounded-md text-black bg-teal-600 hover:bg-teal-500 cursor-pointer transition"
            value="Generate"
            @click="GenerateAnimation()"
          />

          <button
            id="generate-btn"
            class="mt-3 ml-3 px-3 py-2 font-semibold rounded-md text-black bg-teal-600 hover:bg-teal-500 cursor-pointer transition"
            @click="generateGif"
          >
            Generate GIF
          </button>
        </div>
        <div>
          <h3 class="group-title">Tips</h3>
          <ul>
            <li>
              Between the two quotes to the right is a thin space character: “ ”
            </li>
            <li>Here is an inverted underscore character: ▔</li>
            <li>
              To add an emoji (🐈🐶🔵) on a Windows computer, press Win + ;
            </li>
            <li>
              To add an emoji (🐈🐶🔵) on a Mac computer, press Command +
              Control + Space
            </li>
            <li>
              You can add multiple lines of text in a single ‘row’ of text
              input. This is helpful when explaining arithmetic.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-6 px-3 md:px-12">
    <div v-if="formData.isImportFromCsv" class="mt-6">
      <table class="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th
              v-for="tableHead in csvRowDataKeys"
              :key="tableHead"
              class="border border-slate-300 p-2"
            >
              {{ tableHead }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in csvRowData" :key="index">
            <td
              v-for="tableHead in csvRowDataKeys"
              :key="tableHead"
              class="border border-slate-300 p-2"
            >
              {{ row[tableHead] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import Papa from "papaparse";
import {
  ANIMATION,
  OUTPUTS,
  animations,
  outputs,
} from "./config/default.config";
import { generateDownloadable } from "./downloader";

const formData = ref({
  isImportFromCsv: false,
  input: ANIMATION.INPUT,
  text: "",
  animation: animations[0],
  animation_type: outputs[0],
  animation_duration: ANIMATION.DURATION,
  animation_pause: ANIMATION.PAUSE,
  preview_box: {
    bg_color: ANIMATION.PREVIEW_BOX.BG_COLOR,
    height: ANIMATION.PREVIEW_BOX.HEIGHT,
    width: ANIMATION.PREVIEW_BOX.WIDTH,
  },
  text_color: ANIMATION.TEXT_COLOR,
  result: "",
});

const previewElement = ref(null);
const csvRowData = ref([]);
const csvRowDataKeys = ref([]);
const csvFileName = ref("");
const downloadReady = ref(false);

watchEffect(() => {
  updateText();
});

onMounted(() => {
  initiateApp();
});

function initiateApp() {
  GenerateAnimation();
}

function handleFormUpdate() {
  GenerateAnimation();
}

function handleClick(e) {
  // styleValue = e.target.value;
  GenerateAnimation(null, e.target.value);
}

function handleInputChange() {
  setTimeout(() => {
    const multilines = formData.value.input
      .split("\n\n")
      .filter((line) => line)
      .map((line) => line.replace(/\b\n+|\n+\b/g, ""));

    GenerateAnimation(multilines.map((line) => parseOptions(line)));
    updateText(multilines);
  });
}

function updateText() {
  formData.value.text = parseText();
}

function parseText(option) {
  const formDataValues = { ...formData._rawValue };
  let options = Object.entries(formDataValues).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return option
    ? option.split(";")[0].split(": ")[1]
    : options.input.split(";")[0].split(": ")[1];
}

/**
 *
 * @param {Array} csvData
 */
async function makeAnimation(csvData, useButtonAnimation) {
  downloadReady.value = false;
  formData.value.result = "";
  await makePromise(async () => {
    const OUTPUTS_OBJECT = OUTPUTS.OBJECT.split(" ")[0]?.toLowerCase();
    const items = [];
    let itemsHtml = "";
    for (let rowIndex = 0; rowIndex < csvData.length; rowIndex++) {
      const row = csvData[rowIndex];
      let rowOutput = row?.animation_type
        ?.toLowerCase()
        ?.includes(OUTPUTS_OBJECT)
        ? OUTPUTS.OBJECT
        : OUTPUTS.TEXT;
      const item = {
        input: row.text,
        animation:
          useButtonAnimation ?? row?.animation ?? ANIMATION.STYLE.BOUNCE,
        animation_type: rowOutput,
        animation_duration: row?.animation_duration
          ? parseInt(row.animation_duration)
          : ANIMATION.DURATION,
        animation_pause: row?.animation_pause
          ? parseInt(row.animation_pause)
          : ANIMATION.PAUSE,
        result: "",
        text_color: row?.text_color ?? "#FFFFFF",
        colors: [row.param_1, row.param_2],
      };
      item.result = getResults(item, rowIndex);
      itemsHtml += item.result;
      items.push(item);
    }
    formData.value.result = itemsHtml;
    await animateToQueue(items);
  }, 50);
  updateInput(csvData, useButtonAnimation);
}

function parseOptions(input = formData.value.input) {
  const options = input
    .split("; ")
    .map((option) => {
      return option.split(": ");
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  // if(options.text) formData.value.text = options.text
  if (options.animation != formData.value.animation)
    formData.value.animation = options.animation;
  if (options.animation_duration != formData.value.animation_duration)
    formData.value.animation_duration = options.animation_duration;
  if (options.animation_pause != formData.value.animation_pause)
    formData.value.animation_pause = options.animation_pause;
  if (options.background_color != formData.value.preview_box.bg_color)
    formData.value.preview_box.bg_color = options.background_color;
  if (options.text_color != formData.value.text_color)
    formData.value.text_color = options.text_color;
  if (options.height != formData.value.preview_box.height)
    formData.value.preview_box.height = options.height;
  if (options.width != formData.value.preview_box.width)
    formData.value.preview_box.width = options.width;
  if (options.animation_type != formData.value.animation_type)
    formData.value.animation_type = options.animation_type;

  return options;
}

function updateInput(data, useButtonAnimation) {
  setTimeout(() => {
    const formDataValues = { ...formData._rawValue };
    let options =
      data ??
      Object.entries(formDataValues).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    let text = "";

    options.forEach((option) => {
      option["text"] =
        option?.text ?? option.input.split(";")[0].split(": ")[1];
      option["height"] =
        option?.height ??
        option.preview_box?.height ??
        ANIMATION.PREVIEW_BOX.HEIGHT;
      option["width"] =
        option?.width ??
        option.preview_box?.width ??
        ANIMATION.PREVIEW_BOX.WIDTH;
      option["animation"] =
        useButtonAnimation ?? option?.animation ?? ANIMATION.STYLE.BOUNCE;
      option["background_color"] =
        option?.background_color ?? option.preview_box?.bg_color ?? "white";

      // formData.value.text = options["text"];

      delete option.preview_box;
      delete option.isImportFromCsv;
      delete option.input;
      delete option.result;

      text += Object.entries(option)
        .map((o) => o.join(": "))
        .join("; ");
      text += "\n\n";
    });

    formData.value.input = text;
  }, 10);
}

async function animateToQueue(items) {
  await makePromise(async () => {
    if (previewElement.value) {
      for (let rowIndex = 0; rowIndex < items.length; rowIndex++) {
        const item = items[rowIndex];
        const animation_pause = item.animation_pause;
        const elements = Array.from(
          previewElement.value.querySelectorAll(`.row-${rowIndex} .invisible`)
        );
        if (
          item.animation.includes("off") ||
          item.animation.toLowerCase() === "shrink"
        ) {
          elements.forEach((element) => {
            element.className = "";
          });
        }
        for (let index = 0; index < elements.length; index++) {
          const element = elements[index];
          if (index === 0) {
            element.className = "";
          } else {
            await makePromise(() => {
              toAnimate(element, item);
            }, animation_pause);
          }
        }
      }
    }
  }, 50);
}

async function makePromise(callback, timeout) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, timeout);
  });
}

function getResults(item, rowIndex) {
  const { colors } = item;
  let number_1 = null;
  let number_2 = null;
  let type = "";
  let number_1_style = `color: ${
    colors[0] ? colors[0] : "inherit"
  }; animation-duration: ${item.animation_duration}ms;`;
  let number_2_style = `color: ${
    colors[1] ? colors[1] : "inherit"
  }; animation-duration: ${item.animation_duration}ms;`;

  const regex_number = /(%\d+%)[\sx*]+(%\d+%)/gm;
  const regex_type = /\d+\s*%\s+([\w]+)[\.\s]+$|\d+\s*%\s+([\W]+)[\.\s]+$/gm;
  let str = item.input; //.replace(/\.[^.]*$/gm, '');
  let m;
  while ((m = regex_type.exec(str)) !== null) {
    if (m.index === regex_number.lastIndex) regex_number.lastIndex++;
    if (m[2]) type = m[2];
  }

  while ((m = regex_number.exec(str)) !== null) {
    if (m.index === regex_number.lastIndex) regex_number.lastIndex++;
    if (m[1]) {
      number_1 = parseInt(m[1].replaceAll("%", ""));
      str = str.replaceAll(
        m[1],
        `<span class="invisible" style="${number_1_style}">${number_1}</span>`
      );
    }
    if (m[2]) {
      number_2 = parseInt(m[2].replaceAll("%", ""));
      str = str.replaceAll(
        m[2],
        `<span class="invisible" style="${number_2_style}">${number_2}</span>`
      );
    }
  }
  // number_1 = number_1 ? number_1 : DEFAULT_GRID[0]
  // number_2 = number_2 ? number_2 : DEFAULT_GRID[1]
  if (!number_1 || !number_2) {
    const regex_within_percentage = /\%(.*?)\%/gm;
    while ((m = regex_within_percentage.exec(str)) !== null) {
      if (m.index === regex_within_percentage.lastIndex)
        regex_within_percentage.lastIndex++;
      str = str.replaceAll(
        m[0],
        `<span class="invisible" style="${number_2_style}">${m[1]}</span>`
      );
    }
  }
  if (item.animation_type == OUTPUTS.OBJECT) {
    str = "";
    [...Array(number_1)].forEach(() => {
      [...Array(number_2)].forEach(() => {
        str += `<span class="invisible" style="animation-duration: ${item.animation_duration}ms;">${type}</span>`;
      });
      str += "</br>";
    });
  }

  return `<div class="row-${rowIndex}" style="color: ${item.text_color}"><div class="invisible">${str}</div></div>`;
}

function toAnimate(element, item) {
  let elementClasses = ["animate", "animate-" + item?.animation?.toLowerCase()];
  element.className = elementClasses.join(" ");
}

function onFileUpload(e) {
  if (e.target.files[0]) {
    const file = e.target.files[0];
    csvFileName.value = file.name;
    e.target.value = null;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
      const jsonObject = Papa.parse(e.target.result, {
        delimiter: ",",
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      });
      setCsvRowData(jsonObject.data);
    };
  } else {
    setCsvRowData([]);
    csvFileName.value = "";
  }
}

async function readStaticCSV() {
  const fileString = `base,animation,animation_duration,animation_pause,type,param_1,param_2,animation_type
We can think of %2% x %8% as %2% group of %8% circles.,bounce,1000,300,text,#FF500D,#3B6404,We can think of 1 x 8 as 1 group of 8 circles.
We can think of %1% x %8% as %1% group of %8% circles.,wobble,2000,2000,text,#FF500D,#3B6404,We can think of 1 x 8 as 1 group of 8 circles.
We can think of %1% x %8% as %1% group of %8% circles.,blink,,,text,#FF500D,#3B6404,We can think of 1 x 8 as 1 group of 8 circles.
We can think of %1% x %8% as %1% group of %8% circles.,jello,500,1000,text,#FF500D,#3B6404,We can think of 1 x 8 as 1 group of 8 circles.
We can think of %2% x %5% as %2% groups of %5% 🔵.,bounce,2000,2000,objectsInAGrid,2,5,
`;
  const jsonObject = Papa.parse(fileString, {
    delimiter: ",",
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true,
  });
  setCsvRowData(jsonObject.data);
}

function setCsvRowData(csvData) {
  csvRowData.value = csvData;
  csvRowDataKeys.value = csvData ? Object.keys(csvData[0]) : [];
}

async function GenerateAnimation(options, useButtonAnimation) {
  if (formData.value.isImportFromCsv) {
    return await makeAnimation(csvRowData.value);
  }
  if (!options) {
    // split up formData.value.input to make the objects below
    const multilines = formData.value.input
      .split("\n\n")
      .filter((line) => line)
      .map((line) => line.replace(/\b\n+|\n+\b/g, ""));

    return await makeAnimation(
      multilines.map((line) => parseOptions(line)),
      useButtonAnimation
    );
  }
  return await makeAnimation(options);
}

async function generateGif() {
  const numberOfAnimations = (formData.value.input.split("%").length - 1) / 2;
  const gifLength =
    (+formData.value.animation_duration > +formData.value.animation_pause
      ? +formData.value.animation_duration
      : +formData.value.animation_pause) *
      numberOfAnimations +
    +formData.value.animation_pause;
  await GenerateAnimation();
  const downloadLink = document.getElementById("generate-btn");
  downloadLink.classList.add("disabled");
  downloadLink.innerText = "Generating GIF...";
  console.log(gifLength, numberOfAnimations);
  await generateDownloadable(gifLength);
  downloadReady.value = true;
  downloadLink.classList.remove("disabled");
  downloadLink.innerText = "Generate GIF";
}
</script>
