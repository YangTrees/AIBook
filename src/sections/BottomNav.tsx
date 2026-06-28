import type { TabType } from '../App';
import { Home, Clapperboard, Gamepad2, BookOpen, Users } from 'lucide-react';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface TabItem {
  key: TabType;
  label: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  activeColor: string;
  activeBg: string;
  activeGradient: string;
}

const TABS: TabItem[] = [
  {
    key: 'home',
    label: '首页',
    Icon: Home,
    activeColor: '#2185d0',
    activeBg: 'var(--kid-blue-50)',
    activeGradient: 'linear-gradient(135deg, #eef7ff, #d6ecff)',
  },
  {
    key: 'cinema',
    label: '影院',
    Icon: Clapperboard,
    activeColor: '#7c5de0',
    activeBg: 'var(--kid-purple-50)',
    activeGradient: 'linear-gradient(135deg, #f5f0ff, #e4d9fe)',
  },
  {
    key: 'game',
    label: '游戏',
    Icon: Gamepad2,
    activeColor: '#27a872',
    activeBg: 'var(--kid-green-50)',
    activeGradient: 'linear-gradient(135deg, #edfaf4, #c7f0de)',
  },
  {
    key: 'archive',
    label: '档案',
    Icon: BookOpen,
    activeColor: '#2185d0',
    activeBg: 'var(--kid-blue-50)',
    activeGradient: 'linear-gradient(135deg, #eef7ff, #d6ecff)',
  },
  {
    key: 'parent',
    label: '家长',
    Icon: Users,
    activeColor: '#e07010',
    activeBg: 'var(--kid-orange-50)',
    activeGradient: 'linear-gradient(135deg, #fff6ed, #fde8cc)',
  },
];

export default function BottomNav({ currentTab, onTabChange }: BottomNavProps) {
  return (
    <nav
      className="flex items-stretch"
      style={{
        height: 80,
        background: 'rgba(255, 255, 255, 0.96)',
        borderTop: '1.5px solid rgba(74, 158, 232, 0.14)',
        boxShadow: '0 -4px 24px rgba(33, 133, 208, 0.08)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {TABS.map((tab) => {
        const isActive = currentTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className="kid-nav-btn"
            style={{
              background: isActive ? tab.activeGradient : 'transparent',
              position: 'relative',
            }}
          >
            {/* 顶部激活指示条 */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 32,
                  height: 4,
                  borderRadius: '0 0 4px 4px',
                  background: tab.activeColor,
                }}
              />
            )}

            {/* 图标 */}
            <span
              style={{
                display: 'flex',
                color: isActive ? tab.activeColor : 'var(--kid-gray-400)',
                transition: 'all 0.18s cubic-bezier(0.34,1.56,0.64,1)',
                filter: isActive ? `drop-shadow(0 2px 6px ${tab.activeColor}44)` : 'none',
              }}
            >
              <tab.Icon
                size={isActive ? 30 : 26}
                strokeWidth={2}
              />
            </span>

            {/* 文字标签 */}
            <span
              style={{
                color: isActive ? tab.activeColor : 'var(--kid-gray-400)',
                fontSize: isActive ? 14 : 12,
                fontWeight: isActive ? 800 : 600,
                letterSpacing: '0.03em',
                transition: 'all 0.18s ease',
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
