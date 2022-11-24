import Link from "next/link";
import React from "react";
import Layout from "../../../components/layout";
import OutlinedBtn from "../../../components/outlinedBtn";
import SubButton from "../../../components/subBtn";

const index = () => {
  return (
    <Layout>
      <div class="py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 py-8">
              診断カルテメニュー
            </h2>
          </div>

          <div className="max-w-[500px] m-auto">
            <div class="flex gap-3 justify-between mb-5">
              <Link
                href="/ninpu/record/capture"
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span class="material-symbols-outlined text-white text-4xl pb-4">
                  photo_camera
                </span>
                <p className="text-white font-bold text-center">撮影して<br />アップロード</p>
              </Link>
              <Link
                href=""
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span class="material-symbols-outlined text-white text-4xl pb-4">
                  feed
                </span>
                <p className="text-white font-bold">保存したカルテ</p>
              </Link>
            </div>
            <OutlinedBtn
              text="妊婦さんトップ画面に戻る"
              href="/ninpu/dashboard"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
