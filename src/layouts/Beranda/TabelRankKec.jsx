import React from "react";
import { Section, SectionTitle } from "../../components/index";

const TabelRankKec = () => {
  return (
    <Section>
      <SectionTitle className="text-primary text-xl font-medium pb-8">
        Usulan Perankingan Skala Kecamatan
      </SectionTitle>
      <table className="w-full text-sm text-left text-gray-500  border border-gray-100 rounded-xl">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Kecamatan
            </th>
            <th scope="col" className="px-6 py-3">
              Rangking 1
            </th>
            <th scope="col" className="px-6 py-3">
              Rangking 2
            </th>
            <th scope="col" className="px-6 py-3">
              Rangking 3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Balai
            </th>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Beduai (Beduwai)
            </th>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Bonti
            </th>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default TabelRankKec;
