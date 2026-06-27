import { useCallback, useState } from 'react';
import {
  type LearningStorage,
  STORAGE_KEYS,
  createEmptyRecord,
  createEmptyStorage,
  type LessonRecord,
  type WrongAnswer,
} from '../data/storageSchema';

export function useStorage() {
  const [storage, setStorage] = useState<LearningStorage>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.LEARNING);
      if (raw) {
        return JSON.parse(raw) as LearningStorage;
      }
    } catch (e) {
      console.warn('Failed to load learning data:', e);
    }
    return createEmptyStorage();
  });

  // 保存到 localStorage
  const save = useCallback((data: LearningStorage) => {
    try {
      localStorage.setItem(STORAGE_KEYS.LEARNING, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save learning data:', e);
    }
  }, []);

  // 初始化/获取课程记录
  const getLessonRecord = useCallback((lessonId: number): LessonRecord => {
    if (!storage.lessons[lessonId]) {
      storage.lessons[lessonId] = createEmptyRecord(lessonId);
    }
    return storage.lessons[lessonId];
  }, [storage]);

  // 更新课程记录
  const updateLessonRecord = useCallback((lessonId: number, updates: Partial<LessonRecord>) => {
    setStorage(prev => {
      const updated = {
        ...prev,
        lastActiveAt: new Date().toISOString(),
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...getLessonRecord(lessonId),
            ...updates,
          },
        },
      };
      save(updated);
      return updated;
    });
  }, [storage, save, getLessonRecord]);

  // 保存答题结果
  const saveQuizResult = useCallback((
    lessonId: number,
    correct: number,
    total: number,
    timeSeconds: number,
    wrongAnswers: WrongAnswer[]
  ) => {
    const accuracy = Math.round((correct / total) * 100);
    const badgeType: 'gold' | 'silver' | 'bronze' =
      accuracy >= 90 ? 'gold' : accuracy >= 70 ? 'silver' : 'bronze';

    setStorage(prev => {
      const record = getLessonRecord(lessonId);
      const updated: LearningStorage = {
        ...prev,
        lastActiveAt: new Date().toISOString(),
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...record,
            quizCompleted: true,
            quizCorrect: correct,
            quizTotal: total,
            quizAccuracy: accuracy,
            quizTimeSeconds: timeSeconds,
            wrongAnswers: wrongAnswers,
            lastStudyTime: new Date().toISOString(),
          },
        },
      };

      // 检查是否需要添加勋章
      const existingBadge = prev.badges.find(b => b.lessonId === lessonId);
      if (!existingBadge && accuracy >= 70) {
        const medalEmoji = badgeType === 'gold' ? '🥇' : badgeType === 'silver' ? '🥈' : '🥉';
        updated.badges = [
          ...prev.badges,
          {
            id: `lesson_${lessonId}`,
            type: badgeType,
            name: `${medalEmoji} 第${lessonId}课勋章`,
            description: `完成第${lessonId}课学习，正确率${accuracy}%`,
            earnedAt: new Date().toISOString(),
            lessonId,
          },
        ];
      }

      save(updated);
      return updated;
    });
  }, [storage, save, getLessonRecord]);

  // 标记游戏完成
  const markGameCompleted = useCallback((lessonId: number) => {
    updateLessonRecord(lessonId, { gameCompleted: true });
  }, [updateLessonRecord]);

  // 更新视频进度
  const updateVideoProgress = useCallback((lessonId: number, videoKey: string, seconds: number) => {
    setStorage(prev => {
      const record = getLessonRecord(lessonId);
      const updated: LearningStorage = {
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...record,
            videoProgress: {
              ...record.videoProgress,
              [videoKey]: seconds,
            },
          },
        },
      };
      save(updated);
      return updated;
    });
  }, [storage, save, getLessonRecord]);

  // 标记课程完成
  const markLessonCompleted = useCallback((lessonId: number) => {
    updateLessonRecord(lessonId, { completed: true });
  }, [updateLessonRecord]);

  // 获取统计数据
  const getStats = useCallback(() => {
    const lessons = Object.values(storage.lessons);
    const completedCount = lessons.filter(l => l.completed).length;
    const quizCompletedCount = lessons.filter(l => l.quizCompleted).length;

    let totalCorrect = 0;
    let totalQuiz = 0;
    let totalErrors = 0;
    lessons.forEach(l => {
      totalCorrect += l.quizCorrect;
      totalQuiz += l.quizTotal;
      totalErrors += l.wrongAnswers.length;
    });

    const avgAccuracy = totalQuiz > 0 ? Math.round((totalCorrect / totalQuiz) * 100) : 0;

    return {
      completedCount,
      quizCompletedCount,
      totalLessons: 32,
      totalCorrect,
      totalQuiz,
      avgAccuracy,
      totalErrors,
      totalBadges: storage.badges.length,
      totalStudySeconds: storage.totalStudySeconds,
    };
  }, [storage]);

  // 清除所有数据
  const clearAllData = useCallback(() => {
    const empty = createEmptyStorage();
    setStorage(empty);
    save(empty);
  }, [save]);

  return {
    storage,
    getLessonRecord,
    updateLessonRecord,
    saveQuizResult,
    markGameCompleted,
    updateVideoProgress,
    markLessonCompleted,
    getStats,
    clearAllData,
  };
}
