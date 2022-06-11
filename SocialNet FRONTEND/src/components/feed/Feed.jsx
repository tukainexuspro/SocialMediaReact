import Post from '../post/Post'
import Share from '../Share/Share'
import { Posts } from '../../dummyData'
import { Users } from '../../dummyData'

import './feed.css'

export default function Feed() {
  return (
    <>
      <div className='feed'>
        <div className='feedWrapper'>
          <Share />
          {Posts.map((p) => {
            return <Post key={p.id} post={p} />
          })}
        </div>
      </div>
    </>
  )
}
