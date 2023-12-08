"use client";

import AdminCategoryCard from "@/components/Admin/AdminCategoryCard";
import Edit from "@/components/icons/Edit";
import Trash from "@/components/icons/Trash";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CategoryPage = () => {

  const [name, setName] = useState('');
  const [editCategory, setEditCategory] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      setName('');
      // fetchCategories();
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    toast.promise(categoryPromise, {
      loading: 'Creating category...',
      success: 'Category created successfully!',
      error: 'Error creating category!'
    })
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    const data = { name };
    if (editCategory) {
      data._id = editCategory._id
    };
    const editCategoryPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/category', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(editCategoryPromise, {
      loading: 'Updating category...',
      success: 'Category updated successfully!',
      error: 'Error updating category!'
    });

    setName('');
    setEditCategory(null);
    // fetchCategories();
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold">Categories</h1>
      <p className="mt-2">Here you can manage your blog categories!</p>

      <form className="flex gap-3 mt-6" onSubmit={editCategory ? handleEditCategory : handleSubmit}>
        <input type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="bg-primary font-semibold border outline-none border-gray-400 px-3 py-2 w-full rounded-full"
        />
        <button type="submit" className="button-primary rounded-full px-7">
          {editCategory ? 'Update' : 'Create'}
        </button>
      </form>

      <div className="mt-8 flex flex-col gap-4">

        <AdminCategoryCard
          setName={setName}
          setEditCategory={setEditCategory}
        />

      </div>

    </div>
  )
}

export default CategoryPage;