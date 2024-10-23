
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import PropTypes from 'prop-types';

function App() {
const [bookmarks, setBookmarks]=useState([])
const [readingTime,setReadingTime]=useState(0);
const readingHandler=(id,time)=>{
  let totalReadingTime=readingTime+time;
  setReadingTime(totalReadingTime);
  console.log("remove bookmark", id);
  const remainingBookmark=bookmarks.filter(bookmark=>bookmark.id!==id);
  setBookmarks(remainingBookmark);
}
const bookmarkHandler=(blog)=>{
  const newBookMark=[...bookmarks, blog];
  setBookmarks(newBookMark);
}
  return (
    <>
<Header></Header>
<div className='md:flex max-w-7xl mx-auto'>
<Blogs bookmarkHandler={bookmarkHandler} readingHandler={readingHandler}></Blogs>
<Bookmarks bookmarks={bookmarks} readingTime={readingTime}>
</Bookmarks>
</div>
      
    </>
  )
}

App.propTypes={
  bookmarks:PropTypes.object,
  setBookmarks:PropTypes.func,
  blog:PropTypes.object
}
export default App
