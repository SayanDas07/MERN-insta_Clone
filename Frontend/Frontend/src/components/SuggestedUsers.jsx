import { Link } from 'lucide-react';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSelector } from 'react-redux';

function SuggestedUsers() {
  const { suggestedUsers } = useSelector(store => store.auth);
  console.log(suggestedUsers)
  return (
    <div className='my-10'>
      <div className='flex items-center justify-between text-sm'>
        <h1 className='font-semibold text-gray-600'>Suggested for you</h1>
        <span className='mx-10 font-medium cursor-pointer'>See All</span>
      </div>
      {
        suggestedUsers.map((user) => {
          return (
            <div key={user?._id} className='flex items-center justify-between my-5'>
              <div className='flex items-center gap-2'>
                {/* TODO LINK WITH PROFILE */}
                  <Avatar>
                    <AvatarImage src={user?.profilePicture} alt="post_image" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                
                <div>
                  {/* TODO LINK WITH PROFILE */}
                  <h1 className='font-semibold text-sm'>{user.username}</h1>
                  <span className='text-gray-600 text-sm'>{user?.bio || 'Bio here...'}</span>
                </div>
              </div>
              <span className='text-[#3BADF8] text-xs font-bold cursor-pointer hover:text-[#3495d6]'>Follow</span>
            </div>

          )
        })
      }


    </div>
  )
}

export default SuggestedUsers
