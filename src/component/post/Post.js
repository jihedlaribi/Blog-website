import React from 'react'
import "./post.css"
export const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src="https://images.pexels.com/photos/5980865/pexels-photo-5980865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='' />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
       Bitcoin to the moon
        


        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>






    </div>
  )
}
