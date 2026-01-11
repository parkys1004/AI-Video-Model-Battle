import React from 'react';
import Layout from './components/Layout';
import ModelCard from './components/ModelCard';
import Workflow from './components/Workflow';
import ComparisonTable from './components/ComparisonTable';
import RecommendationTool from './components/RecommendationTool';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ModelCard 
          model="kling"
          badge="Efficiency"
          title="Kling O1"
          priceLabel="월 구독료"
          price="$10.00 ~"
          demoText="[Kling O1 캐릭터 일관성 데모]"
          features={[
            { text: "매일 무료 크레딧 제공 (체험 유리)", color: "text-blue-400" },
            { text: "Standard 플랜: 660 크레딧/월 제공", color: "text-blue-400" },
            { text: "고화질 모드 선택 시 비용 증가", color: "text-blue-400" }
          ]}
          note="*중국/글로벌 버전 가격 정책 상이"
        />
        
        <ModelCard 
          model="runway"
          badge="Control"
          title="Runway Gen-3"
          priceLabel="월 구독료"
          price="$12.00 ~"
          priceBorderColor="border-purple-500/30"
          priceLabelColor="text-purple-300"
          demoText="[Runway 모션 브러시 제어 데모]"
          features={[
            { text: "Standard 플랜: $12/월 (625 크레딧)", color: "text-purple-400" },
            { text: "Pro 플랜: $28/월 (Unlimited 모드 지원)", color: "text-purple-400" },
            { text: "추가 크레딧 별도 구매 가능", color: "text-purple-400" }
          ]}
          note="*연결제 시 20% 할인 혜택"
        />

        <ModelCard 
          model="veo"
          badge="Atmosphere"
          title="Google Veo"
          priceLabel="이용료"
          price="종량제 / Beta"
          priceBorderColor="border-pink-500/30"
          priceLabelColor="text-pink-300"
          demoText="[Google Veo 시네마틱 조명 데모]"
          features={[
            { text: "Vertex AI 플랫폼 이용료 기반", color: "text-pink-400" },
            { text: "프리 티어 및 체험 크레딧 제공", color: "text-pink-400" },
            { text: "구글 클라우드 크레딧 연동 가능", color: "text-pink-400" }
          ]}
          note="*VideoFX 플랫폼에서 한정적 무료 체험 가능"
        />
      </div>

      <Workflow />
      <ComparisonTable />
      <RecommendationTool />
    </Layout>
  );
};

export default App;