import { useSelector, useDispatch } from 'react-redux'

import React from 'react'

//NOTE:THIS PAGE IS "WORKING" AND CAN BE USED IT
export default function Bookmarks2() {
  const bookmarks = useSelector((state) => state.bookmark?.bookmarks)
  console.log(bookmarks?.length)

  function bookmarksDoesNotWorkOrNotExits() {
    return !bookmarks || bookmarks?.length == 0
  }

  if (bookmarksDoesNotWorkOrNotExits) {
    return (
      <div>
        <p>no bookmarks. please add some yourself.</p>
      </div>
    )
  }
  return (
    <div>
      {bookmarks.map((bookmark) => {
        return <p>{bookmark}</p>
      })}
      <h1>Bookmarks Articles</h1>
    </div>
  )
}
