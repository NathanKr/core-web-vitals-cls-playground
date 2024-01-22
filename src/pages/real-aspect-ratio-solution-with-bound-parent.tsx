import ETab from "@/types/tab";
import Image from "next/image";
import {
  LION_IMG,
  LION_IMG_HEIGHT_PX,
  LION_IMG_WIDTH_PX,
  LOREM_100_STRING,
  PARENT_WITH_PX,
} from "@/utils/constants";
import { Alert } from "@mui/material";

const KeepAspectRatioSolutionWithBoundParent = () => {
  const aspectRatio = LION_IMG_WIDTH_PX / LION_IMG_HEIGHT_PX;

  return (
    <>
      <h1>{ETab.keepAspectRatio}</h1>
      <h2>
        <Alert severity="success">
          Use next.js Image with fill , and relative+aspect-ration for parent ==
          {">"} CLS ok 
        </Alert>
      </h2>
      <div
        style={{
          width: `${PARENT_WITH_PX}px`,
          position:'relative',
          aspectRatio : `${LION_IMG_WIDTH_PX} / ${LION_IMG_HEIGHT_PX}`
        }}
      >
        <Image src={`/${LION_IMG}`} alt="some title" fill={true} />
      </div>
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default KeepAspectRatioSolutionWithBoundParent;
