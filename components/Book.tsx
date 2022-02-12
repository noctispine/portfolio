import React from 'react'
import { BookInterface } from '../type'
import { AiFillProject } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import Image from 'next/image'
import { motion } from 'framer-motion'
import variants from '../styles/animation'

type Props = {
  content: BookInterface
}

const Book = (props: Props) => {
  const book: BookInterface = props.content

  return (
    <motion.div
      variants={variants.fadeInLonger}
      initial="initial"
      animate="animate"
      className="relative flex flex-col justify-center p-5 md:static rounded-2xl bg-gray-banner"
    >
      <Image
        src={book.image}
        alt={book.title}
        className="my-auto rounded-xl h-52 "
        width="70"
        height="70"
        layout="responsive"
        quality="100"
      />
      <p className="mt-3 text-lg text-white-button text-opacity-80 ">
        {book.title}
      </p>

      <div className="flex flex-col justify-end flex-grow">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white-button text-opacity-60">
            {book.author[0]}
          </p>

          <a href={book.url} target="_blank" rel="noreferrer" className="p-2 mr-3">
            <BiLinkExternal className="w-8 h-8" opacity={0.67} color="white" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Book
