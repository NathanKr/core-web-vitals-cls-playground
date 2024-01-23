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
