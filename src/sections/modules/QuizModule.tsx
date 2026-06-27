import { useState, useEffect, useRef } from 'react';
import type { QuizItem } from '../../data/courseData';

interface QuizRecord {
  total: number;
  correct: number;
  errors: number;
  timeSeconds: number;
  completed: boolean;
  wrongAnswers: Array<{
    questionIndex: number;
    question: string;
    selectedKey: string;
    correctKey: string;
  }>;
}

interface QuizModuleProps {
  quiz: QuizItem[];
  courseTitle: string;
  onComplete: (record: QuizRecord) => void;
}

export default function QuizModule({ quiz, courseTitle, onComplete }: QuizModuleProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [showError, setShowError] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{ questionIndex: number; question: string; selectedKey: string; correctKey: string }>>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setTimeSeconds((t) => t + 1), 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const currentQuestion = quiz[currentQ];

  const handleSelect = (optionKey: string) => {
    if (isAnswered && isCorrect) return;
    setSelectedOption(optionKey);
    setShowError(false);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    const correct = selectedOption === currentQuestion.answer;
    setIsAnswered(true);
    setIsCorrect(correct);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setErrorCount(0);
    } else {
      setTotalErrors((e) => e + 1);
      setErrorCount((c) => c + 1);
      setShowError(true);
      // 收集错题详情
      setWrongAnswers(prev => [...prev, {
        questionIndex: currentQ,
        question: currentQuestion.question,
        selectedKey: selectedOption,
        correctKey: currentQuestion.answer,
      }]);
    }
  };

  const handleNext = () => {
    if (!isCorrect) return;
    if (currentQ < quiz.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setErrorCount(0);
      setShowError(false);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      const record: QuizRecord = {
        total: quiz.length,
        correct: correctCount + 1,
        errors: totalErrors,
        timeSeconds,
        completed: true,
        wrongAnswers: wrongAnswers,
      };
      onComplete(record);
      setCompleted(true);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowError(false);
  };

  /* ===== 完成页 ===== */
  if (completed) {
    const accuracy = Math.round(((correctCount + 1) / quiz.length) * 100);
    const mins = Math.floor(timeSeconds / 60);
    const secs = timeSeconds % 60;
    const medalEmoji = accuracy >= 90 ? '🥇' : accuracy >= 70 ? '🥈' : '🥉';
    const medalText = accuracy >= 90 ? '太棒了！获得金星勋章！' : accuracy >= 70 ? '不错！获得银星勋章！' : '继续加油！获得铜星勋章！';
    const gradientColor = accuracy >= 90
      ? 'linear-gradient(135deg, #f5c842, #e8a810)'
      : accuracy >= 70
        ? 'linear-gradient(135deg, #9ab0c8, #6a8aaa)'
        : 'linear-gradient(135deg, #f5a84d, #e07010)';

    return (
      <div className="kid-bounce-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* 完成横幅 */}
        <div style={{
          background: gradientColor,
          borderRadius: 24,
          padding: '32px 40px',
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
        }}>
          <div style={{ fontSize: 60, marginBottom: 12 }}>{medalEmoji}</div>
          <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>答题完成！</h3>
          <p style={{ fontSize: 16, opacity: 0.88 }}>《{courseTitle}》知识问答</p>
        </div>

        {/* 数据卡片 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {[
            { label: '正确率', value: `${accuracy}%`, color: 'var(--kid-green-400)', bg: 'var(--kid-green-50)', border: 'var(--kid-green-100)' },
            { label: '错题数', value: `${totalErrors}`, color: 'var(--kid-red-500)', bg: 'var(--kid-red-50)', border: 'var(--kid-red-100)' },
            { label: '用时', value: `${mins}:${String(secs).padStart(2,'0')}`, color: 'var(--kid-blue-500)', bg: 'var(--kid-blue-50)', border: 'var(--kid-blue-100)' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: stat.bg,
              border: `1.5px solid ${stat.border}`,
              borderRadius: 18,
              padding: '18px 10px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 14, color: 'var(--kid-gray-400)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 勋章提示 */}
        <div style={{
          background: accuracy >= 90 ? '#fffbeb' : accuracy >= 70 ? '#f8fafc' : '#fff6ed',
          border: '1.5px solid #e2e8f0',
          borderRadius: 20,
          padding: '18px 24px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>{medalEmoji}</div>
          <p style={{ fontWeight: 800, fontSize: 18, color: 'var(--kid-gray-700)', marginBottom: 4 }}>{medalText}</p>
          <p style={{ fontSize: 14, color: 'var(--kid-gray-400)' }}>前往课程总结查看完整成绩 →</p>
        </div>
      </div>
    );
  }

  /* ===== 答题页 ===== */
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

      {/* 进度头部 */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#fff',
        borderRadius: 18,
        padding: '14px 20px',
        border: '1.5px solid var(--kid-gray-200)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
      }}>
        <div style={{ fontSize: 17, color: 'var(--kid-gray-500)', fontWeight: 600 }}>
          第 <span style={{ fontWeight: 900, color: 'var(--kid-blue-500)', fontSize: 20 }}>{currentQ + 1}</span>
          <span style={{ color: 'var(--kid-gray-300)' }}> / {quiz.length}</span> 题
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{
            fontSize: 14, fontWeight: 700,
            background: 'var(--kid-green-50)', color: 'var(--kid-green-400)',
            padding: '4px 14px', borderRadius: 999,
            border: '1px solid var(--kid-green-100)',
          }}>
            ✓ {correctCount} 题
          </span>
          <span style={{
            fontSize: 14, fontWeight: 700,
            background: 'var(--kid-red-50)', color: 'var(--kid-red-500)',
            padding: '4px 14px', borderRadius: 999,
            border: '1px solid var(--kid-red-100)',
          }}>
            ✗ {totalErrors} 错
          </span>
        </div>
      </div>

      {/* 进度条 */}
      <div className="kid-progress-track" style={{ height: 10 }}>
        <div className="kid-progress-fill" style={{ width: `${(currentQ / quiz.length) * 100}%` }} />
      </div>

      {/* 题目卡 */}
      <div className="kid-float-in" style={{
        background: 'linear-gradient(135deg, #eef7ff, #f3f0ff)',
        borderRadius: 20,
        padding: '22px 26px',
        border: '1.5px solid var(--kid-blue-100)',
      }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{
            flexShrink: 0,
            width: 38, height: 38,
            background: 'linear-gradient(135deg, #3a9ee8, #2185d0)',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 900, fontSize: 18,
            boxShadow: '0 4px 12px rgba(33,133,208,0.3)',
          }}>
            {currentQ + 1}
          </div>
          <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--kid-gray-800)', lineHeight: 1.7, margin: 0 }}>
            {currentQuestion.question}
          </p>
        </div>
      </div>

      {/* 选项 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOption === option.key;
          const isRight = option.key === currentQuestion.answer;

          /* 计算选项状态类 */
          let extraClass = '';
          if (isAnswered) {
            if (isRight)                    extraClass = 'correct answered';
            else if (isSelected && !isRight) extraClass = 'wrong answered';
            else                            extraClass = 'disabled answered';
          } else if (isSelected) {
            extraClass = 'selected';
          }

          const badgeBg = isAnswered && isRight
            ? 'var(--kid-green-400)'
            : isAnswered && isSelected && !isRight
              ? 'var(--kid-red-500)'
              : isSelected
                ? 'var(--kid-blue-400)'
                : 'var(--kid-gray-200)';
          const badgeColor = (isSelected || (isAnswered && (isRight || isSelected))) ? '#fff' : 'var(--kid-gray-500)';
          const badgeContent = isAnswered && isRight ? '✓' : isAnswered && isSelected && !isRight ? '✗' : option.key;

          return (
            <button
              key={option.key}
              onClick={() => handleSelect(option.key)}
              disabled={isAnswered && isCorrect}
              className={`kid-quiz-option ${extraClass}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  flexShrink: 0,
                  width: 34, height: 34,
                  borderRadius: 10,
                  background: badgeBg,
                  color: badgeColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: 15,
                  transition: 'all 0.18s ease',
                }}>
                  {badgeContent}
                </div>
                <span style={{ fontSize: 16, lineHeight: 1.6 }}>{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 错误提示 */}
      {showError && (
        <div className="kid-slide-up" style={{
          background: 'var(--kid-red-50)',
          border: '1.5px solid var(--kid-red-100)',
          borderRadius: 16,
          padding: '14px 18px',
          display: 'flex', alignItems: 'flex-start', gap: 12,
        }}>
          <span style={{ fontSize: 22 }}>⚠️</span>
          <div>
            <p style={{ fontWeight: 800, fontSize: 16, color: 'var(--kid-red-500)', marginBottom: 3 }}>
              回答错误！请重新选择正确答案。
            </p>
            <p style={{ fontSize: 14, color: 'var(--kid-red-300)' }}>
              错误次数：{errorCount}次 · 必须答对才能进入下一题
            </p>
          </div>
        </div>
      )}

      {/* 正确解析 */}
      {isAnswered && isCorrect && (
        <div className="kid-slide-up" style={{
          background: 'var(--kid-green-50)',
          border: '1.5px solid var(--kid-green-100)',
          borderRadius: 16,
          padding: '14px 18px',
          display: 'flex', alignItems: 'flex-start', gap: 12,
        }}>
          <span style={{ fontSize: 22 }}>✅</span>
          <div>
            <p style={{ fontWeight: 800, fontSize: 16, color: 'var(--kid-green-500)', marginBottom: 4 }}>
              回答正确！
            </p>
            <p style={{ fontSize: 15, color: 'var(--kid-gray-600)', lineHeight: 1.75 }}>
              {currentQuestion.explanation}
            </p>
          </div>
        </div>
      )}

      {/* 操作按钮 */}
      <div>
        {!isAnswered ? (
          <button
            onClick={handleConfirm}
            disabled={!selectedOption}
            className="kid-btn kid-btn-primary"
            style={{ width: '100%' }}
          >
            确认答案
          </button>
        ) : !isCorrect ? (
          <button
            onClick={handleRetry}
            className="kid-btn"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, var(--kid-red-300), var(--kid-red-500))',
              color: '#fff',
              fontSize: 17, fontWeight: 700,
              padding: '14px',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 4px 14px rgba(224,80,80,0.28)',
            }}
          >
            重新作答
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="kid-btn kid-btn-green"
            style={{ width: '100%' }}
          >
            {currentQ < quiz.length - 1 ? '下一题 →' : '完成答题 🎉'}
          </button>
        )}
      </div>
    </div>
  );
}
