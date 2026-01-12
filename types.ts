
export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  quizzes: Quiz[];
  category: string;
}

export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  quizScores: Record<number, number>;
}
