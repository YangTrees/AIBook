import { useState } from 'react';
import { Gamepad2 } from 'lucide-react';

interface GameModuleProps {
  courseId: number;
  numStr: string;
  onComplete?: () => void;
}

export default function GameModule({ courseId, numStr, onComplete }: GameModuleProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [completed, setCompleted] = useState(false);

  const gameSrc = `./assets/games/games/index${numStr}.html`;

  if (!showGame) {
    return (
      <div className="kid-float-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* 游戏预告卡 */}
        <div style={{
          background: 'linear-gradient(135deg, #edfaf4, #c7f0de)',
          borderRadius: 24,
          padding: '28px 32px',
          textAlign: 'center',
          border: '1.5px solid var(--kid-green-100)',
        }}>
          <Gamepad2 size={56} strokeWidth={1.5} style={{ color: '#27a872', marginBottom: 10 }} />
          <h3 style={{ fontWeight: 900, fontSize: 24, color: '#1a7a52', marginBottom: 6 }}>互动游戏</h3>
          <p style={{ fontSize: 16, color: '#27a872' }}>第{courseId}课专属互动小游戏</p>
        </div>

        {/* 游戏介绍卡 */}
        <div style={{
          background: '#fff',
          borderRadius: 22,
          padding: '28px 32px',
          border: '1.5px solid var(--kid-gray-200)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ fontSize: 36 }}>🎯</div>
            <div>
              <p style={{ fontWeight: 800, fontSize: 20, color: 'var(--kid-gray-700)', marginBottom: 3 }}>准备好了吗？</p>
              <p style={{ fontSize: 15, color: 'var(--kid-gray-400)' }}>专为本节课设计，团团&点点陪你玩</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {[
              { icon: '🎨', text: '专为本节课设计的趣味互动游戏' },
              { icon: '🧸', text: '跟团团点点一起复盘游戏' },
              { icon: '🏆', text: '通过游戏巩固本节课核心知识点' },
            ].map((item) => (
              <div key={item.text} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 16px',
                background: 'var(--kid-green-50)',
                borderRadius: 14,
                border: '1px solid var(--kid-green-100)',
              }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ fontSize: 16, color: 'var(--kid-gray-600)', fontWeight: 600 }}>{item.text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowGame(true)}
            className="kid-btn kid-btn-green"
            style={{ width: '100%', fontSize: 20, padding: '18px 24px', gap: 10 }}
          >
            <span>🎮</span>
            <span>开始游戏</span>
          </button>
        </div>
      </div>
    );
  }

  /* 游戏进行中 */
  return (
    <div className="kid-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* 退出按钮 */}
      <button
        onClick={() => { setShowGame(false); setIsLoaded(false); setHasError(false); }}
        className="kid-btn kid-btn-secondary kid-btn-sm"
        style={{ alignSelf: 'flex-start', gap: 6 }}
      >
        ← 退出游戏
      </button>

      {hasError ? (
        <div style={{
          background: 'var(--kid-orange-50)',
          border: '1.5px solid var(--kid-orange-100)',
          borderRadius: 22,
          padding: '32px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🎮</div>
          <p style={{ fontWeight: 800, fontSize: 20, color: 'var(--kid-gray-700)', marginBottom: 8 }}>游戏加载中</p>
          <p style={{ fontSize: 15, color: 'var(--kid-gray-400)', marginBottom: 6 }}>游戏文件路径：{gameSrc}</p>
          <p style={{ fontSize: 13, color: 'var(--kid-gray-300)' }}>请确认游戏资源已正确放置在 assets/games/games/ 目录</p>
        </div>
      ) : (
        <div style={{
          borderRadius: 22,
          overflow: 'hidden',
          border: '2px solid var(--kid-green-200)',
          boxShadow: '0 8px 32px rgba(39,168,114,0.15)',
          position: 'relative',
        }}>
          {/* 加载指示器 */}
          {!isLoaded && (
            <div style={{
              padding: '24px',
              background: 'var(--kid-green-50)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            }}>
              <div className="kid-spin" style={{
                width: 22, height: 22,
                border: '3px solid var(--kid-green-200)',
                borderTopColor: 'var(--kid-green-400)',
                borderRadius: '50%',
              }} />
              <span style={{ fontSize: 16, color: 'var(--kid-green-500)', fontWeight: 700 }}>游戏加载中...</span>
            </div>
          )}
          <iframe
            src={gameSrc}
            style={{
              width: '100%',
              height: '680px',
              border: 'none',
              display: 'block',
            }}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            title={`第${courseId}课互动游戏`}
          />
        </div>
      )}

      {/* 完成游戏按钮 */}
      <div style={{ display: 'flex', gap: 12 }}>
        {!completed ? (
          <button
            onClick={() => {
              setCompleted(true);
              if (onComplete) onComplete();
            }}
            className="kid-btn kid-btn-green"
            style={{ flex: 1, fontSize: 18, padding: '14px 24px' }}
          >
            ✅ 我完成了游戏
          </button>
        ) : (
          <div style={{
            flex: 1,
            background: 'var(--kid-green-100)',
            borderRadius: 14,
            padding: '14px 24px',
            textAlign: 'center',
            border: '2px solid var(--kid-green-300)',
          }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--kid-green-600)' }}>
              🎉 游戏已完成！继续加油！
            </span>
          </div>
        )}
      </div>

      <div style={{
        background: 'var(--kid-green-50)',
        borderRadius: 14,
        padding: '10px 16px',
        textAlign: 'center',
        border: '1px solid var(--kid-green-100)',
      }}>
        <p style={{ fontSize: 14, color: 'var(--kid-gray-400)' }}>
          💡 跟团团点点一起复盘游戏
        </p>
      </div>
    </div>
  );
}
