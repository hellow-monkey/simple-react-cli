import { defaultCompressImageOpts } from "@/store";
import Compressor from "compressorjs";

export const compressImage = (file, opts = {}) => {
  const { quality, maxWidth, convertSize, maxHeight } = Object.assign({}, defaultCompressImageOpts, opts);
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-new
    new Compressor(file, {
      quality,
      maxWidth,
      maxHeight,
      convertSize,
      success(res) {
        res = new File([res], res.name, {
          type: res.type,
          lastModified: Date.now(),
        });
        resolve(res);
      },
      error(e) {
        reject(e);
      },
    });
  });
};
