import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions)=> setQuestions(questions))
  }, [])

  function addQuestion (newQuestion){
    const updatedQuestions = [...questions, newQuestion]
    setQuestions(updatedQuestions)
  }

function deleteQuestion (id){
  const updatedQuestions = questions.filter(question => question.id !==id)
  setQuestions(updatedQuestions)
    }
function updateQuestions (id, correctIndex){
  const updatedQuestions = questions.map(question => {
    if(question.id===id){
      return {...question, correctIndex}
    } else {
      return question
    }
  })
  setQuestions(updatedQuestions)
}
  


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} updateQuestions={updateQuestions}/>}
    </main>
  );
}

export default App;
