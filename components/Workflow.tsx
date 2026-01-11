import React from 'react';

interface Step {
  num: number;
  title: string;
  desc: string;
  border: string;
}

const steps: Step[] = [
  { num: 1, title: '컨셉 기획', desc: '곡의 분위기에 맞춰 스타일(실사/애니)과 스토리보드를 구성합니다.', border: 'border-blue-500' },
  { num: 2, title: '이미지 생성', desc: 'Midjourney 등을 활용해 일관된 인물과 배경의 Key-Visual을 만듭니다.', border: 'border-blue-400' },
  { num: 3, title: '영상 생성', desc: '이미지를 참조(Image-to-Video)하여 AI 모델로 컷들을 생성합니다.', border: 'border-purple-500' },
  { num: 4, title: '업스케일', desc: 'Topaz Video AI 등으로 영상의 해상도와 디테일을 높입니다.', border: 'border-pink-500' },
  { num: 5, title: '편집 & 싱크', desc: '음악 비트에 맞춰 컷을 배치하고 립싱크 작업을 진행합니다.', border: 'border-pink-600' }
];

const Workflow: React.FC = () => {
  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold mb-8 flex items-center">
        <span className="mr-2">🚀</span> AI 뮤직비디오 제작 5단계
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step) => (
          <div key={step.num} className={`glass-card p-5 rounded-xl border-l-4 ${step.border}`}>
            <div className="step-number mb-3 text-white">{step.num}</div>
            <h4 className="font-bold mb-2">{step.title}</h4>
            <p className="text-xs text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;