import ETab from "@/types/tab";
import { LION_IMG, LOREM_100_STRING } from "@/utils/constants";
import Alert from "@mui/material/Alert";

const ClsProblem = () => {
  return (
    <>
      <h1>{ETab.proplem}</h1>
      <h2>
        <Alert severity="error">
          <p>
            img without width\height =={">"} check on vercel and see CLS problem
            especially for mobile
          </p>
          <p>
            locally the CLS is zero ! may be because the time to download the
            image is fast because its done locally
          </p>
        </Alert>
      </h2>
      <img src={`/${LION_IMG}`} />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default ClsProblem;
