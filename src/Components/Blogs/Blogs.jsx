import { useEffect, useState } from "react";
import Blog from "../Blog/Blog.Jsx";
import PropTypes from 'prop-types';



const Blogs = ({bookmarkHandler,readingHandler}) => {
const [blogs,setBlogs]=useState([]);
useEffect (()=>{
    fetch ("blogs.json")
    .then(res=>res.json())
    .then(data=>setBlogs(data));
} , [])

    return (
        <div className="w-2/3 ">
            <h2>blogs={blogs.length}</h2>
          {
        blogs.map(blog=><Blog key={blog.id} blog={blog} bookmarkHandler={bookmarkHandler}
            readingHandler={readingHandler}></Blog>)
    }
         
        </div>
    );
};

Blogs.propTypes={
    bookmarkHandler:PropTypes.func,
    readingHandler:PropTypes.func
}

export default Blogs;