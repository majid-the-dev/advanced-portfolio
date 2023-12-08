"use client"

import Image from "next/image";
import Edit from "../icons/Edit";
import Trash from "../icons/Trash";
import { useEffect, useState } from "react";
import format from "date-fns/format";
import Link from "next/link";
import toast from "react-hot-toast";

const AdminBlogCard = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts').then(response => {
            response.json().then(data => setPosts(data))
        });
    })

    const convertDate = (date) => {
        date = new Date(date);
        const formattedDate = format(date, 'yyyy-MM-dd');
        return formattedDate;
    };

    const handleDeletePost = async (_id) => {
        const deletePostPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/posts?_id='+_id, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            });
            if (response.ok) {
                resolve();
            } else {
                reject();
            };

            await toast.promise(deletePostPromise, {
                loading: 'Deleting post...',
                success: 'Post deleted successfully',
                error: 'Error deleting post'
            });
        })
    }

    return (
        <>
        {posts?.length > 0 ?
            posts.map(post => (
                <div className="bg-primary flex w-full gap-3 rounded-md shadow-md p-4">
                    <div className="relative w-32 h-20">
                        <Image src={post.image} alt="post-image" layout={'fill'} objectFit={'cover'} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={'/admin/posts/'+post._id} className="font-bold hover:underline underline-offset-2 transition-all">{post.heading}</Link>
                        <p className="text-xs text-gray-500">{convertDate(post.createdAt)}</p>
                        <div className="flex gap-2">
                            <Link href={'/admin/posts/edit/'+post._id} className="flex gap-1 text-xs text-gray-500 hover:text-blue-400 transition-all">
                                <span><Edit className="w-4 h-4" /></span>
                                <span>Edit</span>
                            </Link>
                            <button type="button" onClick={() => handleDeletePost(post._id)} className="flex gap-1 text-xs text-gray-500 hover:text-red-400 transition-all">
                                <span><Trash className="w-4 h-4" /></span>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))
            :
            <h1>No posts</h1>
        }
        </>
    )
}

export default AdminBlogCard;