import YourShelfSection from '@/components/myShelfPage/YourShelfSection'
import React from 'react'

const page = () => {
  return (
    <div className="h-[750px] overflow-y-auto scrollbar-hide">
        <YourShelfSection/>
    </div>
  )
}

export default page