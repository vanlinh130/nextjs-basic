import React from 'react'
import { Data } from '@/lib/data';

export default function Login() {
  return (
    <table>
      <thead>
        <tr className='border-[1px] border-[#ccc]'>
          <th className='border-r-[1px] border-r-[#ccc] px-4 py-2'>Name</th>
          <th className='border-r-[1px] border-r-[#ccc] px-4 py-2'>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
      {Data.map((item) => {
        return (
          <tr key={item.id} className='border-[1px] border-[#ccc]'>
             <td className='border-r-[1px] border-r-[#ccc] px-4 py-2'>{item.name}</td>
             <td className='border-r-[1px] border-r-[#ccc] px-4 py-2'>{item.age}</td>
             <td className='px-4 py-2'>{item.address}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
