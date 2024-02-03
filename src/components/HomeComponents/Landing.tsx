const mainbtn = "m-1 font-medium border px-5 py-2 hover:text-white hover:bg-red-400 text-red-400 border-red-400 rounded-lg"

const Landing = () => {
    return (
        <div id="landing" className="flex items-center justify-around mt-1 min-h-screen">
        <div className="w-[600px]">
            <p className="text-5xl m-1 text-gray-800">
                Every human is an artist. And this is the main art that we have: the creation of our story.  
            </p>
            <div className="my-3 flex flex-wrap">
                <button className={mainbtn}>Marketing</button>
                <button className={mainbtn}>Coding</button>
                <button className={mainbtn}>Technology</button>
                <button className={mainbtn}>News Article</button>
                <button className={mainbtn}>Education</button>
            </div>
            <p className="m-1 mt-5 text-gray-500">
                Hello World, Welcome to my personal blog website. Here I enjoy writing content on various topics
                such as Marketing, Coding, Technology, News Articles, Education and many more.
            </p>
        </div>
        <img className="w-[500px]" src="main.jpg" alt="" />
    </div>
    )
}

export default Landing
