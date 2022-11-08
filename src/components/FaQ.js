import React from "react";
import { useRef, useState } from "react"

const FaqsCard = (props) => {

  const answerElRef = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
      const answerElH = answerElRef.current.childNodes[0].offsetHeight
      setState(!state)
      setAnswerH(`${answerElH + 20}px`)
  }

  return (
      <div 
          className="space-y-3 mt-5 overflow-hidden border-b faq-sec"
          key={idx}
          onClick={handleOpenAnswer}
      >
          <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
              {faqsList.q}
              {
                  state ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                      </svg>
                  ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                  )
              }
          </h4>
          <div
              ref={answerElRef} className="duration-300"
              style={state ? {height: answerH } : {height: '0px'}}
          >
              <div>
                  <p className="text-white">
                      {faqsList.a}
                  </p>
              </div>
          </div>
      </div>
  )
}

const FaQ = () => {
    const faqsList = [
      {
          q: "What is HTML?",
          a: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
      },
      {
          q: "Do is CSS?",
          a: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML)"
      },
      {
          q: "What is js?",
          a: "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well."
      },
      {
          q: "What is Bootstrap?",
          a: "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs."
      },
      {
          q: "What is React?",
          a: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React."
      }
  ]

  return (
      <section className="leading-relaxed max-w-screen-xl mt-5 mx-auto px-4 lg:px-8">
          <div className="space-y-3 text-center">
              <h1 className="font-bold text-2xl md:text-5xl text-white">
                  Frequently Asked Questions
              </h1>
              <p className="text-gray-50 max-w-lg mx-auto text-lg">
                  Answered all frequently asked questions, Still confused? feel free to contact us.
              </p>
          </div>
          <div className="mt-14 max-w-2xl mx-auto">
              {
                  faqsList.map((item, idx) => (
                      <FaqsCard
                          key={idx}
                          faqsList={item}
                      />
                  ))
              }
          </div>
      </section>
  )
}

export default FaQ;
