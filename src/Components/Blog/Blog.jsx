import React from 'react';
import { MdOutlineBookmarkAdd } from "react-icons/md";
import PropTypes from 'prop-types';

const Blog = ({blog,bookmarkHandler,readingHandler}) => {

    const{title,cover,reading_time,author,author_img,posted_date,hashtags, id}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt=''></img>
            <div className='flex justify-between items center'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>Posted Date: {posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'><span>{reading_time} min read</span>
                <button className='text-5xl m-4 border-2'
                onClick={()=>bookmarkHandler(blog) }><MdOutlineBookmarkAdd /></button>
                </div>
            </div>
            <h1 className='text-4xl font-semibold'>{title} </h1>
            <p>{
                hashtags.map((hash, idx)=> <span key={idx}><a href="">{hash}</a> </span>)}</p>
                <button
                onClick={()=>readingHandler(id,reading_time)}
                className='text-purple-300 font-bold underline'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    bookmarkHandler:PropTypes.func,
    readingHandler:PropTypes.func
}
export default Blog;