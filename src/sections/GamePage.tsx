import { useState } from 'react';
import { createPortal } from 'react-dom';
import COURSE_DATA from '../data/courseData';
import { useStorage } from '../hooks/useStorage';

export default function GamePage() {
  const [playingGame, setPlayingGame] = useState<{ lessonId: number; title: string } | null>(null);
  const { storage, markGameCompleted } = useStorage();

  const gameList = COURSE_DATA.map(course => ({
    lessonId: course.id,
    title: course.title,
    coverImage: course.coverImage,
    gamePath: `./assets/games/games/index${String(course.id).padStart(2, '0')}.html`,
  }));

  const getGameProgress = (lessonId: number): number => {
    const record = storage.lessons[lessonId];
    return record?.gameCompleted ? 100 : 0;
  };

  const handlePlayGame = (game: typeof gameList[0]) => {
    setPlayingGame({ lessonId: game.lessonId, title: game.title });
  };

  const handleCloseGame = () => {
    setPlayingGame(null);
  };

  const handleGameComplete = () => {
    if (playingGame) {
      markGameCompleted(playingGame.lessonId);
    }
  };

  return (
    <div className="kid-float-in" style={{ width: 1920, minHeight: 1000, padding: '40px 48px', boxSizing: 'border-box' }}>
      {/* 顶部标题区 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ fontSize: 48 }}>🎮</div>
          <div>
            <h1 style={{ fontSize: 36, fontWeight: 900, color: 'var(--kid-gray-800)', margin: 0 }}>趣味游戏</h1>
            <p style={{ fontSize: 16, color: 'var(--kid-gray-400)', margin: '4px 0 0 0' }}>32个互动游戏，自由练习巩固知识点</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <img src="./assets/characters/characters/tuantuan.png" alt="团团" style={{ width: 60, height: 75 }} />
          <img src="./assets/characters/characters/diandian.png" alt="点点" style={{ width: 55, height: 65 }} />
        </div>
      </div>

      {/* 游戏网格 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}>
        {gameList.map(game => {
          const progress = getGameProgress(game.lessonId);

          return (
            <div
              key={game.lessonId}
              onClick={() => handlePlayGame(game)}
              style={{
                background: 'white',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '2px solid var(--kid-gray-100)',
                position: 'relative',
              }}
            >
              {/* 封面图 */}
              <div style={{
                position: 'relative',
                aspectRatio: '3/4',
                background: `linear-gradient(135deg, var(--kid-green-100), var(--kid-blue-100))`,
              }}>
                <img
                  src={game.coverImage}
                  alt={game.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* 课程号角标 */}
                <div style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  background: 'var(--kid-green-500)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 800,
                }}>
                  第{game.lessonId}课
                </div>

                {/* 游戏图标 */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                }}>
                  <div style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  }}>
                    🎮
                  </div>
                </div>

                {/* 已完成标记 */}
                {progress === 100 && (
                  <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'var(--kid-green-500)',
                    color: 'white',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}>
                    ✓
                  </div>
                )}
              </div>

              {/* 游戏信息 */}
              <div style={{ padding: '14px 16px' }}>
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--kid-gray-700)',
                  margin: '0 0 8px 0',
                  textAlign: 'center',
                }}>
                  {game.title}
                </h3>

                {/* 进度条 */}
                <div style={{ marginTop: 8 }}>
                  <div style={{
                    height: 6,
                    background: 'var(--kid-gray-100)',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: progress === 100
                        ? 'var(--kid-green-400)'
                        : 'var(--kid-blue-400)',
                      borderRadius: 3,
                    }} />
                  </div>
                  <p style={{
                    fontSize: 12,
                    color: progress === 100 ? 'var(--kid-green-500)' : 'var(--kid-gray-400)',
                    margin: '4px 0 0 0',
                    textAlign: 'center',
                    fontWeight: progress === 100 ? 700 : 400,
                  }}>
                    {progress === 100 ? '已通关 ✨' : '点击开始游戏'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 游戏模态框 */}
      {playingGame && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: '95%',
              maxWidth: 1400,
              height: '90vh',
              background: 'white',
              borderRadius: 24,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* 游戏头部 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 24px',
              background: 'var(--kid-green-500)',
              color: 'white',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button
                  onClick={handleCloseGame}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    borderRadius: 10,
                    padding: '8px 16px',
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  ✕ 退出游戏
                </button>
                <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>
                  第{playingGame.lessonId}课游戏：{playingGame.title}
                </h2>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={() => {
                    const iframe = document.querySelector('iframe');
                    if (iframe) iframe.src = iframe.src;
                  }}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    borderRadius: 10,
                    padding: '8px 16px',
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  🔄 重新开始
                </button>
                <button
                  onClick={handleGameComplete}
                  style={{
                    background: 'var(--kid-yellow-400)',
                    border: 'none',
                    borderRadius: 10,
                    padding: '8px 20px',
                    color: 'var(--kid-gray-800)',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  ✅ 我完成了
                </button>
              </div>
            </div>

            {/* 游戏iframe */}
            <div style={{ flex: 1, background: 'var(--kid-gray-100)', position: 'relative' }}>
              <iframe
                src={`./assets/games/games/index${String(playingGame.lessonId).padStart(2, '0')}.html`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                title={`Game ${playingGame.lessonId}`}
              />
            </div>

            {/* 底部鼓励语 */}
            <div style={{
              padding: '8px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
              background: 'var(--kid-green-50)',
              flexShrink: 0,
            }}>
              <img src="./assets/characters/characters/tuantuan.png" alt="团团" style={{ width: 30, height: 40 }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: 'var(--kid-green-600)',
                  margin: 0,
                }}>
                  团团和点点的加油声 🚀
                </p>
                <p style={{
                  fontSize: 12,
                  color: 'var(--kid-gray-500)',
                  margin: 0,
                }}>
                  加油！你一定能完成的！游戏里答错了也没关系，多试几次就好了！
                </p>
              </div>
              <img src="./assets/characters/characters/diandian.png" alt="点点" style={{ width: 28, height: 36 }} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
