export type ElectionYear = 1920 | 1946 | 1990;

export type UserAnswerValue = 1 | 0 | -1;

export interface Question {
  id: number;
  category: string;
  statement: string;
  historicalNote: string;
  partyStances: Record<string, UserAnswerValue>;
}

export interface Party {
  id: string;
  shortName: string;
  fullName: string;
  ideology: string;
  leaders: string[];
  color: string;
  historicalPercentage: number;
  historicalSeats: number;
  description: string;
  programHighlight: string;
  wikipediaUrl?: string;
}

export interface ElectionMeta {
  year: ElectionYear;
  title: string;
  subtitle: string;
  date: string;
  turnout: string;
  historicalContext: string;
  stakes: string;
  atmosphereQuote: string;
  outcomeSummary: string;
  parties: Party[];
  questions: Question[];
}

export interface PartyScore {
  party: Party;
  matchPercentage: number;
  agreeCount: number;
  disagreeCount: number;
  neutralCount: number;
}

export interface FirebaseStats {
  totalVisitors: number;
  resultsByYear: {
    1920: Record<string, number>;
    1946: Record<string, number>;
    1990: Record<string, number>;
  };
  totalSubmissionsByYear: {
    1920: number;
    1946: number;
    1990: number;
  };
}
