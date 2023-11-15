import React from 'react'
import Sidebar from './_components/Sidebar'

type Props = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className='h-full'>
        <div className='hidden md:flex w-56 flex-col fixed inset-y-0'>
            <Sidebar/>
        </div>
        {children}
    </div>
  )
}

export default DashboardLayout