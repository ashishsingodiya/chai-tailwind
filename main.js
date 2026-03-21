import chaiClasses from "./chaiData.js";

const chaiElements = document.body.querySelectorAll("[class*='chai-']");

chaiElements.forEach((e) => {
  const chaiClassNames = e.classList.value
    .trim()
    .split(" ")
    .filter((c) => c.startsWith("chai-"));
  chaiClassNames.forEach((c) => {
    const styleType = chaiClasses[c]?.type;
    const styleValue = chaiClasses[c]?.value;
    if (styleType && styleValue) {
      e.style[styleType] = styleValue;
    }
  }); 
});