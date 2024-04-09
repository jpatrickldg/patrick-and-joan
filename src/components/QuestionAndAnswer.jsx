import { useState } from "react";
import { qna } from "../data";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const QuestionAndAnswer = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section
      id="q-n-a"
      className="px-4 py-10 xl:px-40 xl:py-20 min-h-screen bg-motif-grey text-brown flex flex-col gap-4 xl:gap-10 items-center justify-center"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        Q + A
      </h2>
      {/* <div className="flex-1 flex flex-wrap gap-4 mt-4">
        {qna.map((q) => (
          <div
            key={q.id}
            className="down-up-50 xl:max-w-lg bg-motif-peach p-3 rounded-md hover:bg-motif-peach/70 transition-colors ease-in duration-150"
          >
            <h4 className="font-bold font-libre">{q.question}</h4>
            <p className="mt-2">{q.answer}</p>
          </div>
        ))}
      </div> */}
      <div className="max-w-4xl">
        {qna.map((q, index) => (
          <Accordion open={open === index + 1}>
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="font-libre text-sm text-motif-brown"
            >
              {q.question}
            </AccordionHeader>
            <AccordionBody className="font-mont text-sm font-normal text-motif-brown">
              {q.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
export default QuestionAndAnswer;
