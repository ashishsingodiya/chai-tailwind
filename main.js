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
  const preview = document.getElementById("chai-playground-preview");
  const defaultHtml = `<div class="chai-p-16 chai-border-2 chai-border-orange chai-rounded-md chai-m-10 chai-flex chai-flex-col chai-items-center">
  <h3 class="chai-text-orange chai-m-0">Hello from Playground</h3>
  <p class="chai-text-gray chai-mt-10">Edit this HTML on the left side.</p>
  <button class="chai-bg-orange chai-text-white chai-px-12 chai-py-8 chai-rounded-full chai-mt-10">Try Now</button>
</div>`;

  const renderPreview = (code) => {
    const previewDoc = preview.contentDocument || preview.contentWindow?.document;
    const html = `<!DOCTYPE html> <html> <head></head><body>${code}</body> </html>`;
    previewDoc.open();
    previewDoc.write(html);
    previewDoc.close();
    applyChaiClassesToDoc(previewDoc);
  };

  require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs" } });

  require(["vs/editor/editor.main"], function () {
    const editor = monaco.editor.create(document.getElementById("editor-container"), {
      value: defaultHtml,
      language: "html",
      theme: "vs-dark",
      wordWrap: "on",
      minimap: { enabled: false },
      automaticLayout: true,
    });

    renderPreview(editor.getValue());

    editor.onDidChangeModelContent(() => {
      renderPreview(editor.getValue());
    });
  });
}

setupPlayground();
