import MoreVertIcon from '@mui/icons-material/MoreVert'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Posts, Users } from '../../dummyData'
import './post.css'
import { useState } from 'react'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <>
      <div className='post'>
        <div className='postWrapper'>
          <div className='postTop'>
            <div className='postTopLeft'>
              <img
                className='postProfileImg'
                src={
                  Users.filter((u) => u.id === post.userId)[0].profilePicture
                }
                alt=''
              />
              <span className='postUserName'>
                {Users.filter((u) => u.id === post.userId)[0].userName}
              </span>
              <FiberManualRecordIcon className='dot' />
              <span className='postDate'>{post.date}</span>
            </div>
            <div className='postTopRight'>
              <MoreVertIcon />
            </div>
          </div>
          <div className='postCenter'>
            <span className='postText'>{post?.desc}</span>
            <img src={post.photo} alt='' className='postImg' />
          </div>
          <div className='postBottom'>
            <div className='postBottomLeft'>
              <img
                className='like'
                onClick={likeHandler}
                src='https://purepng.com/public/uploads/large/heart-icon-y1k.png'
                alt=''
              />
              <img
                className='like'
                onClick={likeHandler}
                src='https://w7.pngwing.com/pngs/886/3/png-transparent-white-and-blue-like-icon-facebook-like-button-computer-icons-thumb-signal-thumbs-up-blue-text-hand.png'
                alt=''
              />
              <span className='postLikeCounter'>{like}people liked it</span>
            </div>
            <div className='postBottomRight'>
              <span className='postCommentText'>{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
