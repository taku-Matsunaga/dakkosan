import React, { useRef } from "react";
import Layout from "../../../components/layout";
import OutlinedBtn from "../../../components/outlinedBtn";

const Capture = () => {
  const inputRef = useRef();
  const handleClick = () => inputRef.current.click();

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <button
          className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-40 justify-center shadow-md text-white font-bold"
          onClick={handleClick}
        >
          <span className="material-symbols-outlined text-white text-4xl pb-4">
            photo_camera
          </span>
          カルテを撮影
        </button>
      </div>
      <input
        type="file"
        id="environment"
        capture="environment"
        accept="image/*"
        ref={inputRef}
        className="hidden"
      />
      <div className="my-8 mx-4">
        <OutlinedBtn text="カルテメニュー画面に戻る" href="/ninpu/record" />
      </div>
    </Layout>
  );
};

export default Capture;
