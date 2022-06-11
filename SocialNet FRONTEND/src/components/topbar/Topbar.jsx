import './topbar.css'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'

export default function Topbar() {
  return (
    <>
      <div className='topbarContainer'>
        <div className='topbarLeft'>
          <span className='logo'>NexusProsSOCIAL</span>
        </div>
        <div className='topbarcenter'>
          <div className='searchbar'>
            <SearchIcon className='SearchIconstyle' />
            <input
              type='text'
              placeholder='Search for Friends, post or Video'
              className='searchInput'
            />
          </div>
        </div>
        <div className='topbarRight'>
          <div className='topbarLinks'>
            <span className='topbarLink'>Homepage</span>
            <span className='topbarLink'>Timeline</span>
          </div>
          <div className='topbarIcons'>
            <div className='topbarIconItem'>
              <PersonIcon />
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
              <ChatIcon />
              <span className='topbarIconBadge'>2</span>
            </div>
            <div className='topbarIconItem'>
              <NotificationsIcon />
              <span className='topbarIconBadge'>3</span>
            </div>
          </div>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
            alt='ProPic'
            className='topbarImg'
          />
        </div>
      </div>
    </>
  )
}
