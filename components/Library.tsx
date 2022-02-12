import React from 'react'
import { books } from '../data'
import Book from './Book'
type Props = {}

const Library = () => {
  return (
    <div>
      <div className="relative grid grid-cols-2 gap-4 my-3 2xl:grid-cols-5 md:grid-cols-3">
        {books.map((book) => {
          return <Book key={book.title} content={book} />
        })}
      </div>
    </div>
  )
}

export default Library
