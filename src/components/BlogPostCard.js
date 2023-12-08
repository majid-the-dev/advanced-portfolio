"use client"

import Image from "next/image"
import Link from "next/link"
import ExternalLink from "./icons/ExternalLink"
import { useEffect, useState } from "react"
import { format } from "date-fns"

const BlogPostCard = () => {

    const [post, setPost] = useState();

    useEffect(() => {
        fetch('api/posts').then(response => {
            response.json().then(p => setPost(p));
        })
    }, []);

    const convertDate = (date) => {
        date = new Date(date);
        const formattedDate = format(date, 'yyyy-MM-dd');
        return formattedDate;
    };

    return (
        <>
            {post?.length > 0 &&
                post.map(post => (
                    < div key={post._id} className="bg-primary w-full lg:max-w-xs rounded-md shadow-md px-5 py-5">
                        <div className="flex flex-wrap gap-y-3 gap-x-2">
                            <div className="inline-flex items-center px-3 py-0.5 text-sm rounded-full bg-red-400/25 whitespace-nowrap">
                                {post.category}
                            </div>
                        </div>

                        <div className="relative h-40 mt-3">
                            <Image src={post.image} alt="project-image" className="rounded-md" layout={'fill'} objectFit={'cover'} />
                        </div>

                        <div className="flex items-center gap-2 mt-3">
                            {/* <Image src={'/avatar.jpeg'} alt='admin-image' className="rounded-full" width={20} height={20} />
                            <Link href={'/'} className="text-xs font-bold underline underline-offset-1">Admin</Link> */}
                            <p className="text-xs text-gray-500">{convertDate(post.createdAt)}</p>
                        </div>

                        <div className="flex gap-1 items-center mt-1">
                            <Link href={`/blog/${post._id}`} className="font-bold text-lg hover:underline underline-offset-2">{post.heading}</Link>
                            <ExternalLink className="w-3 h-3" />
                        </div>

                        <p className="text-sm text-gray-500 leading-6 line-clamp-4 mt-1">
                            {post.content}
                        </p>
                    </div >
                ))
            }
        </>
    )
}

export default BlogPostCard