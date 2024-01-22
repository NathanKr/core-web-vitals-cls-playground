import ETab from "@/types/tab";
import {
  LION_IMG,
  LION_IMG_HEIGHT_PX,
  LION_IMG_WIDTH_PX,
  LOREM_100_STRING,
  PARENT_WITH_PX,
} from "@/utils/constants";
import { Alert } from "@mui/material";

const KeepAspectRatioSolutionWithBoundParent = () => {
  return (
    <>
      <h1>{ETab.keepRealAspectRatioHtmlImg}</h1>
      <h2>
        <Alert severity="success">
          Use html img with width : 100% , and relative+aspect-ratio for parent ==
          {">"} CLS ok
        </Alert>
      </h2>
      <div
        style={{
          width: `${PARENT_WITH_PX}px`,
          position: "relative",
          aspectRatio: `${LION_IMG_WIDTH_PX} / ${LION_IMG_HEIGHT_PX}`,
        }}
      >
        <img style={{ width: "100%" }} src={`/${LION_IMG}`} alt="some title" />
      </div>
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default KeepAspectRatioSolutionWithBoundParent;
