import { useState } from 'react';

interface KnowledgeViewerProps {
  images: string[];
  knowledgePoints: string[];
  courseId: number;
}

export default function KnowledgeViewer({ images, knowledgePoints, courseId }: KnowledgeViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const total = images.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setImageError(false);
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex < total - 1) {
      setImageError(false);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentPoint = knowledgePoints[currentIndex] || knowledgePoints[knowledgePoints.length - 1];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* ===== 图片浏览器 ===== */}
      <div style={{
        background: '#fff',
        borderRadius: 22,
        overflow: 'hidden',
        border: '1.5px solid var(--kid-blue-100)',
        boxShadow: '0 4px 20px rgba(33,133,208,0.08)',
      }}>
        {/* 图片区 */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #f0f6ff, #f5f0ff)',
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {imageError ? (
            <div style={{
              width: '100%', minHeight: 380,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 12,
            }}>
              <div style={{ fontSize: 52 }}>📖</div>
              <p style={{ color: 'var(--kid-blue-400)', fontSize: 15, fontWeight: 700 }}>
                第{currentIndex + 1}张知识讲解图
              </p>
              <p style={{ color: 'var(--kid-gray-400)', fontSize: 13 }}>{images[currentIndex]}</p>
            </div>
          ) : (
            <img
              key={`${courseId}-${currentIndex}`}
              src={images[currentIndex]}
              alt={`知识讲解 ${currentIndex + 1}`}
              className="kid-fade-in"
              style={{
                maxWidth: '100%',
                maxHeight: 480,
                objectFit: 'contain',
                display: 'block',
              }}
              onError={() => setImageError(true)}
            />
          )}

          {/* 左翻页按钮 */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="kid-btn kid-btn-primary kid-btn-icon"
            style={{
              position: 'absolute', left: 20,
              opacity: currentIndex === 0 ? 0.3 : 1,
              background: currentIndex === 0
                ? 'var(--kid-gray-200)'
                : 'linear-gradient(135deg, #3a9ee8, #2185d0)',
              color: currentIndex === 0 ? 'var(--kid-gray-400)' : '#fff',
              fontSize: 26,
              boxShadow: currentIndex === 0 ? 'none' : '0 4px 16px rgba(33,133,208,0.35)',
            }}
          >
            ‹
          </button>

          {/* 右翻页按钮 */}
          <button
            onClick={handleNext}
            disabled={currentIndex === total - 1}
            className="kid-btn kid-btn-primary kid-btn-icon"
            style={{
              position: 'absolute', right: 20,
              opacity: currentIndex === total - 1 ? 0.3 : 1,
              background: currentIndex === total - 1
                ? 'var(--kid-gray-200)'
                : 'linear-gradient(135deg, #3a9ee8, #2185d0)',
              color: currentIndex === total - 1 ? 'var(--kid-gray-400)' : '#fff',
              fontSize: 26,
              boxShadow: currentIndex === total - 1 ? 'none' : '0 4px 16px rgba(33,133,208,0.35)',
            }}
          >
            ›
          </button>
        </div>

        {/* 分页指示器 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 8, padding: '14px 20px',
          background: 'var(--kid-blue-50)',
          borderTop: '1px solid var(--kid-blue-100)',
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? 24 : 10,
                height: 10,
                borderRadius: 9999,
                background: i === currentIndex ? 'var(--kid-blue-400)' : 'var(--kid-blue-200)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.22s cubic-bezier(0.34,1.56,0.64,1)',
                boxShadow: i === currentIndex ? '0 2px 6px rgba(33,133,208,0.35)' : 'none',
              }}
            />
          ))}
          <span style={{
            marginLeft: 8,
            fontSize: 14,
            color: 'var(--kid-gray-400)',
            fontWeight: 700,
          }}>
            {currentIndex + 1} / {total}
          </span>
        </div>
      </div>

      {/* ===== 进度条 ===== */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div className="kid-progress-track" style={{ flex: 1, height: 10 }}>
          <div
            className="kid-progress-fill"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
        <span style={{ fontSize: 14, color: 'var(--kid-blue-400)', fontWeight: 700 }}>
          {Math.round(((currentIndex + 1) / total) * 100)}%
        </span>
      </div>

      {/* ===== 当前知识点卡片 ===== */}
      <div style={{
        background: 'linear-gradient(135deg, #eef7ff, #f5f0ff)',
        border: '1.5px solid var(--kid-blue-100)',
        borderRadius: 20,
        padding: '20px 24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ fontSize: 28, marginTop: 2 }}>💡</div>
          <div>
            <div style={{
              fontSize: 13, color: 'var(--kid-blue-500)',
              fontWeight: 800, marginBottom: 6, letterSpacing: '0.03em',
            }}>
              第{currentIndex + 1}个核心知识点
            </div>
            <p style={{
              color: 'var(--kid-gray-700)',
              fontWeight: 700, fontSize: 17,
              lineHeight: 1.75,
            }}>
              {currentPoint}
            </p>
          </div>
        </div>
      </div>

      {/* ===== 全部知识点列表 ===== */}
      <div style={{
        background: '#fff',
        borderRadius: 20,
        border: '1.5px solid var(--kid-gray-200)',
        padding: '20px 24px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}>
        <h4 style={{
          fontWeight: 800, fontSize: 17,
          color: 'var(--kid-gray-700)',
          marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>📝</span> 本课全部知识点
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {knowledgePoints.map((point, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(Math.min(i, total - 1))}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '12px 16px',
                borderRadius: 14,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                background: i === currentIndex ? 'var(--kid-blue-50)' : 'transparent',
                border: `1.5px solid ${i === currentIndex ? 'var(--kid-blue-200)' : 'transparent'}`,
              }}
              onMouseEnter={(e) => {
                if (i !== currentIndex) (e.currentTarget as HTMLDivElement).style.background = 'var(--kid-gray-50)';
              }}
              onMouseLeave={(e) => {
                if (i !== currentIndex) (e.currentTarget as HTMLDivElement).style.background = 'transparent';
              }}
            >
              <span style={{
                flexShrink: 0,
                width: 26, height: 26,
                borderRadius: '50%',
                background: i === currentIndex ? 'var(--kid-blue-400)' : 'var(--kid-gray-200)',
                color: i === currentIndex ? '#fff' : 'var(--kid-gray-500)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800,
                transition: 'all 0.18s ease',
              }}>
                {i + 1}
              </span>
              <span style={{
                fontSize: 16,
                color: i === currentIndex ? 'var(--kid-blue-600)' : 'var(--kid-gray-600)',
                lineHeight: 1.65,
                fontWeight: i === currentIndex ? 700 : 400,
              }}>
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
