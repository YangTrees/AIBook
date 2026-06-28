import type { Course } from '../../data/courseData';
import { Trophy, Medal, Award, Video, BookOpen, BookImage, Brain, Gamepad2, Wrench } from 'lucide-react';

interface QuizRecord {
  total: number;
  correct: number;
  errors: number;
  timeSeconds: number;
  completed: boolean;
}

interface SummaryModuleProps {
  course: Course;
  quizRecord: QuizRecord;
}

const MEDALS = [
  {
    min: 90,
    Icon: Trophy,
    name: '金星勋章',
    gradient: 'linear-gradient(135deg, #f5c842, #e09010)',
    textColor: '#7a5200',
    bgColor: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    borderColor: '#f5c84233',
  },
  {
    min: 70,
    Icon: Medal,
    name: '银星勋章',
    gradient: 'linear-gradient(135deg, #c8d8e8, #8aa0b8)',
    textColor: '#4a6080',
    bgColor: 'linear-gradient(135deg, #f4f8fc, #e8eef4)',
    borderColor: '#a0b8cc33',
  },
  {
    min: 0,
    Icon: Award,
    name: '铜星勋章',
    gradient: 'linear-gradient(135deg, #f5b060, #c87020)',
    textColor: '#7a4010',
    bgColor: 'linear-gradient(135deg, #fff6ed, #fde8cc)',
    borderColor: '#f5a84d33',
  },
];

const LEARNING_STEPS = [
  { Icon: Video, label: '科普视频' },
  { Icon: BookOpen, label: '核心知识' },
  { Icon: BookImage, label: '绘本视频' },
  { Icon: Brain, label: '知识问答' },
  { Icon: Gamepad2, label: '互动游戏' },
  { Icon: Wrench, label: '动手时间' },
  { Icon: Trophy, label: '课程总结' },
];

