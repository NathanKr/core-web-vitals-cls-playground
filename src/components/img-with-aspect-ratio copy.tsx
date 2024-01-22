import IPicWithAspectRatio from "@/types/i-pic-with-aspect-ratio";
import { FC } from "react";

interface IProps {
  info: IPicWithAspectRatio;
}

const ImgWithAspectRatio: FC<IProps> = ({ info }) => {
  const { parentWidthPx, imgWidthPx, imgHeightPx, imgSrc } = info;

  return (
    <div>
      <div
        style={{
          width: `${parentWidthPx}px`,
          position: "relative",
          aspectRatio: `${imgWidthPx} / ${imgHeightPx}`,
        }}
      >
        <img
          style={{ width: "100%" /*, objectFit: "contain"*/ }}
          src={`/${imgSrc}`}
          alt="some title"
        />
      </div>
    </div>
  );
};

export default ImgWithAspectRatio;
