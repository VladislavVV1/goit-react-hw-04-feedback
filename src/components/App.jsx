import { useState } from "react";
import { Statistics } from "./Statistics/statistics";
import { FeedbackOptions } from "./FeedbackOptions/feedbackOptions";
import { Section } from "./Section/section";



import React from 'react'

export const App = () => {
  const [options, setOptions] = useState({good: 0,
    neutral: 0,
    bad: 0}
  )

  const handleFeedbackButtonClick = ({target}) => {
    setOptions(prevState => ({
     ...prevState, [target.name]: prevState[target.name] + 1,
    }))
  }

  
  const countTotalFeedback = () => {
    const {good, bad, neutral} = options
    return good + bad + neutral;
  }

  const countPositiveFeedbackPercentage = () => {
    if(countTotalFeedback()){
      return (options.good/countTotalFeedback()*100).toFixed()
    }
    return 0
  }
  
  return (
    <div>
       <Section title={'Please leave feedback'}>
         <FeedbackOptions options={options} onLeaveFeedback={handleFeedbackButtonClick}></FeedbackOptions>
       </Section>
      
       <Section title={'Statistics'}>
          <Statistics good={options.good} neutral={options.neutral} bad={options.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
      </Section>
   </div>
  )
}


