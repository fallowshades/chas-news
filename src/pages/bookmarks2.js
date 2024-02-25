import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from '@/components/NewsCard'

import { v4 as uuidv4 } from 'uuid'

const Bookmarks2 = () => {
  const bookmarks = useSelector((state) => state.bookmark?.bookmarks)

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <div>
        <p>No bookmarks. Please add some yourself.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Render your bookmarks here */}
      {bookmarks.map((bookmark) => (
        <NewsCard key={uuidv4()} newsItem={bookmark} />
      ))}
    </div>
  )
}

export default Bookmarks2
