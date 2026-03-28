import QuestionsForm from '@/components/forms/QuestionsForm'
import React from 'react'

const AskQuestion = () => {
  return (
   <>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <QuestionsForm />
      </div>
    </>
  )
}

export default AskQuestion