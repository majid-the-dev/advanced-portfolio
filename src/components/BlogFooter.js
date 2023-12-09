const BlogFooter = () => {
    return (
        <div className="py-6 px-6">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center text-sm text-gray-500">
                <p>© 2023. All rights reserved.</p>
                <div className="flex gap-5 -order-1 lg:order-1">
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    )
}

export default BlogFooter;