"use client"

import PostForm from "@/components/Admin/PostForm"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

const EditPostPage = () => {

  const [post, setPost] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetch('/api/posts').then(response => {
      response.json().then(posts => {
        const post = posts.find(i => i._id === id)
        setPost(post);
      })
    })
  }, [id]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Edit Post</h1>
      <p className="">Here you can edit blog posts!</p>
      {post && 
      <PostForm 
        post={post} 
      />
      }
    </div>
  )
}

export default EditPostPage