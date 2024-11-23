export interface QuestionsProps {
  id: number;
  question: string;
  answer: string;
}
export const questionsAndAnswers: QuestionsProps[] = [
  { id: 1, question: "تعریف مشتری در ای سیتم چیست", answer: "پاسخ شماره 1" },
  { id: 2, question: "چه نوع خدماتی در این سایت ارائه می شود", answer: "پاسخ شماره 2" },
  { id: 3, question: "در چه صورت حساب کاربری من شامل تخفیف می شود؟", answer: "پاسخ شماره 3" },
  { id: 4, question: "برای استفاده از خدمات باید حتما عضو شد", answer: "پاسخ شماره 4" },
];
