import Link from "next/link";
import Layout from "../../components/layout";
import SubButton from "../../components/subBtn";

const Dashboard = () => {
  return (
    <Layout>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 py-8">
              妊婦さんメニュー
            </h2>
          </div>

          <div className="max-w-[500px] m-auto">
            <div class="flex gap-3 justify-between mb-5">
              <Link
                href="/ninpu/search"
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span class="material-symbols-outlined text-white text-4xl pb-4">
                  location_on
                </span>
                <p className="text-white font-bold">産婦人科を探す</p>
              </Link>
              <Link
                href="/ninpu/record"
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span class="material-symbols-outlined text-white text-4xl pb-4">
                  feed
                </span>
                <p className="text-white font-bold">診断カルテ</p>
              </Link>
            </div>
            <SubButton
              text="アンケートに回答"
              href=""
              icon={<span class="material-symbols-outlined">edit_note</span>}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
