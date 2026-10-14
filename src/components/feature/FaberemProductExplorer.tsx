import { useRef, useState } from 'react';
import type { ExplorerScreen } from './ScreenExplorer';

const explanations = [
  { tab:'업무 공간', tag:'WORKSPACE', title:'해석 자산을 찾는 시작, 프로젝트 드라이브', points:['개인·팀·프로젝트 자료를 목적에 맞게 구분','프로젝트별 모델과 과거 해석 결과 탐색','찾은 자료를 관련 해석 업무로 연결'] },
  { tab:'Workbench', tag:'SCHEMATIC', title:'모델부터 결과까지, 해석 구성을 한눈에', points:['Geometry·Model·Setup·Result 관계 확인','해석 단계별 연결과 데이터 흐름 파악','결과가 만들어진 모델과 설정 추적'] },
  { tab:'입력 조건', tag:'PARAMETER SETS', title:'설계점별 입력값을 확인하고 비교', points:['Design Point별 입력 파라미터 확인','조건 변경에 따른 설계안 비교','입력 조건과 해석 결과의 관계 검토'] },
  { tab:'실행·JOB', tag:'SIMULATION OPERATION', title:'요청부터 완료까지, 실행 상태 확인', points:['JOB의 요청·시작·완료 시각 조회','작업 진행 상태와 실행 이력 확인','완료된 실행의 결과로 이동'] },
  { tab:'결과 조회', tag:'3D RESULT VIEWER', title:'브라우저에서 3D 해석 결과 검토', points:['3D 형상과 Contour를 함께 확인','입력 조건과 결과를 연결해 검토','화면을 확대해 결과의 세부 형상 확인'] },
  { tab:'협업·승인', tag:'APPROVAL', title:'검토와 결재 상태를 같은 공간에서', points:['전자결재함에서 검토 대상 확인','결재 처리 상태를 확인','해석 자료와 협업 업무를 연결'] },
];

export default function FaberemProductExplorer({ screens }: { screens: ExplorerScreen[] }) {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const screen = screens[active];
  const detail = explanations[active];
  if (!screen || !detail) return null;
  return <>
    <div ref={tabs} className="faberem-product-tabs" role="tablist" aria-label="FABEREM 실제 기능" onKeyDown={event => {
      let next = active;
      if (event.key === 'ArrowRight') next = (active + 1) % screens.length;
      else if (event.key === 'ArrowLeft') next = (active - 1 + screens.length) % screens.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = screens.length - 1;
      else return;
      event.preventDefault(); setActive(next);
      tabs.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
    }}>
      {screens.map((item,i)=><button key={item.title} id={'faberem-function-tab-'+i} role="tab" aria-selected={active===i} aria-controls="faberem-function-panel" tabIndex={active===i?0:-1} type="button" onClick={()=>setActive(i)}>{explanations[i]?.tab ?? item.title}</button>)}
    </div>
    <div id="faberem-function-panel" role="tabpanel" aria-labelledby={'faberem-function-tab-'+active} className="faberem-product-panel">
      <div className="faberem-product-copy"><span className="faberem-product-tag">{detail.tag}</span><h3>{detail.title}</h3><p>{screen.description}</p><ul>{detail.points.map(point=><li key={point}>{point}</li>)}</ul></div>
      <figure className="faberem-product-screen"><button type="button" onClick={()=>dialog.current?.showModal()} aria-label={screen.title+' 실제 화면 확대'}><img key={screen.image} src={screen.image} alt={screen.alt} className="solution-screen-enter" loading="lazy"/></button><figcaption>공개용 실제 화면 · 클릭하면 확대합니다.</figcaption></figure>
    </div>
    <dialog ref={dialog} className="screen-explorer-dialog" onClick={event=>{if(event.target===dialog.current)dialog.current?.close();}}><div className="screen-explorer-dialog-inner"><div><strong>FABEREM · {screen.title}</strong><button type="button" onClick={()=>dialog.current?.close()} aria-label="확대 화면 닫기">닫기 ×</button></div><img src={screen.image} alt={screen.alt}/></div></dialog>
  </>;
}

