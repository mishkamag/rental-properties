"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Loadingpage = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
    />
  );
};

export default Loadingpage;
