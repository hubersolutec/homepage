
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const AgenticMESPage = lazy(() => import('../pages/solutions/agentic-mes/page'));
const FaberemPage = lazy(() => import('../pages/solutions/faberem/page'));
const ApplicationsPage = lazy(() => import('../pages/applications/page'));
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const AboutHistoryPage = lazy(() => import('../pages/about/history/page'));
const AboutPhilosophyPage = lazy(() => import('../pages/about/philosophy/page'));
const SmartFactoryPage = lazy(() => import('../pages/business/smart-factory/page'));
const SustainabilityPage = lazy(() => import('../pages/business/sustainability/page'));
const SolutionsPage = lazy(() => import('../pages/solutions/page'));
const AutoPlanPage = lazy(() => import('../pages/solutions/auto-plan/page'));
const TheEyePage = lazy(() => import('../pages/solutions/auto-plan/the-eye/page'));
const TheBrainPage = lazy(() => import('../pages/solutions/auto-plan/the-brain/page'));
const FieldAgentPage = lazy(() => import('../pages/solutions/auto-plan/field/page'));
const TheFlowPage = lazy(() => import('../pages/solutions/auto-plan/the-flow/page'));
const IPOPPage = lazy(() => import('../pages/solutions/i-pop/page'));
const AgentPage = lazy(() => import('../pages/solutions/agent/page'));
const XAIPage = lazy(() => import('../pages/solutions/xai/page'));
const SimulationPage = lazy(() => import('../pages/solutions/simulation/page'));
const LitePage = lazy(() => import('../pages/solutions/lite/page'));
const StandardPage = lazy(() => import('../pages/solutions/standard/page'));
const AIPage = lazy(() => import('../pages/solutions/ai/page'));
const ESGRiskPage = lazy(() => import('../pages/solutions/esg-risk/page'));
const SCRMPage = lazy(() => import('../pages/solutions/scrm/page'));
const ESGTrainingPage = lazy(() => import('../pages/solutions/esg-training/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  { path: '/solutions/agentic-mes', element: <AgenticMESPage /> },
  { path: '/solutions/faberem', element: <FaberemPage /> },
  { path: '/applications', element: <ApplicationsPage /> },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/about/history',
    element: <AboutHistoryPage />,
  },
  {
    path: '/about/philosophy',
    element: <AboutPhilosophyPage />,
  },
  {
    path: '/business/smart-factory',
    element: <SmartFactoryPage />,
  },
  {
    path: '/business/sustainability',
    element: <SustainabilityPage />,
  },
  {
    path: '/solutions',
    element: <SolutionsPage />,
  },
  {
    path: '/solutions/auto-plan',
    element: <AutoPlanPage />,
  },
  {
    path: '/solutions/auto-plan/the-eye',
    element: <TheEyePage />,
  },
  {
    path: '/solutions/auto-plan/the-brain',
    element: <TheBrainPage />,
  },
  {
    path: '/solutions/auto-plan/field',
    element: <FieldAgentPage />,
  },
  {
    path: '/solutions/auto-plan/the-flow',
    element: <TheFlowPage />,
  },
  {
    path: '/solutions/i-pop',
    element: <IPOPPage />,
  },
  {
    path: '/solutions/agent',
    element: <AgentPage />,
  },
  {
    path: '/solutions/xai',
    element: <XAIPage />,
  },
  {
    path: '/solutions/simulation',
    element: <SimulationPage />,
  },
  {
    path: '/solutions/lite',
    element: <LitePage />,
  },
  {
    path: '/solutions/standard',
    element: <StandardPage />,
  },
  {
    path: '/solutions/ai',
    element: <AIPage />,
  },
  {
    path: '/solutions/esg-risk',
    element: <ESGRiskPage />,
  },
  {
    path: '/solutions/scrm',
    element: <SCRMPage />,
  },
  {
    path: '/solutions/esg-training',
    element: <ESGTrainingPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
