import React from 'react'

function Input({handleChangePost}) {
  return <input type="text" onChange={(e)=>handleChangePost(e)} />
}

export default Input