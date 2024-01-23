import IImageWithAspectRatio from "@/types/i-image-with-aspect-ratio";
import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatio;
}

const ImgWithAspectRatio: FC<IProps> = ({ info }) => {
  const { parentWidthPx, aspectRatio, imgSrc, title, imgWidthPx } = info;

  return (
    <div>
      <div
        style={{
          maxWidth: `${imgWidthPx}px`,
          width: `${parentWidthPx}px`,
          position: "relative",
          aspectRatio: `${aspectRatio} / 1`,
        }}
      >
        <img style={{ width: "100%" }} src={`/${imgSrc}`} alt={title} />
      </div>
    </div>
  );
};

export default ImgWithAspectRatio;
