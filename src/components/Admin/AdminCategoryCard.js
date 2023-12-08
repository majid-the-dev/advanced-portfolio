"use client"

import Link from "next/link";
import Edit from "../icons/Edit";
import Trash from "../icons/Trash";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";

const AdminCategoryCard = ({ setName, setEditCategory }) => {

    const [categories, setCategories] = useState([]);
    const path = usePathname();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch('/api/category').then(response => {
            response.json().then(data => setCategories(data));
        })
    };
    

    const handleDeleteCategory = async (_id) => {
        const deleteCategoryPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/category?_id=' + _id, {
                method: 'DELETE'
            });
            fetchCategories();

            if (response.ok) {
                resolve();
            } else {
                reject();
            }

            await toast.promise(deleteCategoryPromise, {
                loading: 'Deleting Category...',
                success: 'Category deleted successfully!',
                error: 'Error deleting category!'
            });


        });
    };

    return (
        <>
            {categories?.length > 0 ?
                categories.map(category => (
                    <div className="bg-primary flex items-center justify-between px-5 py-2 rounded-full">
                        <h1 className="">{category.name}</h1>
                        <div className="flex gap-2">
                            {path !== '/admin' &&
                            <button type="button" onClick={() => { setEditCategory(category); setName(category.name) }} className="hover:bg-blue-400/25 text-gray-500 p-2 rounded-full transition-all">
                                <Edit className="w-4 h-4" />
                            </button>
                            }
                            <button type="button" onClick={() => handleDeleteCategory(category._id)} className="hover:bg-red-400/25 text-gray-500 p-2 rounded-full transition-all">
                                <Trash className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))
                :
                <h1>No categories yet!</h1>
            }
        </>
    )
}

export default AdminCategoryCard;