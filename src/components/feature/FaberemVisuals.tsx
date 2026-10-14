const visualBase = '/assets/faberem-visuals/';

function VisualFigure({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return <figure className={"faberem-explanation-image " + (file.startsWith("analysis") ? "faberem-visual-wide" : file.startsWith("surrogate") ? "faberem-visual-surrogate" : "faberem-visual-applet")}>
    <img src={visualBase + file} alt={alt} loading="lazy" className="block h-auto w-full object-contain" />
    <figcaption className="sr-only">{caption}</figcaption>
  </figure>;
}

export function KnowledgeGapVisual() {
  return <VisualFigure file="analysis-trace-3d.png" alt="금속 부품의 설계 형상, 메시, 해석 결과와 엔지니어 판단이 이어지고 아래에는 관련 파일들이 분산된 3D 그림" caption="설계 모델부터 결과와 판단까지 흩어진 해석 근거를 표현한 재구성 이미지" />;
}

export function AppletWebVisual() {
  return <VisualFigure file="applet-webapp-3d.png" alt="금속 부품, 설계 인자 조정, 유한요소 해석 결과를 연결한 3D 그림" caption="설계 변수 입력 → 형상 확인 → 해석 결과 검토 · Applet Studio의 활용 개념" />;
}

export function ApplicationTypesVisual({ mode }: { mode: 'freeform' | 'template' }) {
  return <figure className={'faberem-application-modes faberem-application-' + mode}>
    <div className="faberem-application-crop"><img src={visualBase + 'application-modes-flow-v2.png'} alt={mode === 'freeform' ? 'ZIP 입력 → 기존 절차 실행 → 결과 → ZIP 출력' : 'Parameter → 2D/3D 생성 → Solver → Result'} loading="lazy" /></div>
  </figure>;
}

export function SurrogateVisual() {
  return <VisualFigure file="surrogate-process-3d.png" alt="기존 해석 Run, 여러 설계 샘플의 반복 실행, 대리모델 학습과 검증된 예측을 순서대로 표현한 3D 그림" caption="기존 Run 재사용 → 반복 실행 → 모델 학습 → 검증·예측 · Surrogate Studio 고도화 개념" />;
}


