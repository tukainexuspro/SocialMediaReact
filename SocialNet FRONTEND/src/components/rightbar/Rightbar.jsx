import CelebrationIcon from '@mui/icons-material/Celebration'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Users } from '../../dummyData'
import Online from '../online/Online'

import './rightbar.css'

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img src='' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <CelebrationIcon className='celebIcon' />
            <b className='bd'>Pola Foster </b> and{' '}
            <b className='bd'> 3 others</b> have birthday today
          </span>
        </div>
        <img
          src='https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/shutterstock_456779230.png'
          alt=''
          className='ad'
        />
        <h4 className='rightbarTitle'>
          Online Friends <FiberManualRecordIcon className='onlineIcon' />
        </h4>

        <ul className='rightbarFriendList'>
          {Users.map((u) => {
            return <Online key={u.id} user={u} />
          })}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='RightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>New Delhi</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>India</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
          <hr className='divide' />

          <h4 className='RightbarTitle'>User's Friends</h4>
          <div>
            {Users.map((u) => {
              return <Online key={u.id} user={u} />
            })}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='rightbar'>
        <div className='rightbarWrapper'>
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </>
  )
}
