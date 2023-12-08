"use client"

import Edit from "@/components/icons/Edit";
import ExternalLink from "@/components/icons/ExternalLink";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

const PostPage = () => {

    const [post, setPost] = useState(null);
    const [allPosts, setAllPosts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch('/api/posts').then(response => {
            response.json().then(data => {
                const p = data.find(i => i._id === id)
                setPost(p);
            });
        });
    }, []);

    useEffect(() => {
        fetch('/api/posts').then(response => {
            response.json().then(data => setAllPosts(data));
        });
    });

    const convertDate = (date) => {
        date = new Date(date);
        let formattedDate;
        if (date !== null) {
            formattedDate = format(date, 'yyyy-MM-dd');
        }
        return formattedDate;
    };

    return (
        <main className="mt-32 pb-10">
            {post &&
                <>
                    <div className="grid grid-cols-3">
                        <div className="col-span-2">
                            <div className="inline-flex items-center px-3 py-0.5 text-sm rounded-full bg-red-400/25 whitespace-nowrap mb-6">
                                {post?.category}
                            </div>
                            <h1 className="text-4xl font-bold leading-[42px]">{post.heading}</h1>
                            <p className="flex items-center text-sm text-gray-500 mt-3">
                                <span>
                                    <Edit className="w-4 h-4" />
                                </span>
                                Published on {convertDate(post.createdAt)} by&nbsp;<span className="font-bold text-black">Majid Oladepo</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-12">
                        <div className="col-span-2">
                            <div className="relative h-80 w-full rounded-md mt-10">
                                <Image src={post?.image} className="rounded-md" alt="post-image" layout={'fill'} objectFit={'cover'} />
                            </div>
                            <p className="leading-[35px] mt-8">
                                {post?.content}
                            </p>
                        </div>

                        <div className="col-span-1">
                            <div className="mt-6">
                                <h1 className="font-bold text-2xl py-2">Recent Posts</h1>
                                {allPosts?.length > 0 &&
                                    allPosts.map(posts => (
                                        <div className="px-3 py-2 flex flex-col gap-1 items-start justify-center bg-primary mb-3 rounded-md">
                                            <h1 className="font-semibold">
                                                <Link href={`/blog/${posts._id}`}>{posts.heading} </Link>
                                                <span><ExternalLink className="w-3 h-3" /></span>
                                            </h1>
                                            <div className="inline-flex items-center px-3 py-0.5 text-xs rounded-full bg-red-400/25 whitespace-nowrap">
                                                {posts.category}
                                            </div>
                                            <p className="text-gray-500 text-xs">{convertDate(posts.createdAt)}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </main>
    )
}

export default PostPage;