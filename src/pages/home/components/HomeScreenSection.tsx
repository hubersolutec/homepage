import { Link } from 'react-router-dom';
import ScreenExplorer from '../../../components/feature/ScreenExplorer';

const screens = [
  { label:'AutoPlan', title:'생산계획', description:'설비별 작업 순서와 계획 상태를 실제 화면에서 확인합니다.', image:'/assets/approved-screens/autoplan-planning.png', alt:'AutoPlan 생산계획 실제 화면' },
  { label:'AutoPlan', title:'납기 마일스톤', description:'생산과 출하 일정을 날짜별로 살펴봅니다.', image:'/assets/approved-screens/autoplan-milestone.png', alt:'AutoPlan 마일스톤 실제 화면' },
  { label:'FABEREM', title:'프로젝트 드라이브', description:'해석 프로젝트의 파일과 작업 공간을 한곳에서 관리합니다.', image:'/assets/approved-screens/faberem-projects-anonymized.png', alt:'FABEREM 프로젝트 드라이브 공개용 변환 화면' },
  { label:'FABEREM', title:'해석 Schematic', description:'모델과 해석 단계의 연결 관계를 확인합니다.', image:'/assets/approved-screens/faberem-schematic-anonymized.png', alt:'FABEREM Schematic 공개용 변환 화면' }
];

export default function HomeScreenSection(){
 return <section className="bg-slate-50 py-20 md:py-24"><div className="container mx-auto px-4">
  <div className="mb-10 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[.15em] text-blue-700">Product Experience</p><h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">설명을 넘어,<br/>업무 화면으로 확인하세요.</h2></div><div><p className="max-w-2xl leading-8 text-slate-600">실제 제공받은 화면을 선택해 업무의 흐름을 살펴볼 수 있습니다. FABEREM 화면은 식별정보를 익명화한 공개용 변환본입니다.</p><div className="mt-4 flex gap-5 text-sm font-bold text-blue-700"><Link to="/solutions/auto-plan">AutoPlan 자세히 보기 →</Link><Link to="/solutions/faberem">FABEREM 자세히 보기 →</Link></div></div></div>
  <ScreenExplorer product="주요 솔루션" screens={screens} note="화면 속 수치와 데이터는 제품 성과를 나타내지 않습니다."/>
 </div></section>;
}
