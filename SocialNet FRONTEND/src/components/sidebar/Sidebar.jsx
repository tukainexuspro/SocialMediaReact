import RssFeedIcon from '@mui/icons-material/RssFeed'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import ChatIcon from '@mui/icons-material/Chat'
import VideoFileIcon from '@mui/icons-material/VideoFile'
import GroupIcon from '@mui/icons-material/Group'
import { Users } from '../../dummyData'
import './sidebar.css'
import CloseFriend from '../closeFriend/CloseFriend'

export default function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebarWrapper'>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <RssFeedIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Feed </span>
            </li>
            <li className='sidebarListItem'>
              <ChatIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Chats </span>
            </li>
            <li className='sidebarListItem'>
              <VideoFileIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Videos </span>
            </li>
            <li className='sidebarListItem'>
              <GroupIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Groups </span>
            </li>
            <li className='sidebarListItem'>
              <BookmarksIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Bookmark </span>
            </li>
            <li className='sidebarListItem'>
              <LiveHelpIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Questions </span>
            </li>
            <li className='sidebarListItem'>
              <WorkIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Jobs </span>
            </li>
            <li className='sidebarListItem'>
              <EventIcon className='sidebarIcon' />
              <span className='sidebarListItemText'> Events </span>
            </li>
          </ul>
          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarhr' />
          <ul className='sidebarFriendList'>
            {Users.map((u) => {
              return <CloseFriend key={u.id} user={u} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
