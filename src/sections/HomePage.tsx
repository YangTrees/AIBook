import COURSE_DATA from '../data/courseData.ts';
import { BookOpen, Target, Brain, Layers, Gamepad2, Award } from 'lucide-react';

interface HomePageProps {
  onSelectCourse: (id: number) => void;
}

/* 模块颜色映射 */
const MODULE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  'A': { bg: '#eef7ff', text: '#2185d0', dot: '#3a9ee8' },
  'B': { bg: '#f5f0ff', text: '#6244c8', dot: '#7c5de0' },
  'C': { bg: '#fff6ed', text: '#d05c10', dot: '#f5a84d' },
  'D': { bg: '#edfaf4', text: '#1a8c5c', dot: '#4dc494' },
};

function getModuleColor(module: string) {
  const letter = module.match(/模块([A-Z])/)?.[1] || 'A';
  return MODULE_COLORS[letter] || MODULE_COLORS['A'];
}

function getModuleShort(module: string) {
  return module.replace(/模块[A-Z]｜/, '').replace(/模块[A-Z]\|/, '');
}

export default function HomePage({ onSelectCourse }: HomePageProps) {
  return (
    <div style={{ width: 1920, paddingBottom: 48 }}>
      {/* ===== Hero Banner ===== */}
      <div
        className="kid-float-in"
        style={{
          margin: '36px 48px 0',
          borderRadius: 32,
          overflow: 'hidden',
          /* 标题栏背景图 + 渐变叠加，确保文字可读 */
          background: 'linear-gradient(135deg, rgba(74,158,232,0.55) 0%, rgba(124,142,232,0.45) 40%, rgba(176,106,216,0.4) 100%), url(assets/backgrounds/backgrounds/title_bg.jpg) center center / cover no-repeat',
          boxShadow: '0 16px 48px rgba(74, 158, 232, 0.22)',
          padding: '44px 64px',
          position: 'relative',
          minHeight: 240,
        }}
      >
        {/* 背景装饰圆 */}
        <div style={{
          position: 'absolute', right: -60, top: -60,
          width: 360, height: 360,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 80, bottom: -80,
          width: 240, height: 240,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', left: '45%', top: 0, bottom: 0,
          width: '2px',
          background: 'rgba(255,255,255,0.08)',
          pointerEvents: 'none',
        }} />

        <div className="relative" style={{ maxWidth: 860, zIndex: 2 }}>
          {/* 标签行 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <span style={{
              background: 'rgba(255,255,255,0.22)',
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              padding: '5px 18px',
              borderRadius: 999,
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              letterSpacing: '0.05em',
            }}>
              32节完整课程 · 全系统学习
            </span>
          </div>

          {/* 主标题 */}
          <h1 style={{
            fontSize: 52,
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: 16,
            textShadow: '0 2px 12px rgba(0,0,0,0.12)',
            letterSpacing: '-0.01em',
          }}>
            AI人工智能<br />启蒙绘本课程
          </h1>

          {/* 副标题 */}
          <p style={{
            color: 'rgba(255,255,255,0.88)',
            fontSize: 20,
            lineHeight: 1.7,
            marginBottom: 28,
          }}>
            和团团、点点一起探索人工智能的神奇世界，<br />
            从信息到深度学习，系统掌握AI核心知识！
          </p>

          {/* 数据徽章 */}
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { n: '32', label: '节课程', Icon: BookOpen },
              { n: '7',  label: '大模块', Icon: Target },
              { n: '320', label: '道题目', Icon: Brain },
            ].map((stat) => (
              <div
                key={stat.n}
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  borderRadius: 20,
                  padding: '14px 28px',
                  textAlign: 'center',
                  minWidth: 100,
                }}
              >
                <stat.Icon size={22} strokeWidth={2} style={{ color: '#fff', margin: '0 auto 2px' }} />
                <div style={{ color: '#fff', fontWeight: 900, fontSize: 30, lineHeight: 1 }}>{stat.n}</div>
                <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 特色三栏 ===== */}
      <div
        className="kid-float-in delay-100"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          margin: '28px 48px',
        }}
      >
        {[
          { Icon: Layers, title: '7大学习模块', desc: '科普视频·知识讲解·绘本动画·知识问答·互动游戏·动手实践·课程总结', color: 'var(--kid-blue-400)' },
          { Icon: Gamepad2, title: '互动游戏体验', desc: '每节课专属游戏，团团&点点陪玩，寓教于乐巩固知识', color: 'var(--kid-green-400)' },
          { Icon: Award, title: '勋章成就激励', desc: '答题获得金银铜勋章，32节全部完成解锁毕业认证', color: 'var(--kid-orange-400)' },
        ].map((f) => (
          <div
            key={f.title}
            className="kid-card"
            style={{
              padding: '28px 32px',
              textAlign: 'center',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(33,133,208,0.14)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '';
            }}
          >
            <f.Icon size={44} strokeWidth={1.75} style={{ color: f.color, margin: '0 auto 10px' }} />
            <div style={{ fontWeight: 800, fontSize: 20, color: f.color, marginBottom: 8 }}>{f.title}</div>
            <div style={{ fontSize: 15, color: 'var(--kid-gray-400)', lineHeight: 1.7 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      {/* ===== 课程网格标题 ===== */}
      <div
        className="kid-float-in delay-200"
        style={{ margin: '8px 48px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: 'var(--kid-gray-900)', marginBottom: 4 }}>
            全部课程
          </h2>
          <p style={{ fontSize: 17, color: 'var(--kid-gray-400)' }}>
            点击课程卡片，开始探索AI世界 ✨
          </p>
        </div>
        <div style={{
          background: 'var(--kid-blue-50)',
          border: '1.5px solid var(--kid-blue-100)',
          borderRadius: 16,
          padding: '10px 24px',
          color: 'var(--kid-blue-500)',
          fontWeight: 700,
          fontSize: 15,
        }}>
          共 32 节课 · 4大章节
        </div>
      </div>

      {/* ===== 课程卡片网格 ===== */}
      <div
        className="kid-float-in delay-300"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: 20,
          margin: '0 48px',
        }}
      >
        {COURSE_DATA.map((course, idx) => {
          const mc = getModuleColor(course.module);
          return (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              className="kid-course-card"
              style={{
                textAlign: 'left',
                padding: 0,
                animationDelay: `${0.3 + idx * 0.018}s`,
              }}
            >
              {/* 封面图 */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundColor: mc.bg,
                  borderRadius: '22px 22px 0 0',
                }}
              >
                <img
                  src={course.coverImage}
                  alt={course.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.07)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = ''; }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement!;
                    parent.innerHTML = `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,${mc.bg},#fff);padding:8px"><div style="font-size:2.8rem">📖</div><div style="font-size:12px;color:${mc.text};font-weight:700;margin-top:6px">第${String(course.lessonNum).padStart(2,'0')}课</div></div>`;
                  }}
                />

                {/* 课号角标 */}
                <div style={{
                  position: 'absolute', top: 10, left: 10,
                  background: mc.dot,
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: 999,
                  boxShadow: `0 2px 8px ${mc.dot}55`,
                  letterSpacing: '0.02em',
                }}>
                  第{String(course.lessonNum).padStart(2, '0')}课
                </div>

                {/* Hover 遮罩 */}
                <div
                  className="course-hover-mask"
                  style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(transparent 45%, ${mc.dot}cc 100%)`,
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                    paddingBottom: 12,
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = '0'; }}
                >
                  <span style={{ color: '#fff', fontSize: 13, fontWeight: 800 }}>点击开始学习 →</span>
                </div>
              </div>

              {/* 卡片文字 */}
              <div style={{ padding: '10px 12px 12px' }}>
                <div style={{
                  fontWeight: 800,
                  fontSize: 14,
                  color: 'var(--kid-gray-900)',
                  lineHeight: 1.45,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: 5,
                }}>
                  {course.title}
                </div>
                <div style={{
                  fontSize: 11,
                  color: mc.text,
                  fontWeight: 700,
                  background: mc.bg,
                  display: 'inline-block',
                  padding: '2px 8px',
                  borderRadius: 8,
                }}>
                  {getModuleShort(course.module)}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* 底部留白 */}
      <div style={{ height: 40 }} />
    </div>
  );
}
