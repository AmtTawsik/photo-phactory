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
          <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-fuchsia-800 font-medium">
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
                  <p className="text-fuchsia-800">
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
          q: "What is Photo Phactory?",
          a: "Every romantic notion I’ve ever conjured up for a modern yet timeless sun-drenched wedding album is perfectly encapsulated in every image Jen Huang creates — from delicate details and décor to tantalizing food shots and couture-clad, gorgeous brides, Jen’s images have it all, and then some"
      },
      {
          q: "What dose Photo Phactory do?",
          a: "I approach photography with a romantic, fine art sensibility. My imagery is understated yet evocative, resulting from clear and polished creative direction that elicits light-filled, painterly portraits. "
      },
      {
          q: "What is Architectural Photography?",
          a: "Architectural photography is the sub genre of the photography discipline where the primary emphasis is made to capturing photographs of buildings and similar architectural structures that are both aesthetically pleasing and accurate in terms of representations of their subjects."
      },
      {
          q: "What is Sports Photography?",
          a: "Sports photography is a type of photography that covers every sport and sporting event, capturing the action of a game and behind the scenes of the players."
      },
      {
          q: "What is Birthday Photography?",
          a: "Birthday photography is a very complex type of shooting, requiring a lot of patience and good communication skills"
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
