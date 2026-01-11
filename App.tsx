import React from 'react';
import Header from './components/Header';
import ModelCard from './components/ModelCard';
import Workflow from './components/Workflow';
import ComparisonTable from './components/ComparisonTable';
import RecommendationTool from './components/RecommendationTool';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-slate-900 text-slate-50 font-sans">
      {/* Global custom styles that can't be handled by Tailwind utility classes alone */}
      <style>{`
        .glass-card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badge-kling { background: #3b82f6; }
        .badge-runway { background: #8b5cf6; }
        .badge-veo { background: #ec4899; }
        
        .price-tag {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #475569;
        }

        .step-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: bold;
          flex-shrink: 0;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <Header />

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
        <Footer />
      </div>
    </div>
  );
};

export default App;