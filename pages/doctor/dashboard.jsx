import Link from "next/link";
import Layout from "../../components/layout";
import SubButton from "../../components/subBtn";

const DoctorDashboard = () => {
  return (
    <Layout>
      <div class="py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 py-8">
              産婦人科会員メニュー
            </h2>
          </div>

          <div className="max-w-[500px] m-auto">
            <div class="flex gap-3 justify-between mb-5">
              <Link
                href="/doctor/filelist"
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span class="material-symbols-outlined text-white text-4xl pb-4">
                  list_alt
                </span>
                <p className="text-white font-bold">カルテ一覧</p>
              </Link>
              <Link
                href="/ninpu/record"
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span class="material-symbols-outlined text-white text-4xl pb-4">
                  settings
                </span>
                <p className="text-white font-bold">病院情報</p>
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

export default DoctorDashboard;
