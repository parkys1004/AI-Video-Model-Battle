import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="mb-16 overflow-x-auto">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-2">📊</span> 기술 및 가격 상세 비교
      </h3>
      <table className="w-full text-left border-collapse glass-card rounded-xl overflow-hidden text-sm md:text-base">
        <thead>
          <tr className="bg-slate-800/50 border-b border-slate-700">
            <th className="p-4 font-bold">특징</th>
            <th className="p-4 font-bold">Kling O1</th>
            <th className="p-4 font-bold">Runway Gen-3</th>
            <th className="p-4 font-bold">Google Veo 3.1</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/50">
          <tr>
            <td className="p-4 text-gray-300 bg-slate-800/20 font-semibold">MV 워크플로우 위치</td>
            <td className="p-4 text-blue-300 italic">댄스/퍼포먼스 컷</td>
            <td className="p-4 text-purple-300 italic">특수효과/VFX 컷</td>
            <td className="p-4 text-pink-300 italic">감성/클로즈업/립싱크</td>
          </tr>
          <tr>
            <td className="p-4 text-gray-300 bg-slate-800/20">기본 구독료 (월)</td>
            <td className="p-4">$10 (약 1.3만원)</td>
            <td className="p-4">$12 (약 1.6만원)</td>
            <td className="p-4">종량제/체험형</td>
          </tr>
          <tr>
            <td className="p-4 text-gray-300 bg-slate-800/20">무료 체험</td>
            <td className="p-4 text-green-400">매일 크레딧 지급</td>
            <td className="p-4 text-yellow-400">가입 시 1회 지급</td>
            <td className="p-4 text-green-400">VideoFX 무료 체험</td>
          </tr>
          <tr>
            <td className="p-4 text-gray-300 bg-slate-800/20">무제한 모드</td>
            <td className="p-4 text-red-400">지원 안함</td>
            <td className="p-4 text-green-400">지원 (Pro 이상)</td>
            <td className="p-4">해당 없음</td>
          </tr>
          <tr>
            <td className="p-4 text-gray-300 bg-slate-800/20">최대 생성 길이</td>
            <td className="p-4">10초 (연장 가능)</td>
            <td className="p-4">10초+</td>
            <td className="p-4">1분 이상 가능</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonTable;