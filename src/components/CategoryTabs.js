"use client"

import Link from "next/link"
import RightArrow from "./icons/RightArrow"
import { useEffect, useState } from "react"

const CategoryTabs = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/category').then(response => {
            response.json().then(data => setCategories(data));
        })
    }, []);


    return (
        <div className="flex items-center gap-4 text-sm">
            <button type="button" className="category-tab">All</button>
            <div className="flex items-center gap-4 text-sm">
                {categories?.length > 0 ?
                    categories.map(category => (
                        <button key={category._id} type="button" className="category-tab">{category.name}</button>
                    ))
                    :
                    <h1>No categories yet!</h1>
                }
            </div>
        </div>
    )
}

export default CategoryTabs