import React, { useCallback, useRef } from "react";
import Layout from "../../../components/layout";
import OutlinedBtn from "../../../components/outlinedBtn";

const Store = () => {
  const ref = useRef();
  /**
   * ダイアローグを開く処理
   */
  const handleOpenDialog = useCallback(() => {
    if (ref.current) ref.current.showModal();
  }, [ref]);
  /**
   * ダイアローグを閉じる処理
   */
  const handleCloseDialog = useCallback(() => {
    if (ref.current) ref.current.close();
  }, [ref]);
  /**
   * ダイアローグ内のクリックイベントハンドラーに渡す処理
   */
  const handleClickInDialog = useCallback((e) => {
    e.stopPropagation();
  }, []);
  return (
    <Layout>
      <h2 className="text-center mt-4 font-bold">保存したカルテ</h2>
      <div
        role="button"
        onClick={handleOpenDialog}
        onKeyDown={handleOpenDialog}
        className="flex"
        tabIndex={0}
      >
        <img
          src="/images/file.jpg"
          alt=""
          className="m-auto"
          width="300"
          height="200"
        />
      </div>

      <div className="my-8 mx-4">
        <OutlinedBtn text="カルテメニュー画面に戻る" href="/ninpu/record" />
      </div>

      <dialog ref={ref} className="image-dialog" onClick={handleCloseDialog}>
        <div onClick={handleClickInDialog} className="contents">
          <img src="/images/file.jpg" alt="" width="100%" />
        </div>
      </dialog>
    </Layout>
  );
};

export default Store;
