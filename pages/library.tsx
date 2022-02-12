import React from 'react'
import Library from '../components/Library'

type Props = {}

const library = (props: Props) => {
  return (
    <div className="h-full p-4 overflow-x-hidden">
      <Library />
    </div>
  )
}

export default library
