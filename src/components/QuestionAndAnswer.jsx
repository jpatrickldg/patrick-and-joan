import { qna } from "../data";

const QuestionAndAnswer = () => {
  return (
    <section
      id="q-n-a"
      className="p-4 xl:px-40 xl:py-10 min-h-screen bg-motif-grey text-brown flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        Question and Answer
      </h2>
      <div className="flex-1 flex flex-wrap gap-4 mt-4">
        {qna.map((q) => (
          <div
            key={q.id}
            className="down-up-50 xl:max-w-lg bg-motif-peach p-3 rounded-md hover:bg-motif-peach/70 transition-colors ease-in duration-150"
          >
            <h4 className="font-bold font-libre">{q.question}</h4>
            <p className="mt-2">{q.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default QuestionAndAnswer;
