import { useState } from 'react';
import COURSE_DATA from '../data/courseData';
import { useStorage } from '../hooks/useStorage';

type SubTabType = 'overview' | 'details' | 'wrong' | 'badges';

export default function ArchivePage() {
  const [activeSubTab, setActiveSubTab] = useState<SubTabType>('overview');
  const { storage, getStats } = useStorage();
  const stats = getStats();

  const subTabs = [
    { key: 'overview' as SubTabType, label: '学习总览', emoji: '📊' },
    { key: 'details' as SubTabType, label: '课程详情', emoji: '📋' },
    { key: 'wrong' as SubTabType, label: '错题本', emoji: '📝' },
    { key: 'badges' as SubTabType, label: '我的勋章', emoji: '🏅' },
  ];

  // 收集所有错题
  const allWrongAnswers: Array<{
    lessonId: number;
    courseTitle: string;
    question: string;
    selectedKey: string;
    correctKey: string;
    timestamp: string | undefined;
  }> = [];
  Object.values(storage.lessons).forEach(record => {
    if (record.wrongAnswers && record.wrongAnswers.length > 0) {
      const course = COURSE_DATA.find(c => c.id === record.lessonId);
      record.wrongAnswers.forEach(wa => {
        allWrongAnswers.push({
          lessonId: record.lessonId,
          courseTitle: course?.title || `第${record.lessonId}课`,
          question: wa.question,
          selectedKey: wa.selectedKey,
          correctKey: wa.correctKey,
          timestamp: wa.timestamp,
        });
      });
    }
  });

  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${seconds}秒`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}分${seconds % 60}秒`;
    return `${Math.floor(seconds / 3600)}小时${Math.floor((seconds % 3600) / 60)}分`;
  };

  return (
    <div className="kid-float-in" style={{ width: 1920, minHeight: 1000, padding: '40px 48px', boxSizing: 'border-box' }}>
      {/* 顶部标题区 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ fontSize: 48 }}>📚</div>
          <div>
            <h1 style={{ fontSize: 36, fontWeight: 900, color: 'var(--kid-gray-800)', margin: 0 }}>学习档案</h1>
            <p style={{ fontSize: 16, color: 'var(--kid-gray-400)', margin: '4px 0 0 0' }}>记录你的每一步成长</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <img src="./assets/characters/characters/tuantuan.png" alt="团团" style={{ width: 60, height: 75 }} />
          <img src="./assets/characters/characters/diandian.png" alt="点点" style={{ width: 55, height: 65 }} />
        </div>
      </div>

      {/* 顶部统计卡片 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20,
        marginBottom: 32,
      }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--kid-blue-400), var(--kid-blue-600))',
          borderRadius: 24,
          padding: '24px 28px',
          color: 'white',
          boxShadow: '0 6px 20px rgba(33,133,208,0.3)',
        }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 8 }}>已完成课程</div>
          <div style={{ fontSize: 42, fontWeight: 900 }}>
            {stats.completedCount}
            <span style={{ fontSize: 20, opacity: 0.7 }}> / 32</span>
          </div>
          <div style={{ fontSize: 14, opacity: 0.8, marginTop: 8 }}>
            课程完成度 {Math.round((stats.completedCount / 32) * 100)}%
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, var(--kid-green-400), var(--kid-green-600))',
          borderRadius: 24,
          padding: '24px 28px',
          color: 'white',
          boxShadow: '0 6px 20px rgba(39,168,114,0.3)',
        }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 8 }}>累计学习时长</div>
          <div style={{ fontSize: 42, fontWeight: 900 }}>
            {formatTime(stats.totalStudySeconds)}
          </div>
          <div style={{ fontSize: 14, opacity: 0.8, marginTop: 8 }}>
            继续加油！
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, var(--kid-orange-400), var(--kid-orange-600))',
          borderRadius: 24,
          padding: '24px 28px',
          color: 'white',
          boxShadow: '0 6px 20px rgba(224,112,16,0.3)',
        }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 8 }}>累计错题数</div>
          <div style={{ fontSize: 42, fontWeight: 900 }}>
            {stats.totalErrors}
            <span style={{ fontSize: 20, opacity: 0.7 }}> 道</span>
          </div>
          <div style={{ fontSize: 14, opacity: 0.8, marginTop: 8 }}>
            错过的都是进步的机会
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, var(--kid-yellow-400), var(--kid-yellow-600))',
          borderRadius: 24,
          padding: '24px 28px',
          color: 'white',
          boxShadow: '0 6px 20px rgba(200,144,16,0.3)',
        }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 8 }}>获得勋章</div>
          <div style={{ fontSize: 42, fontWeight: 900 }}>
            {storage.badges.length}
            <span style={{ fontSize: 20, opacity: 0.7 }}> 枚</span>
          </div>
          <div style={{ fontSize: 14, opacity: 0.8, marginTop: 8 }}>
            {stats.avgAccuracy >= 90 ? '太棒了！' : stats.avgAccuracy >= 70 ? '很不错！' : '继续努力！'}
          </div>
        </div>
      </div>

      {/* 子Tab切换 */}
      <div style={{
        display: 'flex',
        gap: 12,
        marginBottom: 24,
        background: 'white',
        borderRadius: 20,
        padding: '12px 16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      }}>
        {subTabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveSubTab(tab.key)}
            style={{
              padding: '12px 28px',
              borderRadius: 16,
              border: 'none',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              background: activeSubTab === tab.key ? 'var(--kid-blue-500)' : 'transparent',
              color: activeSubTab === tab.key ? 'white' : 'var(--kid-gray-500)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 20 }}>{tab.emoji}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* 子Tab内容 */}
      <div style={{ minHeight: 500 }}>
        {/* 学习总览 */}
        {activeSubTab === 'overview' && (
          <div className="kid-fade-in" style={{ display: 'flex', gap: 32 }}>
            {/* 环形进度图 */}
            <div style={{
              background: 'white',
              borderRadius: 24,
              padding: 28,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              flex: '0 0 340px',
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--kid-gray-700)', margin: '0 0 24px 0', textAlign: 'center' }}>
                课程完成度
              </h3>
              <div style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: `conic-gradient(
                  var(--kid-blue-500) ${(stats.completedCount / 32) * 360}deg,
                  var(--kid-gray-100) 0deg
                )`,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  background: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ fontSize: 42, fontWeight: 900, color: 'var(--kid-blue-500)' }}>
                    {Math.round((stats.completedCount / 32) * 100)}%
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--kid-gray-400)' }}>
                    {stats.completedCount}/32课
                  </div>
                </div>
              </div>
            </div>

            {/* 各模块完成情况 */}
            <div style={{
              background: 'white',
              borderRadius: 24,
              padding: 28,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              flex: 1,
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--kid-gray-700)', margin: '0 0 24px 0' }}>
                各模块学习情况
              </h3>
              {['模块A｜信息从哪里来', '模块B｜编码与压缩', '模块C｜数据与统计', '模块D｜人工智能', '模块E｜综合应用'].map((module) => {
                const moduleLessons = COURSE_DATA.filter(c => c.module === module);
                const completedInModule = moduleLessons.filter(l => storage.lessons[l.id]?.completed).length;
                const total = moduleLessons.length;
                const percent = Math.round((completedInModule / total) * 100);

                return (
                  <div key={module} style={{ marginBottom: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--kid-gray-700)' }}>
                        {module}
                      </span>
                      <span style={{ fontSize: 14, color: 'var(--kid-gray-500)' }}>
                        {completedInModule}/{total} 课
                      </span>
                    </div>
                    <div style={{
                      height: 12,
                      background: 'var(--kid-gray-100)',
                      borderRadius: 6,
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${percent}%`,
                        background: percent === 100
                          ? 'var(--kid-green-500)'
                          : 'var(--kid-blue-400)',
                        borderRadius: 6,
                        transition: 'width 0.5s ease',
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 课程详情 */}
        {activeSubTab === 'details' && (
          <div className="kid-fade-in" style={{
            background: 'white',
            borderRadius: 24,
            padding: 28,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--kid-gray-700)', margin: '0 0 24px 0' }}>
              课程学习详情
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
            }}>
              {COURSE_DATA.map(course => {
                const record = storage.lessons[course.id];
                const isCompleted = record?.completed;
                const quizAccuracy = record?.quizAccuracy || 0;

                return (
                  <div
                    key={course.id}
                    style={{
                      border: '2px solid',
                      borderColor: isCompleted ? 'var(--kid-green-200)' : 'var(--kid-gray-100)',
                      borderRadius: 16,
                      padding: 14,
                      background: isCompleted ? 'var(--kid-green-50)' : 'white',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <img
                        src={course.coverImage}
                        alt={course.title}
                        style={{ width: 40, height: 52, borderRadius: 8, objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--kid-gray-700)' }}>
                          第{course.id}课
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--kid-gray-500)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 120 }}>
                          {course.title}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: 13,
                    }}>
                      <span style={{
                        color: isCompleted ? 'var(--kid-green-500)' : 'var(--kid-gray-400)',
                        fontWeight: 700,
                      }}>
                        {isCompleted ? '✅ 已完成' : '⏳ 未完成'}
                      </span>
                      {record?.quizAccuracy !== undefined && (
                        <span style={{
                          color: quizAccuracy >= 90 ? 'var(--kid-green-500)' : quizAccuracy >= 70 ? 'var(--kid-orange-500)' : 'var(--kid-red-500)',
                          fontWeight: 700,
                        }}>
                          {quizAccuracy}%
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 错题本 */}
        {activeSubTab === 'wrong' && (
          <div className="kid-fade-in" style={{
            background: 'white',
            borderRadius: 24,
            padding: 28,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--kid-gray-700)', margin: '0 0 24px 0' }}>
              错题本
              <span style={{ fontSize: 14, color: 'var(--kid-gray-400)', fontWeight: 400, marginLeft: 12 }}>
                共 {allWrongAnswers.length} 道错题
              </span>
            </h3>
            {allWrongAnswers.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--kid-gray-400)' }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                <p style={{ fontSize: 18, fontWeight: 700 }}>太棒了！没有错题！</p>
                <p style={{ fontSize: 14 }}>继续保持，争取获得更多勋章！</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {allWrongAnswers.map((wa, idx) => (
                  <div
                    key={`${wa.lessonId}-${wa.question.slice(0, 20)}-${idx}`}
                    style={{
                      background: 'var(--kid-red-50)',
                      border: '2px solid var(--kid-red-100)',
                      borderRadius: 16,
                      padding: 16,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                      <div>
                        <span style={{
                          background: 'var(--kid-red-100)',
                          color: 'var(--kid-red-500)',
                          padding: '4px 10px',
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 700,
                        }}>
                          第{wa.lessonId}课 · {wa.courseTitle}
                        </span>
                      </div>
                      <span style={{ fontSize: 12, color: 'var(--kid-gray-400)' }}>
                        {wa.timestamp ? new Date(wa.timestamp).toLocaleDateString() : '-'}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: 'var(--kid-gray-700)',
                      margin: '0 0 10px 0',
                    }}>
                      {wa.question}
                    </p>
                    <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
                      <span style={{ color: 'var(--kid-red-500)' }}>
                        ✗ 你的答案：{wa.selectedKey}
                      </span>
                      <span style={{ color: 'var(--kid-green-500)' }}>
                        ✓ 正确答案：{wa.correctKey}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 我的勋章 */}
        {activeSubTab === 'badges' && (
          <div className="kid-fade-in" style={{
            background: 'white',
            borderRadius: 24,
            padding: 28,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--kid-gray-700)', margin: '0 0 24px 0' }}>
              我的勋章墙
              <span style={{ fontSize: 14, color: 'var(--kid-gray-400)', fontWeight: 400, marginLeft: 12 }}>
                共 {storage.badges.length} 枚勋章
              </span>
            </h3>
            {storage.badges.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--kid-gray-400)' }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🏅</div>
                <p style={{ fontSize: 18, fontWeight: 700 }}>还没有获得勋章</p>
                <p style={{ fontSize: 14 }}>完成课程答题，正确率达到70%以上即可获得！</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
                {storage.badges.map(badge => {
                  const badgeColor = badge.type === 'gold'
                    ? 'linear-gradient(135deg, #f5c842, #e8a810)'
                    : badge.type === 'silver'
                      ? 'linear-gradient(135deg, #9ab0c8, #6a8aaa)'
                      : 'linear-gradient(135deg, #f5a84d, #e07010)';
                  const badgeEmoji = badge.type === 'gold'
                    ? '🥇'
                    : badge.type === 'silver'
                      ? '🥈'
                      : '🥉';

                  return (
                    <div
                      key={badge.id}
                      style={{
                        background: badge.type === 'gold' ? '#fffbeb' : badge.type === 'silver' ? '#f8fafc' : '#fff6ed',
                        border: '2px solid',
                        borderColor: badge.type === 'gold' ? '#f5c842' : badge.type === 'silver' ? '#9ab0c8' : '#f5a84d',
                        borderRadius: 20,
                        padding: 20,
                        textAlign: 'center',
                      }}
                    >
                      <div style={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        background: badgeColor,
                        margin: '0 auto 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 36,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      }}>
                        {badgeEmoji}
                      </div>
                      <h4 style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: 'var(--kid-gray-700)',
                        margin: '0 0 6px 0',
                      }}>
                        {badge.name}
                      </h4>
                      <p style={{
                        fontSize: 12,
                        color: 'var(--kid-gray-500)',
                        margin: '0 0 8px 0',
                      }}>
                        {badge.description}
                      </p>
                      <p style={{
                        fontSize: 11,
                        color: 'var(--kid-gray-400)',
                        margin: 0,
                      }}>
                        获得时间：{new Date(badge.earnedAt).toLocaleDateString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
