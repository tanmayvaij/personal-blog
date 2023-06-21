import BlogCard from "../components/BlogCard"
import { blogData } from "../data/blogData"

const HomePage = () => {
    return (
        <div id="homepage" className="flex flex-wrap items-center justify-around min-h-screen">
            {
                blogData.map((val, index) => {
                    return <BlogCard {...val} key={index} />
                })
            }
        </div>
    )
}

export default HomePage
