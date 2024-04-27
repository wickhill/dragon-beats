import React from 'react';

const sections = [
  {
    title: 'Helpful Links',
    items: [
      { name: 'Gryffindor Pomodoro Study Session 25/5', link: 'https://www.youtube.com/watch?v=L1c_UeR6kkk' },
      { name: 'Ravenclaw Pomodoro Study Session 25/5', link: 'https://www.youtube.com/watch?v=SkmH9CsMqOo' },
      { name: 'Hufflepuff Pomodoro Study Session 25/5', link: 'https://www.youtube.com/watch?v=oQKfs1kdSqc' },
      { name: 'Slytherin Pomodoro Study Session 25/5', link: 'https://www.youtube.com/watch?v=bq4LPGDs4MY' },
    ]
  },
  {
    title: 'Meet The Team',
    items: [
      { name: 'Karina Nova', link: 'https://github.com/kbmelody8' },
      { name: 'Wick Hill', link: 'https://github.com/wickhill' },
      { name: 'David Lesesne', link: 'https://github.com/dlesesne23' },
      { name: 'Digital Dragons', link: 'https://github.com/wickhill/dragon-beats' },
    ]
  },
]

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 border-b-2 border-gray-600 py-8">
        {
          sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">
                {section.title}
              </h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} className="py-1 text-gray-500 hover:text-teal-700 cursor-pointer">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
<div className="col-span-2 md:col-span-3 pt-8 md:pt-2">
          <p className="font-bold uppercase text-lg">
            About Our Team
          </p>
          <p className="py-2">
            We are the Digital Dragons. Check out our awesome app and stay tuned for future endeavors!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;