"use client"

import PostForm from "@/components/Admin/PostForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const NewPostPage = () => {

    const [postCreated, setPostCreated] = useState(false);
    const router = useRouter();

    if (postCreated) {
        router.push('/admin/posts')
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">New Post</h1>
            <p className="">Here you can create new blog posts!</p>

            <PostForm 
                postCreated={postCreated}
                setPostCreated={setPostCreated}
            />
            
        </div>
    )
}

export default NewPostPage;