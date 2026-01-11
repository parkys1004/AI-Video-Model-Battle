import React, { useState } from 'react';

interface Recommendation {
  title: string;
  desc: string;
  color: string;
}

const RecommendationTool: React.FC = () => {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleRecommend = (type: 'kling' | 'runway' | 'veo') => {
    if (type === 'kling') {
      setRecommendation({
        title: "🏆 Kling O1을 추천합니다!",
        desc: "상대적으로 저렴한 월 $10 수준에서 높은 퀄리티의 안무 영상을 제작할 수 있습니다.",
        color: "text-blue-400"
      });
    } else if (type === 'runway') {
      setRecommendation({
        title: "🏆 Runway Gen-3를 추천합니다!",
        desc: "월 $28 Pro 플랜 이용 시 무제한 생성이 가능하여 대규모 MV 프로젝트에 유리합니다.",
        color: "text-purple-400"
      });
    } else {
      setRecommendation({
        title: "🏆 Google Veo를 추천합니다!",
        desc: "구글의 인프라를 활용해 시네마틱한 결과물을 얻을 수 있으며, 현재 Beta 체험이 가능합니다.",
        color: "text-pink-400"
      });
    }
  };

  return (
    <section className="glass-card rounded-2xl p-8 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <h3 className="text-2xl font-bold mb-4">내 뮤직비디오에 맞는 모델 찾기</h3>
      <p className="text-gray-400 mb-8">가장 중시하는 요소를 선택해 보세요.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => handleRecommend('kling')} 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition font-semibold text-white shadow-lg hover:shadow-blue-500/30"
        >
          가성비와 춤이 중요해
        </button>
        <button 
          onClick={() => handleRecommend('runway')} 
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition font-semibold text-white shadow-lg hover:shadow-purple-500/30"
        >
          전문적인 편집이 필요해
        </button>
        <button 
          onClick={() => handleRecommend('veo')} 
          className="px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-lg transition font-semibold text-white shadow-lg hover:shadow-pink-500/30"
        >
          고퀄리티 시네마틱이 필요해
        </button>
      </div>
      
      {recommendation && (
        <div className="mt-8 p-6 rounded-xl bg-slate-900 border border-slate-700 animate-fade-in">
          <p className={`text-xl font-bold ${recommendation.color}`}>
            {recommendation.title}
          </p>
          <p className="text-gray-400 mt-2">
            {recommendation.desc}
          </p>
        </div>
      )}
    </section>
  );
};

export default RecommendationTool;