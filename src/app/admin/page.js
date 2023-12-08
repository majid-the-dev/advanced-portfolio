"use client"

import AdminBlogCard from "@/components/Admin/AdminBlogCard";
import AdminCategoryCard from "@/components/Admin/AdminCategoryCard";
import AdminHeader from "@/components/Admin/AdminHeader";
import Category from "@/components/icons/Category";
import Home from "@/components/icons/Home";
import Logout from "@/components/icons/Logout";
import Post from "@/components/icons/Post";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "@/components/Admin/Sidebar";

const AdminPage = () => {

    const [isLogout, setIsLogout] = useState(false);
    const [isSidebar, setIsSidebar] = useState(true);



    return (
        <main>

            <div>

                {/* <AdminHeader
                    isSidebar={isSidebar}
                    setIsSidebar={setIsSidebar}
                    isLogout={isLogout}
                    setIsLogout={setIsLogout}
                /> */}

                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="">Welcome to the admin dashboard!</p>

                <div className="grid grid-cols-3 gap-10 mt-8">
                    <div className="col-span-2">
                        <h1 className="font-bold">Recent posts</h1>
                        <div className="flex flex-wrap mt-6 gap-6">
                            <AdminBlogCard />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h1 className="font-bold">Recent Categories</h1>
                        <div className="flex flex-col gap-6 mt-6">
                            <AdminCategoryCard />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminPage;