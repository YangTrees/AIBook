import { useState, useLayoutEffect, useCallback } from 'react';
import HomePage from './sections/HomePage';
import CoursePage from './sections/CoursePage';
import BottomNav from './sections/BottomNav';
import './App.css';

export type TabType = 'home' | 'cinema' | 'game' | 'archive' | 'parent';

function useAppScale() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const calculate = useCallback(() => {
    const targetW = 1920;
    const targetH = 1080;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const s = Math.min(vw / targetW, vh / targetH);
    const ox = (vw - targetW * s) / 2;
    const oy = (vh - targetH * s) / 2;
    setScale(Math.round(s * 1000) / 1000);
    setOffset({ x: Math.round(ox * 100) / 100, y: Math.round(oy * 100) / 100 });
  }, []);

  useLayoutEffect(() => {
    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, [calculate]);

  return { scale, offset };
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [currentCourseId, setCurrentCourseId] = useState<number | null>(null);
  const { scale, offset } = useAppScale();

  const handleSelectCourse = (id: number) => {
    setCurrentCourseId(id);
  };

  const handleBackToHome = () => {
    setCurrentCourseId(null);
    setCurrentTab('home');
  };

  const handleTabChange = (tab: TabType) => {
    setCurrentCourseId(null);
    setCurrentTab(tab);
  };

  const renderPlaceholder = (emoji: string, title: string, color: string, desc: string) => (
    <div className="flex flex-col items-center justify-center kid-float-in"
      style={{ width: 1920, height: 1000 }}>
      <div style={{ fontSize: 80, marginBottom: 24 }}>{emoji}</div>
      <h2 style={{
        fontSize: 40, fontWeight: 800, color,
        marginBottom: 12, letterSpacing: '0.02em'
      }}>{title}</h2>
      <p style={{
        fontSize: 22, color: 'var(--kid-gray-400)',
        maxWidth: 560, textAlign: 'center', lineHeight: 1.8
      }}>{desc}</p>
    </div>
  );

  const renderContent = () => {
    if (currentCourseId !== null) {
      return <CoursePage courseId={currentCourseId} onBack={handleBackToHome} />;
    }
    switch (currentTab) {
      case 'home':
        return <HomePage onSelectCourse={handleSelectCourse} />;
      case 'cinema':
        return renderPlaceholder('🎬', '精彩影院', 'var(--kid-purple-400)', '绘本动画故事即将上映，敬请期待！');
      case 'game':
        return renderPlaceholder('🎮', '趣味游戏', 'var(--kid-green-400)', '进入各节课程，在课程页面体验专属互动游戏！');
      case 'archive':
        return renderPlaceholder('📚', '学习档案', 'var(--kid-blue-500)', '学习档案功能即将开放，记录你的每一步成长！');
      case 'parent':
        return renderPlaceholder('👨‍👩‍👧', '家长专区', 'var(--kid-orange-400)', '家长专区即将开放，查看孩子学习进度与成果！');
      default:
        return <HomePage onSelectCourse={handleSelectCourse} />;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ backgroundColor: '#b8d4f0' }}>
      {/* 1920×1080 固定画布 */}
      <div
        className="absolute"
        style={{
          top: offset.y,
          left: offset.x,
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          overflow: 'hidden',
          /* 少儿柔和渐变底色：天蓝→淡紫→奶白 */
          background: 'linear-gradient(160deg, #daeeff 0%, #e8e3ff 30%, #fef9f0 60%, #e8f9f2 100%)',
          boxShadow: '0 0 60px rgba(74, 158, 232, 0.25)',
        }}
      >
        {/* 装饰光晕 · 舒缓、不刺眼 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 10% 30%, rgba(74,158,232,0.08) 0%, transparent 60%), ' +
              'radial-gradient(ellipse at 90% 20%, rgba(160,127,240,0.06) 0%, transparent 55%), ' +
              'radial-gradient(ellipse at 50% 90%, rgba(77,196,148,0.05) 0%, transparent 50%)',
            zIndex: 0,
          }}
        />

        {/* 主内容区 */}
        <div
          className="relative z-10 overflow-y-auto overflow-x-hidden scrollbar-kid"
          style={{ width: 1920, height: 1000 }}
        >
          {renderContent()}
        </div>

        {/* 底部导航 */}
        <div
          className="absolute z-50"
          style={{ bottom: 0, left: 0, width: 1920, height: 80 }}
        >
          <BottomNav currentTab={currentTab} onTabChange={handleTabChange} />
        </div>
      </div>
    </div>
  );
}
