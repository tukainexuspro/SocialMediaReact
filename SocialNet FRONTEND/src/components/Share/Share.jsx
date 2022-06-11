import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import RoomIcon from '@mui/icons-material/Room'
import AddReactionIcon from '@mui/icons-material/AddReaction'

import './share.css'

export default function Share() {
  return (
    <>
      <div className='share'>
        <div className='shareWrapper'>
          <div className='shareTop'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
              alt=''
              className='shareProfileImg'
            />
            <input
              type='text'
              className='shareInput'
              placeholder='Whats in your mind?'
            />
          </div>
          <hr className='shareHr' />
          <div className='shareBottom'>
            <div className='shareOptions'>
              <div className='shareOption'>
                <PermMediaIcon htmlColor='tomato' classname='shareIcon' />
                <span className='shareOptionText'>Photo or Video</span>
              </div>
              <div className='shareOption'>
                <LabelIcon htmlColor='blue' classname='shareIcon' />
                <span className='shareOptionText'>Tag</span>
              </div>
              <div className='shareOption'>
                <RoomIcon htmlColor='green' classname='shareIcon' />
                <span className='shareOptionText'>Location</span>
              </div>
              <div className='shareOption'>
                <AddReactionIcon htmlColor='gold' classname='shareIcon' />
                <span className='shareOptionText'>Feelings</span>
              </div>
            </div>
            <button className='shareButton'>Share</button>
          </div>
        </div>
      </div>
    </>
  )
}
