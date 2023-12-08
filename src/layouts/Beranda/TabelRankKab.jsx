import React from "react";
import { Section, SectionTitle } from "../../components/index";

const TabelRankKab = () => {
  return (
    <Section>
      <SectionTitle className="text-primary text-xl font-medium pb-8">
        Usulan Perankingan Skala Kabupaten
      </SectionTitle>

      <table className="w-full text-sm text-left text-gray-500  border border-gray-100 rounded-xl">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ranking
            </th>
            <th scope="col" className="px-6 py-3">
              Kecamatan
            </th>
            <th scope="col" className="px-6 py-3">
              Desa
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">Janjang</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              2
            </th>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">Layak Omang</td>
          </tr>
          <tr className="bg-white ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              3
            </th>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">Balai Ingin</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default TabelRankKab;
