import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import car1 from "./assets/download.jpeg";
import me from "./assets/me.jpeg";
import postimg from "./assets/postimg.jpg";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";


function Navbar(){
  return(
    <div id='navbar'>
      <h1 id='heading'>Posts-by-React</h1>
      <input id='input' type="search" placeholder='search' />
      <button id='loginbtn'>Login</button>
      <button id='signupbtn'>SignUp</button>
    </div>
  )
}
function Post() {
  return (
    <>
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={me}
            alt="Loading"
            className="dp"
            id="my-id"
            title="Click here to visit profile"
          />
          <div id='userdiv'>
            <h3 id='username' title="Click here to visit profile">Haseeb Khatri</h3>
            <span id='now'>Now</span>
          </div>
        </div>
        <SlOptions size={30} style={{ cursor: 'pointer' }} id='navicon'/>
      </div>

      <p id='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <img src={postimg} alt="post image" className="post-photo" id="my-id" />
      <div>
      

      </div >
      <div id='secondlast'>
      <FcLike size={30} id='likericon'/><span id='likers'>Haseeb Khatri and 99 others</span>
      <span id='commenters'>49 comments</span>
      </div>
      

      <div id='last'>
        <BiSolidLike size={30} id='likebtn' title="Click to like" /><span id='like'>Like</span>
        <BiCommentDetail size={30} id='commentbtn'title="Comment"/><span id='comment'>Comment</span>
        <IoMdShareAlt size={30} id='sharebtn'title="Share"/><span id='share'>Share</span>
      </div>
    </div>
    </>
  );
}


function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Navbar/>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
