export interface MajorCredits {
  brand: 'Major';
  credits: number;
}

export interface MinorCredits {
  brand: 'Minor';
  credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { brand: 'Major', credits: totalCredits };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { brand: 'Minor', credits: totalCredits };
}
