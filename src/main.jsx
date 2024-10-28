import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import car1 from "./assets/download.jpeg";
import me from "./assets/me.jpeg";
import usmanpostimg from "./assets/usmanpostimg.png";
import sharjeelpostimg from "./assets/sharjeelpostimg.png";
import haipostimg from "./assets/haipostimg.png";
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
function Post(Props) {
  return (
    <>
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={Props.img}
            alt="Loading"
            className="dp"
            id="my-id"
            title="Click here to visit profile"
          />
          <div id='userdiv'>
            <h3 id='username' title="Click here to visit profile">{Props.name}</h3>
            <span id='now'>Now</span>
          </div>
        </div>
        <SlOptions size={30} style={{ cursor: 'pointer' }} id='navicon'/>

      </div>

      <p id='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      {/* <img src={Props.postimg} alt="post image" className="post-photo" id="my-id" /> */}
      {
    
    Props.postimg ?   <img
        src={Props.postimg}
        alt="post image"
        className="post-photo"
        id="my-id"
      /> : null 
    
    
    }
      <div>
      

      </div >
      <div id='secondlast'>
      <FcLike size={30} id='likericon'/><span id='likers'>{Props.likers}</span>
      <span id='commenters'>49 comments</span>
      </div>
      

      <div id='last'>
        <input type="checkbox" id="likeCheckbox" title='Click here to like' />
        <label htmlFor="likeCheckbox" id='label'>
        <BiSolidLike size={30} id='likebtn'/><span id='like'>Like</span></label>
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
      <Post name="Haseeb Khatri" img={me} likers="Sharjeel Irfan and 65 others"postimg={postimg}/>
      <Post name="Sharjeel Irfan" img="https://avatars.githubusercontent.com/u/153942693?v=4" likers="Haseeb Khatri and 29 others" postimg={sharjeelpostimg}/>
      <Post name="Usman Khatri" img="https://avatars.githubusercontent.com/u/160041606?v=4" likers="Sharjeel Irfan and 99 others" postimg={usmanpostimg}/>
      <Post name="Abdul Hai" img="https://avatars.githubusercontent.com/u/154320924?v=4" likers="Usman Khatri and 13 others"postimg={haipostimg}/>
      <Post name="Subhan Khatri" img="https://avatars.githubusercontent.com/u/153839377?v=4"likers="Subhan Khatri and 98 others"/>
      <Post name="Shehzad Iqbal" img="https://avatars.githubusercontent.com/u/93990677?v=4"likers="Abdul Hai and 23 others"postimg="https://avatars.githubusercontent.com/u/93990677?v=4"/>
      <Post name="Kabeer" img="https://avatars.githubusercontent.com/u/154308508?v=4"likers="Shayan Haq and 34 others"/>
      <Post name="Shayan Haq" img="https://avatars.githubusercontent.com/u/153832999?v=4"likers="MuhammadKabeer and 9 others"/>
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
