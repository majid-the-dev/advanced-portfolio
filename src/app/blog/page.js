import BlogPostCard from "@/components/BlogPostCard";
import CategoryTabs from "@/components/CategoryTabs"

const page = () => {

  return (
    <main className="mt-32 px-6">
      <section className="flex overflow-y-scroll">
        <CategoryTabs />
      </section>

      <section className="flex flex-row lg:items-stretch justify-center lg:justify-start flex-wrap gap-8 mt-8">
        <BlogPostCard />
      </section>

    </main>
  )
}

export default page