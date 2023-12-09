"use client"

import Image from "next/image"
import Close from "../icons/Close"
import Dark from "../icons/Dark"
import Menu from "../icons/Menu"
import Logout from "../icons/Logout"
import { useState } from "react"

const AdminHeader = () => {

    const [isLogout, setIsLogout] = useState(false);
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <div className="bg-primary px-3 py-3 flex items-center justify-between shadow-sm">
            <button type="button" className="bg-secondary text-gray-500 p-1 rounded-full" onClick={() => setIsSidebar(!isSidebar)}>
                {isSidebar ?
                    <Close className="w-5 h-5" />
                    :
                    <Menu className="w-5 h-5" />
                }
            </button>
            <div className="flex gap-6 items-center text-sm">
                <input type="text" placeholder="Search here..." className="bg-secondary border border-gray-300 shadow-sm px-3 py-2 w-64 rounded-full" />
                <button type="button" className="bg-secondary text-gray-400 p-1 rounded-full">
                    <Dark />
                </button>
                <button type="button" onClick={() => setIsLogout(!isLogout)} className="flex gap-2 items-center cursor-pointer relative">
                    Admin
                    <Image src={'/avatar.jpeg'} alt="admin-avatar" className="rounded-full" width={28} height={28} />
                    {isLogout &&
                        <button type="button" className="absolute flex items-center gap-2 bg-secondary shadow-md px-4 py-3 top-9 right-0">
                            <span><Logout className="w-5 h-5" /></span>
                            <span className="whitespace-nowrap">Log out</span>
                        </button>
                    }
                </button>
            </div>
        </div>
    )
}

export default AdminHeader