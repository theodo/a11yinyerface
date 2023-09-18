let distractionIntervale: NodeJS.Timer;

export const activeDistractions = (texts: string[]) => {
  scriptImportedFromExternalRepository(texts);
};

const timeouts: NodeJS.Timeout[] = [];
// used to save and clear timeouts
export const TIMEOUTS = {
  timeouts,
  setTimeout: function (fn: () => void, delay: number) {
    const id = setTimeout(fn, delay);
    this.timeouts.push(id);
  },
  clearAllTimeouts: function () {
    while (this.timeouts.length) {
      clearTimeout(this.timeouts.pop()!);
    }
  },
};

// ==UserScript==
// @name         Distractions
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
// @license      ISC
// @author       Metamatrix AB [https://github.com/Metamatrix/web-disability-simulator] and Crown Copyright (Government Digital Service)
// @description  Clutter the screen with various distractions to simulate finding it hard to concentrate; has to be used together with distractions.user.css to work
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        none
// @nocompat     Chrome
// ==/UserScript==

//dom elements to apply animations on
const h2 = "h2";
const p = "p";
const img = "img";
const button = "button";

//dom elements to be created
const textEl_0 = ".wds-text-element-0";
const textEl_1 = ".wds-text-element-1";
const textEl_2 = ".wds-text-element-2";
const textEl_3 = ".wds-text-element-3";
const textEl_4 = ".wds-text-element-4";

//classes for css animations
const paragraphAnimation = "wds-paragraph-animation";
const buttonAnimation = "wds-button-animation";
const headingAnimation = "wds-heading-animation";
const imgAnimation_1 = "wds-img-animation-1";
const textAnimation_0 = "wds-text-animation-0";
const textAnimation_1 = "wds-text-animation-1";
const textAnimation_2 = "wds-text-animation-2";
const textAnimation_3 = "wds-text-animation-3";
const textAnimation_4 = "wds-text-animation-4";

function addClass(element: string, classname: string) {
  const el = document.querySelectorAll(element);

  for (let i = 0; i < el.length; i++) {
    el[i].classList.add(classname);
  }
}

function removeClass(element: string, classname: string) {
  const el = document.querySelectorAll(element);

  for (let i = 0; i < el.length; i++) {
    el[i].classList.remove(classname);
  }
}

const scriptImportedFromExternalRepository = (texts: string[]) => {
  function createElement(
    element: string,
    classname: string,
    textNode?: string
  ) {
    const el = document.createElement(element);
    el.setAttribute("class", classname);
    document.body.appendChild(el);
    if (textNode) {
      el.appendChild(document.createTextNode(textNode));
    }
  }

  createElement("div", "wds-img-element");

  function createTextElements(text: string, index: number) {
    createElement("span", `wds-text-element-${index}`, text);
  }

  texts.forEach(createTextElements);

  //add and remove animation classes, then loop
  function launchAnimations() {
    TIMEOUTS.setTimeout(() => {
      addClass(p, paragraphAnimation);
      addClass(textEl_0, textAnimation_0);
      addClass(img, imgAnimation_1);
    }, 100);

    TIMEOUTS.setTimeout(() => {
      addClass(h2, headingAnimation);
      addClass(button, buttonAnimation);
    }, 400);

    TIMEOUTS.setTimeout(() => {
      removeClass(textEl_0, textAnimation_0);
      addClass(textEl_1, textAnimation_1);
    }, 5000);

    TIMEOUTS.setTimeout(() => {
      removeClass(textEl_1, textAnimation_1);
      addClass(textEl_2, textAnimation_2);
    }, 13000);

    TIMEOUTS.setTimeout(() => {
      removeClass(textEl_2, textAnimation_2);
      addClass(textEl_3, textAnimation_3);
    }, 19000);

    TIMEOUTS.setTimeout(() => {
      removeClass(textEl_3, textAnimation_3);
      addClass(textEl_4, textAnimation_4);
    }, 25000);

    TIMEOUTS.setTimeout(() => {
      removeClass(textEl_4, textAnimation_4);
      TIMEOUTS.clearAllTimeouts();
    }, 29000);
  }

  launchAnimations();
  distractionIntervale = setInterval(launchAnimations, 29000);
};

export const removeDistractions = () => {
  clearInterval(distractionIntervale);
  TIMEOUTS.clearAllTimeouts();
  removeClass(p, paragraphAnimation);
  removeClass(img, imgAnimation_1);
  removeClass(h2, headingAnimation);
  removeClass(button, buttonAnimation);
  removeClass(textEl_0, textAnimation_0);
  removeClass(textEl_1, textAnimation_1);
  removeClass(textEl_2, textAnimation_2);
  removeClass(textEl_3, textAnimation_3);
  removeClass(textEl_4, textAnimation_4);
};
