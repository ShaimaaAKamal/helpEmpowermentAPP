export interface Certification {
  oid?: string,
  courseCode: string,
  courseName: string,
  courseDescription: string,
  courseLevelLookupId: string
  courseCategoryLookupId: string
  createdBy: string
}

export interface APICertification {
  courseLevelName: string,
  courseCategoryName: string,
  isActive: true,
  courseCode: string,
  courseName: string,
  courseDescription: string,
  courseLevelLookupId: string
  courseCategoryLookupId: string
  createdBy: string
  createdAt: string,
  updatedAt: string,
  updatedBy: string
}

export interface courseExam {
  courseOid: string,
  courseName: string,
  courseLevelLookupId: string,
  courseCategoryLookupId: string,
  isActive: boolean,
  createdBy: string
}

export interface courseQuestion {
  coursesMasterExamOid: string,
  questionText: string,
  questionTypeLookupId: string,
  questionScore: number,
  orderNo: number,
  isActive: boolean,
  correctAnswer: boolean,
  question: boolean,
  correctChoiceOid: string,
  createdBy:string,
  answers: [
    {
      answerText: string,
      isCorrect: boolean,
      orderNo: number,
      createdBy:string
    }
  ]
}
