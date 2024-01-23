import IImageWithAspectRatio from "@/types/i-image-with-aspect-ratio";
import {
  LION_IMG,
  LION_IMG_HEIGHT_PX,
  LION_IMG_WIDTH_PX,
  PARENT_WITH_PX,
  SMALL_LION_IMG,
  SMALL_LION_IMG_HEIGHT_PX,
  SMALL_LION_IMG_WIDTH_PX,
} from "./constants";

export const infoBig: IImageWithAspectRatio = {
  parentWidthPx: PARENT_WITH_PX,
  aspectRatio: LION_IMG_WIDTH_PX / LION_IMG_HEIGHT_PX,
  imgSrc: LION_IMG,
  title: "big picture",
  imgWidthPx: LION_IMG_WIDTH_PX,
};
export const infoSmall: IImageWithAspectRatio = {
  parentWidthPx: PARENT_WITH_PX,
  aspectRatio: SMALL_LION_IMG_WIDTH_PX / SMALL_LION_IMG_HEIGHT_PX,
  imgSrc: SMALL_LION_IMG,
  title: "small picture",
  imgWidthPx: SMALL_LION_IMG_WIDTH_PX,
};
