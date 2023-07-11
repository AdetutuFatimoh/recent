import Link from 'next/link'
import React, { Children } from 'react'

export const metadata = {
    title: 'Course Information',
    description: 'About the Courses we offer',
  }
export default function layout({children}) {
  return (
    <div className='grid grid-cols-[300px_800px] gap-2'>
    <nav>
        <ul>
            <Link href='/course/backend'>
                <li>backend</li>
            </Link>

            <Link href='/course/frontend'>
                <li>frontend</li>
            </Link>

            </ul>
            </nav>
            <div>
            {children}
            </div>
            </div>
            
  )
}

