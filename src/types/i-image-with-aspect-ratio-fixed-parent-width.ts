// --- interface for img html element and

import IBaseImageWithAspectRatio from "./i-base-image-with-aspect-ratio";


export default interface IImageWithAspectRatioFixedParentWidth
  extends IBaseImageWithAspectRatio {
  parentWidthPx: number;
  imgWidthPx?: number; // --- use this to limit the image width in case image width < parent width
}