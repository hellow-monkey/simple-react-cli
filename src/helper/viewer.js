import Viewer from "viewerjs";
let div, viewer;

export const imagePreview = (params = {}) => {
  if (typeof params === "string") {
    params = { images: [params] };
  }
  let { images } = params;
  const { index = 0, defaultOpt = {} } = params;
  if (typeof images === "string") {
    images = [images];
  }
  if (!Array.isArray(images)) {
    return;
  }
  images = images.map(item => item.url || item).map(item => String(item).replace("_thumb", ""));
  if (!div) {
    div = document.createElement("div");
  }
  const imgStr = images.map(src => `<img src="${src}" />`);
  div.innerHTML = imgStr;
  if (viewer) {
    viewer.destroy();
  }
  const opts = {
    ...defaultOpt,
    initialViewIndex: index,
  };
  viewer = new Viewer(div, opts);
  viewer.show();
};
