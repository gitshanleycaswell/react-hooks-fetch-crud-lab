import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, deleteQuestion, updateQuestions}) {



  const eachQuestion = questions.map((question)=>{
    return <QuestionItem key={question.id} question={question} deleteQuestion={deleteQuestion} updateQuestions={updateQuestions}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {eachQuestion}
      </ul>
    </section>
  );
}

export default QuestionList;
