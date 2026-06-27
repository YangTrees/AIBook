// 学习数据持久化 Schema

export interface WrongAnswer {
  questionIndex: number;
  question: string;
  selectedKey: string;
  correctKey: string;
  lessonId?: number;
  timestamp?: string;
}

export interface EarnedBadge {
  id: string;
  type: 'gold' | 'silver' | 'bronze' | 'special';
  name: string;
  description: string;
  earnedAt: string;
  lessonId?: number;
}

export interface LessonRecord {
  lessonId: number;
  completed: boolean;
  videoProgress: Record<string, number>; // videoKey -> 秒数
  quizCompleted: boolean;
  quizCorrect: number;
  quizTotal: number;
  quizAccuracy: number;
  quizTimeSeconds: number;
  wrongAnswers: WrongAnswer[];
  gameCompleted: boolean;
  lastStudyTime: string;
  totalStudySeconds: number;
}

export interface LearningStorage {
  version: number;
  createdAt: string;
  lastActiveAt: string;
  lessons: Record<number, LessonRecord>;
  badges: EarnedBadge[];
  totalStudySeconds: number;
  videoWatchSeconds: number;
}

export const STORAGE_KEYS = {
  LEARNING: 'ai_book_learning_data',
} as const;

export const CURRENT_VERSION = 1;

export function createEmptyRecord(lessonId: number): LessonRecord {
  return {
    lessonId,
    completed: false,
    videoProgress: {},
    quizCompleted: false,
    quizCorrect: 0,
    quizTotal: 0,
    quizAccuracy: 0,
    quizTimeSeconds: 0,
    wrongAnswers: [],
    gameCompleted: false,
    lastStudyTime: new Date().toISOString(),
    totalStudySeconds: 0,
  };
}

export function createEmptyStorage(): LearningStorage {
  const now = new Date().toISOString();
  return {
    version: CURRENT_VERSION,
    createdAt: now,
    lastActiveAt: now,
    lessons: {},
    badges: [],
    totalStudySeconds: 0,
    videoWatchSeconds: 0,
  };
}
