import heroImage from "../assets/images/Edited-19.jpg";
import { qna } from "../data";

const QuestionAndAnswer = () => {
  return (
    <section className="text-center p-4">
      <h1 className="text-2xl font-libre">Question and Answer</h1>
      <div className="mt-4">
        {qna.map((qna) => (
          <div key={qna.id} className="mt-8">
            <h3 className="capitalize text-xl font-libre">
              {qna.question.toLowerCase()}
            </h3>
            <p className="mt-2 font-mont">{qna.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default QuestionAndAnswer;
