import Link from "next/link";
import Layout from "../../components/layout";
import SubButton from "../../components/subBtn";

const DoctorDashboard = () => {
  return (
    <Layout>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 py-8">
              産婦人科会員メニュー
            </h2>
          </div>

          <div className="max-w-[500px] m-auto">
            <div className="flex gap-3 justify-between mb-5">
              <Link
                href="/doctor/filelist"
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span className="material-symbols-outlined text-white text-4xl pb-4">
                  list_alt
                </span>
                <p className="text-white font-bold">カルテ一覧</p>
              </Link>
              <Link
                href="/doctor/settings"
                className="bg-main-orange rounded-lg flex flex-col items-center p-4 aspect-square w-52 justify-center shadow-md"
              >
                <span className="material-symbols-outlined text-white text-4xl pb-4">
                  settings
                </span>
                <p className="text-white font-bold">病院情報</p>
              </Link>
            </div>
            <SubButton
              text="アンケートに回答"
              isTarget="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdpCueldaiK2WcFvdePnsnfTo-xrTibhqCsAc7nnqfrSfYN_Q/viewform"
              icon={<span className="material-symbols-outlined">edit_note</span>}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDashboard;
