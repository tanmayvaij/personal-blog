import BlogCard from "../components/BlogCard"
import Landing from "../components/HomeComponents/Landing"
import { blogData } from "../data/blogData"

const HomePage = () => {
    return (
        <div id="homepage" className="min-h-screen">

            <Landing/>

            <div>
                <h1 className="text-center font-medium text-3xl my-10">Top 8 Articles</h1>
                <div className="flex flex-wrap items-center justify-around">
                    {blogData.map((val, index) => <BlogCard {...val} key={index} />)}
                </div>
            </div>

        </div>
    )
}

export default HomePage
