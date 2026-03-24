import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Questions = () => {

  const [question, setQuestion] = useState([]);
  const [another, setAnother] = useState(false);

  const [answersState, setAnswersState] = useState({});

  useEffect(() => {
    const getQuestion = async () => {
      const res = await axios.get("https://islamicquiz.i8x.net/api/questions/random?count=5");
      setQuestion(res.data);
      setAnswersState({}); 
    };

    getQuestion();
  }, [another]);

  const handleAnswer = (qIndex, ans) => {
    setAnswersState(prev => ({
      ...prev,
      [qIndex]: {
        selected: ans,
        right: ans.t === 1
      }
    }));
  };

  console.log(answersState);

  return (
    <div className='space-y-5 pad text-center'>

      {question.map((q, qIndex) => {
        const current = answersState[qIndex];
        console.log(current);

        return (
          <div key={qIndex} className='space-x-3 pad border border-indigo-500 rounded-lg p-3 bg-indigo-100  text-white cursor-pointer font-cairo text-ayahs overflow-hidden'>

            <span className='btn !bg-slate-600 inline-block'>{q.category}</span>
            <span className='hidden sm:inline-block text-black'>&gt;</span>
            <span className='btn !bg-slate-600 inline-block'>{q.topic}</span>

            <div className='mt-5'>
              <div className='btn !bg-slate-600 mb-10'>
                <span>{q.q}</span>
              </div>

              <div className='space-y-10 text-center'>

                {q.answers.map((ans, index) => (
                  <div key={index} className='transition-transform hover:scale-110'>
                    <span
                      className={`btn-nav inline-block  ${
                        current
                          ? ans.t === 1
                            ? "!bg-green-500  opacity-70"
                            : current.selected === ans
                            ? "!bg-red-500  opacity-70"
                            : ""
                          : ""
                      }`}
                      onClick={() => !current && handleAnswer(qIndex, ans)}
                    >
                      {index + 1}. {ans.answer}
                    </span>
                  </div>
                ))}

                <div className='mb-5'>
                  {current && (
                    <span className='btn !bg-slate-600'>
                      {current.right ? "إجابة صحيحة" : "إجابة خاطئة"}
                    </span>
                  )}
                </div>

              </div>
            </div>

          </div>
        );
      })}

      
      <div className="text-center mt-10">
        <button
          onClick={() => setAnother(prev => !prev)}
          className="btn text-white"
        >
          أسئلة جديدة
        </button>
      </div>

    </div>
  );
};

export default Questions;