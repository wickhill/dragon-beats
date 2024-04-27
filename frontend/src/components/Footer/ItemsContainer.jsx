import React from 'react'
import Item from './Item'
import { GENRES, RESOURCES, TEAM } from './Menus'

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links= {GENRES} title= "GENRES" />
        <Item Links= {RESOURCES} title= "RESOURCES" />
        <Item Links= {TEAM} title= "TEAM" />
        <Item Links />
    </div>
  )
}

export default ItemsContainer


