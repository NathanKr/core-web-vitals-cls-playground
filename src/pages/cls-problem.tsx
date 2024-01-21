import { LION_IMG, LOREM_100_STRING } from "@/utils/constants";
import Alert from "@mui/material/Alert";

const ClsProblem = () => {
  return (
    <>
      <h2>
        <Alert severity='error'>
          img without width\height =={">"} check on vercel and see CLS problem
          especially for mobile(why not locally ?)
        </Alert>
      </h2>
      <img src={`/${LION_IMG}`} />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default ClsProblem;
