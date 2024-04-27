import React from 'react'

const Item = ({Links,title}) => {
  return (
    <ul> 
      <h1 className="mb font-semibold">{title}</h1>
      {
        Links.map((link) => {
          return (
            <li key={link.name}>
              <a className="text-gray-400 hover:text-teal-700" href={link.link}></a>
            </li>
          )
        })
      }  
    </ul>
  )
}

export default Item
