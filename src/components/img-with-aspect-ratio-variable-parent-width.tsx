import IImageWithAspectRatioVariableParentWidth from "@/types/i-image-with-aspect-ratio-variable-parent-width";
import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatioVariableParentWidth;
}

const ImgWithAspectRatioVariableParentWidth: FC<IProps> = ({ info }) => {
  const { parentMaxWidthPx, aspectRatio, imgSrc, title } = info;
  return (
    <>
      <div
        style={{
          maxWidth: `${parentMaxWidthPx}px`,
          position: "relative",
          aspectRatio: `${aspectRatio} / 1`,
        }}
      >
        <img style={{ width: "100%" }} src={imgSrc} alt={title} />
      </div>
    </>
  );
};

export default ImgWithAspectRatioVariableParentWidth;
