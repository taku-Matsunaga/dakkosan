import Image from "next/image";
import React from "react";
import Button from "../../components/button";
import Layout from "../../components/layout";
import OutlinedBtn from "../../components/outlinedBtn";

const Settings = () => {
  return (
    <Layout>
      <div className="py-6 sm:py-8 lg:py-12">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 py-8">
          登録情報
        </h2>
        <div className="aspect-video max-w-[500px] m-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51840.018766061745!2d139.70919719999998!3d35.70158875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2059b7fd4b%3A0xec61c68fe232efd2!2z5p2x5Lqs6YO95paw5a6_5Yy6!5e0!3m2!1sja!2sjp!4v1668924770327!5m2!1sja!2sjp"
            width="100%"
            height="100%"
          ></iframe>

          <div className="bg-white py-6 sm:py-8 lg:py-12 my-6 mx-2 rounded-lg shadow-sm">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div>
                <Image
                  className="rounded-full h-40 w-40 mx-auto object-cover"
                  src="/images/doctor1.jpg"
                  alt="抱っこさんとは？"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-lg font-bold mt-4">
                新宿レディースクリニック
              </h3>
              <h3 className="text-lg font-bold">院長</h3>
              <h3 className="text-xl font-bold text-main-orange my-2">
                山﨑 武司
              </h3>
              <p className="text-sm leading-7 mb-6">
                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              </p>
            </div>
            <div className="mx-4">
              <Button text="編集する" href="" />
            </div>
          </div>
        </div>
        <div className="mx-4">
          <OutlinedBtn text="産婦人科会員トップ画面に戻る" href="/doctor/dashboard" />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
