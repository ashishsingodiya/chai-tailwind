import chaiClasses from "./chaiData.js";

function applyChaiClassesToDoc(doc) {
  const chaiElements = doc.body.querySelectorAll("[class*='chai-']");

  chaiElements.forEach((el) => {
    const chaiClassNames = el.classList.value
      .trim()
      .split(" ")
      .filter((c) => c.startsWith("chai-"));

    chaiClassNames.forEach((c) => {
      const styleType = chaiClasses[c]?.type;
      const styleValue = chaiClasses[c]?.value;
      if (styleType && styleValue) {
        el.style[styleType] = styleValue;
      }
    });
  });
}
applyChaiClassesToDoc(document);

function setupPlayground() {
  const input = document.getElementById("chai-playground-input");
  const preview = document.getElementById("chai-playground-preview");
  // console.log(preview.contentDocument.body);

  const renderPreview = () => {
    const previewDoc = preview.contentDocument || preview.contentWindow?.document;

    const code = input.value;
    const html = `<!DOCTYPE html> <html> <head></head><body>${code}</body> </html>`;
    previewDoc.open();
    previewDoc.write(html);
    previewDoc.close();
    applyChaiClassesToDoc(previewDoc);
  };

  input.addEventListener("input", renderPreview);
  renderPreview();
}

setupPlayground();
