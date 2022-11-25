import Button from "../../components/button";
import Layout from "../../components/layout";

const DoctorLogin = () => {
  return (
    <Layout>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 py-8">
            産婦人科会員でログイン
          </h2>

          <form class="max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  for="email"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  メールアドレス
                </label>
                <input
                  name="email"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  パスワード
                </label>
                <input
                  name="password"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <Button text="ログイン" href="/doctor/dashboard" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorLogin;
