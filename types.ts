
export type Role = 'student' | 'professor';

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  isInitial?: boolean;
}

export interface StudentAnalysis {
  studentName: string;
  speakingTime: string;
  contributionSummary: string;
  engagementLevel: 'High' | 'Medium' | 'Low';
  keyMoments: {
    timestamp: string;
    quote: string;
  }[];
}
