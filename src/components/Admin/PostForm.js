"use client"

import { useEffect, useState } from "react";
import Upload from "../icons/Upload";
import Link from "next/link";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

const PostForm = ({ postCreated, setPostCreated, post }) => {

    const [heading, setHeading] = useState(post?.heading || '');
    const [content, setContent] = useState(post?.content || '');
    const [category, setCategory] = useState(post?.category || '');
    const [image, setImage] = useState(post?.image || '');
    const [categories, setCategories] = useState([]);
    const path = usePathname();
    const router = useRouter();

    useEffect(() => {
        fetch('/api/category').then(response => {
            response.json().then(data => setCategories(data))
        });
    }, []);

    const handleImage = async (e) => {
        const files = e.target.files;
        if (files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);
            const imagePromise = new Promise(async (resolve, reject) => {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: data
                });
                if (response.ok) {
                    const url = await response.json();
                    setImage(url);
                    resolve();
                } else {
                    reject();
                }
            });
            await toast.promise(imagePromise, {
                loading: 'Uploading image',
                success:'Image uploaded successfully',
                error: 'Error uploading image'
            })
        }
    }

    const handleSave = async (e) => {
        e.preventDefault();
        const PostPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ heading, content, category, image })
            });
            if (response.ok) {
                resolve();
            } else {
                reject();
            };
        });
        setPostCreated(true);
        await toast.promise(PostPromise, {
            loading:'Creating post...',
            success:"Successfully created post!",
            error:"Failed to create post!"
        });
        // router.push('/admin/posts')
    };

    const handleEdit = async () => {
        const EditPromise = new Promise(async (resolve, reject) => {
            const data = { heading, content, category, image}
            const editedData = {...data, id:post._id}
            console.log(editedData);
            const response = await fetch('/api/posts', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedData)
            });
            if (response.ok) {
                resolve();
            } else {
                reject();
            };
        });

        await toast.promise(EditPromise, {
            loading:'Updating post...',
            success:"Successfully updated post!",
            error:"Error updating post!"
        });

        router.push('/admin/posts');
    }

    return (
        <form className="max-w-lg flex flex-col gap-5 mt-6" onSubmit={handleSave}>
            <div className="flex flex-col">
                <label className="admin-input-label">Heading</label>
                <input type="text" className="admin-input" value={heading} onChange={e => setHeading(e.target.value)} />
            </div>
            <div className="flex flex-col">
                <label className="admin-input-label">Content</label>
                <textarea rows="8" cols="20" className="admin-input" value={content} onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <div className="flex flex-col">
                <label className="admin-input-label">Select category</label>
                <select className="admin-input" value={category} onChange={e => setCategory(e.target.value)}>
                    <option>Select category</option>
                    {categories?.length > 0 && categories.map(c => (
                        <option value={c.name} key={c._id}>{c.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <p className="admin-input-label mb-2">Upload Image</p>
                <label className="inline-block cursor-pointer">
                    <input type="file" hidden onChange={handleImage} />
                    <div className="bg-primary text-gray-400 admin-input flex items-center justify-center h-36 w-36">
                        <Upload />
                    </div>
                </label>
            </div>
            <div className="flex gap-3 mt-4">
                {path.includes('edit') ? 
                    <button type="button" onClick={handleEdit} className="button-primary px-6 rounded-md">Update</button>
                    :
                    <button type="button" onClick={handleSave} className="button-primary px-6 rounded-md">Create</button>
                }
                <Link href={'/admin/posts'} className="flex items-center bg-primary border border-gray-400 rounded-md px-6">Cancel</Link>
            </div>
        </form>
    )
}

export default PostForm