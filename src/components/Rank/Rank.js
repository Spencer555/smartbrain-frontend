import React from 'react'

export default function Rank({username, user_entries}) {
  return (
    <div>
      <div className='white f3 tc'>
        {`${username}, your current rank is ....`}
      </div>
      <div className='white f1 tc'>
        {`${user_entries}`}
      </div>
    </div>
  )
}
