import BlogCard from "../components/BlogCard"
import { blogData } from "../data/blogData"

const BlogsPage = () => {
    return (
        <div id="blogspage" className="pt-20">
                <div className="flex flex-wrap items-center justify-around">
                    {blogData.map((val, index) => <BlogCard {...val} key={index} />)}
                </div>
        </div>
    )
}

export default BlogsPage
