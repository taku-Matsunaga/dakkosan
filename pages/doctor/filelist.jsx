import React, { useCallback, useRef } from "react";
import Layout from "../../components/layout";

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
      <p className="text-center font-bold my-4">カルテ一覧</p>
      {(() => {
        const items = [];
        for (let i = 0; i < 5; i++) {
          items.push(
            <>
              <div>
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
              </div>
            </>
          );
        }
        return <ul>{items}</ul>;
      })()}
      <dialog ref={ref} className="image-dialog" onClick={handleCloseDialog}>
        <div onClick={handleClickInDialog} className="contents">
          <img src="/images/file.jpg" alt="" width="100%" />
        </div>
      </dialog>

      <div className="w-full fixed bottom-14 text-center">
        <a
          href="/doctor/dashboard"
          className="focus:outline-none text-main-orange font-bold bg-white rounded-lg text-sm px-5 py-2.5 inline-block text-center border-2 border-main-orange shadow-sm w-5/6"
        >
          産婦人科会員トップ画面に戻る
        </a>
      </div>
    </Layout>
  );
};

export default Store;
