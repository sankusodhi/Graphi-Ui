"use client";

import React, { useState } from "react";

const Feedback = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "Question", answer: "Answer" },
    { id: 2, question: "Question", answer: "Answer" },
    { id: 3, question: "Question", answer: "Answer" },
    { id: 4, question: "Question", answer: "Answer" },
    { id: 5, question: "Question", answer: "Answer" },
  ]);

  // Add a new question
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        question: "New Question",
        answer: "New Answer",
      },
    ]);
  };

  // Remove a question
  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <section className="py-12 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">Resolve your Doubts here.</h2>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#0e0e29] mb-1">
                {q.id}. {q.question}
              </h3>
              <p className="text-gray-500">{q.answer}</p>
            </div>
            <button
              onClick={() => handleRemoveQuestion(q.id)}
              className="text-blue-600 text-xl font-bold hover:text-blue-800"
            >
              ✕
            </button>
          </div>
        ))}

        {/* Add Question */}
        <button
          onClick={handleAddQuestion}
          className="flex items-center justify-center w-full text-blue-600 text-xl font-bold hover:text-blue-800 mt-6"
        >
          <span className="rounded-full border border-blue-600 p-2">+</span>
        </button>
      </div>
    </section>
  );
};

export default Feedback;

