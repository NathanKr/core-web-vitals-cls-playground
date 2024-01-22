import ETab from "@/types/e-tab";
import {
  LION_IMG,
  LION_IMG_HEIGHT_PX,
  LION_IMG_WIDTH_PX,
  LOREM_100_STRING,
} from "@/utils/constants";
import { Alert } from "@mui/material";

const SimpleSolutionNoParentBound = () => {
  return (
    <>
      <h1>{ETab.simpleSolution}</h1>
      <h2>
        <Alert severity="warning">
          img with width\height but no parent bound =={">"} check on vercel and
          see no CLS problem
        </Alert>
      </h2>
      <img
        src={`/${LION_IMG}`}
        width={LION_IMG_WIDTH_PX}
        height={LION_IMG_HEIGHT_PX}
      />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default SimpleSolutionNoParentBound;
