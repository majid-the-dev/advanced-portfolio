"use client"

import Link from "next/link";
import Home from "../icons/Home";
import Post from "../icons/Post";
import Category from "../icons/Category";
import Logout from "../icons/Logout";
import { usePathname } from 'next/navigation';

const Sidebar = ({ isSidebar }) => {

    const path = usePathname();

    return (
        <div className="sidebar">
            <div className="flex flex-col gap-4 w-full px-3 text-sm">
                <Link href={'/admin'} className={path === '/admin' ? 'sidebar-menu-active' : 'sidebar-menu'}>
                    <span><Home className="w-5 h-5" /></span>
                    <span>Dashboard</span>
                </Link>
                <Link href={'/admin/posts'} className={path.includes('/admin/posts') ? 'sidebar-menu-active' : 'sidebar-menu'}>
                    <span><Post className="w-5 h-5" /></span>
                    <span>Posts</span>
                </Link>
                <Link href={'/admin/category'} className={path === '/admin/category' ? 'sidebar-menu-active' : 'sidebar-menu'}>
                    <span><Category className="w-5 h-5" /></span>
                    <span>Category</span>
                </Link>
                <button type="button" className='sidebar-menu'>
                    <span><Logout className="w-5 h-5" /></span>
                    <span>Log out</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar;