import React from 'react'

function Post({item}) {
  return (
    <div>
        <h2>UserId: {item.userId}</h2>
        <h2>Title: {item.title}</h2>
        <h2>Body: {item.body}</h2>
    </div>
  )
}

export default Post