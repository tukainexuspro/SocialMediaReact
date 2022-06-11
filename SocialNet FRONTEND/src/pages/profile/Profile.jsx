import Feed from '../../components/feed/Feed'
import Post from '../../components/post/Post'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { Posts } from '../../dummyData'
import './profile.css'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <img
              src='https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg'
              alt=''
              className='profileCoverImg'
            />
            <img
              src='https://pbs.twimg.com/media/EwdMk6WVcAAix76.jpg'
              alt=''
              className='profileUserImg'
            />
            <h2 className='username'> Divyanshi Sumrav</h2>
            <span className='profileDesc'>
              honour my 'Chemistry' with words!| Anchor @thelallantop 🍂 For
              collaborations : DM/mail - divyanshisumravwork@gmail.com
            </span>
          </div>

          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
