import Image from "next/image";
import React from "react";
import Layout from "../../components/layout";
import OutlinedBtn from "../../components/outlinedBtn";
import bookedImg from "../../public/images/booked.png";

const Booked = () => {
  return (
    <Layout>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto flex items-center justify-center flex-col">
        <div className="text-center mb-16">
          <Image src={bookedImg} alt="予約完了" width={200} height={200} />
          <p className="font-bold">予約が完了しました</p>
        </div>
        <OutlinedBtn text="妊婦さんトップ画面に戻る" href="/ninpu/dashboard" />
      </div>
    </Layout>
  );
};

export default Booked;
