import IPicWithAspectRatio from "@/types/i-pic-with-aspect-ratio";
import {
  LION_IMG,
  LION_IMG_HEIGHT_PX,
  LION_IMG_WIDTH_PX,
  PARENT_WITH_PX,
  SMALL_LION_IMG,
  SMALL_LION_IMG_HEIGHT_PX,
  SMALL_LION_IMG_WIDTH_PX,
} from "./constants";

export const infoBig: IPicWithAspectRatio = {
  parentWidthPx: PARENT_WITH_PX,
  imgWidthPx: LION_IMG_WIDTH_PX,
  imgHeightPx: LION_IMG_HEIGHT_PX,
  imgSrc: LION_IMG,
};
export const infoSmall: IPicWithAspectRatio = {
  parentWidthPx: PARENT_WITH_PX,
  imgWidthPx: SMALL_LION_IMG_WIDTH_PX,
  imgHeightPx: SMALL_LION_IMG_HEIGHT_PX,
  imgSrc: SMALL_LION_IMG,
};
