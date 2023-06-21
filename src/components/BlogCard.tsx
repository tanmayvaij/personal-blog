import { FC } from "react";

interface BlogCardInterface {
    image: string
    title: string
}

const BlogCard: FC<BlogCardInterface> = ({ image, title }) => {
    
    return (
        <div className="shadow-sm w-80 m-2">

            <img className="w-96 h-48" src={image} alt="" />

            <div className="p-5">
                
                <h5 className="text-xs pb-2 text-red-400 font-semibold">Marketing</h5>

                <h2 className="font-semibold text-md">{title}</h2>
                
                <p className="text-gray-500 h-36 text-xs pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, placeat porro. Laboriosam deleniti minima
                    eius iste qui reiciendis maiores animi tempora libero! Recusandae molestias perferendis, ex labore maxime
                    aspernatur ducimus?
                </p>

                <div className="flex items-center">
                    <img className="rounded-full w-10" src="https://images.pexels.com/users/avatars/501272/justin-shaifer-473.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1" alt="" />
                    <div className="pl-3">
                        <h3 className="font-semibold text-xs">Ajit Tolroy</h3>
                        <h4 className="text-xs text-gray-500">March 10, 2020 - 4 min read</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BlogCard
