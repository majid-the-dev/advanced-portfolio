"use client"

import LeftArrow from "@/components/icons/LeftArrow";
import Link from "next/link";
import { signIn } from 'next-auth/react'
import { useState } from "react";

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", { username, password, callbackUrl: '/blog' });
  }

  return (
    <section className="max-w-sm mx-auto h-screen flex flex-col justify-center gap-10 px-6">
      <div className="">
        <Link href={'/blog'} className="flex items-center gap-1">
          <LeftArrow className="w-5 h-5" />
          <span className="text-sm font-semibold">Back</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold">Welcome Back, Admin!</h1>

      <p className="font-semibold">Login to upload trending and up-to-date blog posts.</p>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-gray-400">Username</label>
          <input type="text" className="login-input" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-400">Password</label>
          <input type="password" className="login-input" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="button-primary rounded-md font-semibold mt-3">Login</button>
      </form>

    </section>
  )
}

export default LoginPage;