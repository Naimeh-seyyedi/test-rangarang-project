import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questionsAndAnswers } from "@/types/questions";
import { QuestionsProps } from "./../../types/questions";
import SectionHeader from "../sectionHeader";
import { Button } from "../ui/button";

export default function AccordionSection() {
  return (
    <div dir="rtl" className="lg:mx-[100px] px-4">
      <div className="flex justify-between pt-4"><SectionHeader title="سوالات متداول" />
      <Button variant="ghost">
        <span>همه سوالات</span>
        <i className="fa-solid fa-chevron-left"></i>
      </Button></div>
      <Accordion type="single" collapsible className="flex flex-col-reverse ">
        {questionsAndAnswers.map((question: QuestionsProps) => {
          return (
            <AccordionItem value={`item-${question.id}`} key={question.id}>
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
