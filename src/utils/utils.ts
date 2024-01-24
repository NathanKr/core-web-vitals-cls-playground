import IImageWithAspectRatioFixedParentWidth from "@/types/i-image-with-aspect-ratio-fixed-parent-width";
import {
  BIG_LION_IMG,
  BIG_LION_IMG_HEIGHT_PX,
  BIG_LION_IMG_WIDTH_PX,
  PARENT_WIDTH_PX,
  SMALL_LION_IMG,
  SMALL_LION_IMG_HEIGHT_PX,
  SMALL_LION_IMG_WIDTH_PX,
} from "./constants";
import { CSSProperties } from "react";
import IBaseImageWithAspectRatio from "@/types/i-base-image-with-aspect-ratio";
import IImageWithAspectRatioVariableParentWidth from "@/types/i-image-with-aspect-ratio-variable-parent-width";
import ETab from "@/types/e-tab";
import IPage from "@/types/i-page";
import PageType from "@/types/e-page-type";

const infoBigBase: IBaseImageWithAspectRatio = {
  aspectRatio: BIG_LION_IMG_WIDTH_PX / BIG_LION_IMG_HEIGHT_PX,
  imgSrc: BIG_LION_IMG,
  title: "big picture",
};
export const infoBigFixedParentWidth: IImageWithAspectRatioFixedParentWidth = {
  parentWidthPx: PARENT_WIDTH_PX,
  imgWidthPx: BIG_LION_IMG_WIDTH_PX,
  ...infoBigBase,
};

export const infoBigVariableParentWidth: IImageWithAspectRatioVariableParentWidth =
  {
    ...infoBigBase,
    parentMaxWidthPx: PARENT_WIDTH_PX,
  };

const infoSmallBase: IBaseImageWithAspectRatio = {
  aspectRatio: SMALL_LION_IMG_WIDTH_PX / SMALL_LION_IMG_HEIGHT_PX,
  imgSrc: SMALL_LION_IMG,
  title: "small picture",
};

export const infoSmallVariableParentWidth: IImageWithAspectRatioVariableParentWidth =
  {
    ...infoSmallBase,
    parentMaxWidthPx: PARENT_WIDTH_PX,
  };

export const infoSmallFixedParentWidth: IImageWithAspectRatioFixedParentWidth =
  {
    parentWidthPx: PARENT_WIDTH_PX,
    imgWidthPx: SMALL_LION_IMG_WIDTH_PX,
    ...infoSmallBase,
  };

export function getVariableParentStyle(
  info: IImageWithAspectRatioVariableParentWidth
): CSSProperties {
  const { parentMaxWidthPx, aspectRatio } = info;

  const parentStyle: CSSProperties = {
    maxWidth: `${parentMaxWidthPx}px`,
    position: "relative",
    aspectRatio: `${aspectRatio} / 1`,
  };

  return parentStyle;
}

export function getFixedParentStyle(
  info: IImageWithAspectRatioFixedParentWidth
): CSSProperties {
  const { parentWidthPx, aspectRatio, imgWidthPx } = info;

  const parentStyle: CSSProperties = {
    width: `${parentWidthPx}px`,
    position: "relative",
    aspectRatio: `${aspectRatio} / 1`,
  };

  if (imgWidthPx) {
    parentStyle.maxWidth = `${imgWidthPx}px`;
  }

  return parentStyle;
}

export const pagesInfo: IPage[] = [
  { displayName: ETab.proplem, url: "cls-problem", type: PageType.playground },
  {
    displayName: ETab.simpleSolution,
    url: "simple-no-parent-bound",
    type: PageType.playground,
  },
  {
    displayName: ETab.uiProblemWithBoundParent,
    url: "ui-problem-fixed-parent-width",
    type: PageType.playground,
  },
  {
    displayName: ETab.pseudoAspectRatioNextImageFixedParent,
    url: "next.js-image-pseudo-aspect-ratio-fixed-parent-width",
    type: PageType.playground,
  },
  {
    displayName: ETab.aspectRatioNextImageFixedParent,
    url: "next.js-image-aspect-ratio-fixed-parent-width",
    type: PageType.solution,
  },
  {
    displayName: ETab.aspectRatioNextImageVariableParent,
    url: "next.js-image-aspect-ratio-variable-parent-width",
    type: PageType.solution,
  },
  {
    displayName: ETab.aspectRatioHtmlImgFixedParent,
    url: "img-aspect-ratio-fixed-parent-width",
    type: PageType.solution,
  },
  {
    displayName: ETab.aspectRatioHtmlImgVariableParent,
    url: "img-aspect-ratio-variable-parent-width",
    type: PageType.solution,
  },
];

// export const mapPageNames: Map<ETab, string> = new Map();
// arPages.forEach((it) => {
//   mapPageNames.set(it.displayName, it.page);
// });
