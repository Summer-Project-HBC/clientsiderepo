import React, { useState } from 'react';
import './FrequentQuestions.css';

const FrequentQuestions = () => {
  const [answer, setAnswer] = useState({});


  const answerHandler = (question) => {
    setAnswer(prevAnswer => ({
      ...prevAnswer,
      [question]: !prevAnswer[question],
    }));
  }

  return (
    <div className='faq_container'>
      <div className='faq'>
        <h3>How to get there? <span onClick={() => answerHandler('How to get there?')}>🔽</span></h3>
        {answer['How to get there?'] && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)}
      </div>
      <div className='faq'>
        <h3> What if I register and do not show up? <span onClick={() => answerHandler('What if I register and do not show up?')}>🔽</span></h3>
        {answer['What if I register and do not show up?'] && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)}
      </div>
      <div className='faq'>
        <h3>Is the event free? <span onClick={() => answerHandler('Is the event free?')}>🔽</span></h3>
        {answer['Is the event free?'] && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)}
      </div>
      <div className='faq'>
        <h3>Is it possible to attend only some parts of event? <span onClick={() => answerHandler('Is it possible to attend only some parts of event?')}>🔽</span></h3>
        {answer['Is it possible to attend only some parts of event?'] && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)}
      </div>
      <div className='faq'>
        <h3>Is the event in English? <span onClick={() => answerHandler('Is the event in English?')}>🔽</span></h3>
        {answer['Is the event in English?'] && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)}
      </div>
      <div className='faq'>
        <h3>What documents do you require to attend the event? <span onClick={() => answerHandler('What documents do you require to attend the event? ')}>🔽</span></h3>
        {answer['What documents do you require to attend the event? '] && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)}
      </div>
      <div className='faq'>
        <h3>what do you recommend to do in Helsinki? <span onClick={() => answerHandler('what do you recommend to do in Helsinki?')}>🔽</span></h3>
        {answer['what do you recommend to do in Helsinki?'] && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)}
      </div>
    </div>
  );
};

export default FrequentQuestions;