import React from 'react'
// import ItemsContainer from './ItemsContainer'

const sections =[
  {
    title:'Genres',
    items:['Ambient', 'Study', 'Jazz', 'Classical']
  },
  {
    title:'Helpful Links',
    items:[
    'Gryffindor Pomodoro Study Session 25/5',
    'Ravenclaw Pomodoro Study Session 25/5', 
    'Hufflepuff Pomodoro Study Session 25/5', 
    'Slytherin Pomodoro Study Session 25/5']
  },
  {
    title:'Meet The Team',
    items:['Karina Nova', 'Wick Hill', 'David Lesesne', 'Digital Dragons']
  },
]

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 border-b-2 border-gray-600 py-8">
          {
            sections.map((section,index) => (
              <div key={index}>
                <h6 className="font-bold uppercase pt-2">
                  {section.title}
                </h6>
                <ul>
                  {section.items.map((item,i) => (
                    <li key={i}
                        className="py-1 text-gray-500 hover:text-teal-700 cursor-pointer">
                          {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }

          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">
              About Our Team
            </p>
            <p className="font-bold">
              We are the Digital Dragons. Checkout our awesome app and stay tuned for future endeavors!
            </p>
          </div>
      </div>
    </footer>
  )
}

export default Footer