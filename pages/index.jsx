import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";
import Layout from "../components/layout";
import OutlinedBtn from "../components/outlinedBtn";
import styles from "../styles/Home.module.css";
import top1 from "../public/images/top1.png";
import top2 from "../public/images/top2.png";
import top3 from "../public/images/top3.png";

export default function Home() {
  return (
    <>
      <Layout>
        <section>
          <div className="mx-auto text-center my-32">
            <h2 className="text-2xl font-bold inline-block text-left">
              将来のお母さんと
              <br />
              お医者さんをつなぐ
            </h2>
          </div>
          <div className="w-4/5 mx-auto flex flex-col gap-4 mb-20">
            <Button text="妊婦さん会員でログイン" href="/ninpu/login" />
            <OutlinedBtn text="産婦人科会員でログイン" />
          </div>
        </section>
        <section>
          <div>
            <Image
              src={top1}
              alt="抱っこさんとは？"
              width={200}
              height={200}
              className="m-auto"
            />
            <h3 className="text-lg font-bold text-center m-14">抱っこさんとは？</h3>
          </div>

          <div className="flex flex-col gap-2 mb-24">
            <div class="block p-6 bg-white rounded-lg shadow-sm m-auto w-11/12 mb-8">
              <Image
                src={top2}
                alt="医者"
                width={200}
                height={200}
                className="m-auto"
              />
              <h4 class="mb-2 text-md font-bold tracking-tight text-center">
                過去の診察と現在の状況を先生と共有
              </h4>
              <p class="text-gray-500 font-light">
                <span className="block">
                  「急にかかりつけのお医者さんではない産婦人科へ行かなければ行かなくなった！」
                </span>
                <span className="block">
                  「今までの診察の状況とか0から説明しないと...」
                </span>
                <span className="block mb-4">
                  「新しく行くところでちゃんと対処してくれるのか不安...」
                </span>
                抱っこさんを通じて診察結果やカルテを写真で撮影しオンライン(クラウド)にアップロードしていただくことで、突然かかりつけの病院以外に行く必要が出た際に~~
              </p>
            </div>

            <div class="block p-6 bg-white rounded-lg shadow-sm m-auto w-11/12">
              <Image
                src={top3}
                alt="医者"
                width={200}
                height={200}
                className="m-auto"
              />
              <h4 class="mb-2 text-md font-bold tracking-tight text-center">
                マップ上から対応可能な産婦人科を簡単予約
              </h4>
              <p class="text-gray-500 font-light">
                普段行かない産婦人科を新しく探す際に、情報が何もないところから産婦人科を探すのではなく、どんな先生がいてどういった分野や対応ができるかを簡単に確認することができます。大丈夫そうな先生が見つかったらそのまま予約も同一ページ上からスムーズに行えます。
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
