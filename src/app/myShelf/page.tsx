'use client'
import YourShelfSection from '@/components/myShelfPage/YourShelfSection'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectShowPendingPayments } from '@/store/slices/returnModalSlice'
import PendingPayments from '@/components/myShelfPage/PendingPayments'

const Page = () => {
  const showPendingPayments = useSelector(selectShowPendingPayments)
  console.log("showPendingPayments", showPendingPayments);
  

  return (
    <div className="h-[750px] overflow-y-auto scrollbar-hide">
      {showPendingPayments ? <PendingPayments/> : <YourShelfSection/>}
    </div>
  )
}

export default Page