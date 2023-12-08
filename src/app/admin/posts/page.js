import AdminBlogCard from "@/components/Admin/AdminBlogCard";
import Plus from "@/components/icons/Plus";
import Link from "next/link";

const PostsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span>
          <h1 className="text-3xl font-bold">Posts</h1>
          <p className="">Here you can manage your blog posts!</p>
        </span>
        <Link href={'/admin/posts/new'} className="inline-flex items-center gap-2 button-primary px-5 rounded-md">
          <span>New Post</span>
          <span><Plus className="w-5 h-5" /></span>
        </Link>
      </div>

      <div className="flex flex-wrap mt-8 gap-6">
        <AdminBlogCard />
      </div>
    </div>
  )
}

export default PostsPage;