import React, { useState } from "react";
import Layout from "../../components/layout";

const addressList = [
  { value: "shinjuku", text: "新宿区" },
  { value: "shibuya", text: "渋谷区" },
  { value: "minato", text: "港区" },
];

const Search = () => {
  const [area, setArea] = useState(null);

  const handleAddrTypeChange = (e) => {
    console.log(e.target.value);
    setArea(e.target.value);
  };

  return (
    <Layout>
      <div className="py-6 sm:py-8 lg:py-12">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 py-8">
          産婦人科を探す
        </h2>

        {!area ? (
          <>
            <div className="aspect-video max-w-[500px] m-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51840.018766061745!2d139.70919719999998!3d35.70158875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2059b7fd4b%3A0xec61c68fe232efd2!2z5p2x5Lqs6YO95paw5a6_5Yy6!5e0!3m2!1sja!2sjp!4v1668924770327!5m2!1sja!2sjp"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </>
        ) : null}

        <div className="p-6">
          <label
            htmlFor="area"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            産婦人科を検索
          </label>
          <select
            id="area"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => handleAddrTypeChange(e)}
          >
            <optgroup label="東京都" required>
              <option value="" hidden>選択してください</option>
              {addressList.map((address, key) => (
                <option key={key} value={address.value}>
                  {address.text}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
