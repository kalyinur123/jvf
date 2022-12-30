import React, { useEffect, useState } from 'react'
import { getApi } from '../../api'
import Input from '../Inputs/Input'
import UserList from '../Inputs/userList'
import Post from '../post/Post'

function MainPage() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        getApi.get().then(resp=>setPost(resp.data))
    },[])

    const handleChangePost =(e)=>{
        if(post.length!==0){
            setPost(post.filter(item=>item.title.includes(e.target.value) || item.body.includes(e.target.value) ))
        }else{
            getApi.get().then(resp=>setPost(resp.data))
        }
    }


    const handleInp2=async(e)=>{
       await getApi.get().then(resp=>setPost(resp.data))
       await setPost(post=>post.filter((item)=>item.userId===Number(e.target.value)))       
    }
  return (
    <div>
        <Input handleChangePost={handleChangePost}/>

        <UserList handleChangePostId={handleInp2} />

        {post.map(item=><Post key={item.id} item={item}/>)}

    </div>
  )
}

export default MainPage