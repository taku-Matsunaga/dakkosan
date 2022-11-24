import React from "react";
import Layout from "../../../components/layout";

const Capture = () => {
  return (
    <Layout>
      <div>Capture</div>
      <input type="file" id="user" capture="user" accept="image/*" />
      <input
        type="file"
        id="environment"
        capture="environment"
        accept="video/*"
      />
    </Layout>
  );
};

export default Capture;