export default function SummaryModule({ course, quizRecord }: SummaryModuleProps) {
  const accuracy = quizRecord.completed
    ? Math.round((quizRecord.correct / quizRecord.total) * 100)
    : 0;

  const medal = MEDALS.find((m) => accuracy >= m.min) || MEDALS[MEDALS.length - 1];
  const mins = Math.floor(quizRecord.timeSeconds / 60);
  const secs = quizRecord.timeSeconds % 60;

  return (
    <div className="kid-float-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* ===== 勋章横幅 ===== */}
      <div style={{
        background: medal.gradient,
        borderRadius: 26,
        padding: '36px 40px',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -20, top: -20,
          width: 160, height: 160, borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
        }} />
        <medal.Icon size={64} strokeWidth={1.5} style={{ color: medal.textColor, marginBottom: 12 }} />
        <h3 style={{ fontSize: 30, fontWeight: 900, marginBottom: 8 }}>课程学习完成！</h3>
        <p style={{ fontSize: 17, opacity: 0.9 }}>第{course.id}课 · {course.title}</p>
      </div>

      {/* ===== 核心知识点复盘 ===== */}
      <div style={{
        background: '#fff',
        borderRadius: 22,
        padding: '22px 26px',
        border: '1.5px solid var(--kid-blue-100)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}>
        <h4 style={{
          fontWeight: 800, fontSize: 19, color: 'var(--kid-blue-500)',
          marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>📚</span> 核心知识点复盘
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {course.keyPoints.map((point, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              background: 'var(--kid-blue-50)',
              borderRadius: 14,
              padding: '12px 16px',
            }}>
              <span style={{
                flexShrink: 0,
                width: 26, height: 26,
                background: 'var(--kid-blue-400)',
                color: '#fff',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800,
              }}>{i + 1}</span>
              <span style={{ fontSize: 16, color: 'var(--kid-gray-700)', lineHeight: 1.65 }}>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 答题数据 ===== */}
      <div style={{
        background: '#fff',
        borderRadius: 22,
        padding: '22px 26px',
        border: '1.5px solid var(--kid-blue-100)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}>
        <h4 style={{
          fontWeight: 800, fontSize: 19, color: 'var(--kid-blue-500)',
          marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>📊</span> 答题数据统计
        </h4>
        {quizRecord.completed ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {[
              { label: '正确率', value: `${accuracy}%`, color: 'var(--kid-green-400)', bg: 'var(--kid-green-50)', border: 'var(--kid-green-100)' },
              { label: '错题数', value: `${quizRecord.errors}`, color: 'var(--kid-red-500)', bg: 'var(--kid-red-50)', border: 'var(--kid-red-100)' },
              { label: '用时', value: `${mins}:${String(secs).padStart(2,'0')}`, color: 'var(--kid-blue-500)', bg: 'var(--kid-blue-50)', border: 'var(--kid-blue-100)' },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: stat.bg, border: `1.5px solid ${stat.border}`,
                borderRadius: 16, padding: '16px 10px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: 'var(--kid-gray-400)', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--kid-gray-400)' }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>📝</div>
            <p style={{ fontSize: 16 }}>尚未完成知识问答</p>
            <p style={{ fontSize: 14, marginTop: 4 }}>请先完成第4模块的知识问答</p>
          </div>
        )}
      </div>

      {/* ===== 学习旅程 ===== */}
      <div style={{
        background: '#fff',
        borderRadius: 22,
        padding: '22px 26px',
        border: '1.5px solid var(--kid-gray-200)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}>
        <h4 style={{
          fontWeight: 800, fontSize: 19, color: 'var(--kid-gray-700)',
          marginBottom: 16,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>🗺️</span> 学习旅程
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {LEARNING_STEPS.map((step, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--kid-green-50)',
              border: '1.5px solid var(--kid-green-100)',
              borderRadius: 999,
              padding: '7px 18px',
            }}>
              <step.Icon size={18} strokeWidth={2} style={{ color: 'var(--kid-green-400)' }} />
              <span style={{ fontSize: 14, color: 'var(--kid-gray-600)', fontWeight: 600 }}>{step.label}</span>
              <span style={{ fontSize: 14, color: 'var(--kid-green-400)', fontWeight: 800 }}>✓</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 勋章卡 ===== */}
      <div style={{
        background: medal.bgColor,
        borderRadius: 22,
        padding: '20px 24px',
        border: `1.5px solid ${medal.borderColor}`,
        display: 'flex', alignItems: 'center', gap: 20,
      } as React.CSSProperties}>
        <medal.Icon size={48} strokeWidth={1.5} style={{ color: medal.textColor }} />
        <div>
          <div style={{ fontWeight: 900, fontSize: 22, color: medal.textColor }}>{medal.name}</div>
          <p style={{ fontSize: 15, color: 'var(--kid-gray-400)', marginTop: 4 }}>
            完成第{course.id}课所有学习模块
          </p>
          {quizRecord.completed && (
            <p style={{ fontSize: 14, color: 'var(--kid-gray-300)', marginTop: 2 }}>
              答题正确率 {accuracy}%
            </p>
          )}
        </div>
      </div>

      {/* ===== 下节课预告 ===== */}
      {course.id < 32 && (
        <div style={{
          background: 'linear-gradient(135deg, #eef7ff, #f3f0ff)',
          borderRadius: 20,
          padding: '18px 24px',
          border: '1.5px solid var(--kid-blue-100)',
        }}>
          <h4 style={{ fontWeight: 800, fontSize: 17, color: 'var(--kid-blue-500)', marginBottom: 6 }}>
            🚀 下节课预告
          </h4>
          <p style={{ fontSize: 15, color: 'var(--kid-gray-500)', lineHeight: 1.7 }}>
            继续探索AI的神奇世界，完成第{course.id + 1}课的学习！
          </p>
        </div>
      )}

      {course.id === 32 && (
        <div style={{
          background: 'linear-gradient(135deg, #fffbeb, #fff6ed)',
          borderRadius: 22,
          padding: '28px 32px',
          textAlign: 'center',
          border: '2px solid #f5c84255',
          boxShadow: '0 6px 24px rgba(245,200,66,0.15)',
        }}>
          <div style={{ fontSize: 52, marginBottom: 10 }}>🎓</div>
          <h4 style={{ fontWeight: 900, fontSize: 26, color: '#c87000', marginBottom: 8 }}>
            恭喜完成32节全部课程！
          </h4>
          <p style={{ fontSize: 16, color: 'var(--kid-gray-500)', lineHeight: 1.75 }}>
            你已成为小小AI研究员，继续探索AI的无限可能！
          </p>
        </div>
      )}
    </div>
  );
}
