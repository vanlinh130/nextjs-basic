import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className='w-[800px] flex justify-center p-3'>
        <div className='border-[1px] border-[#ccc] rounded-xl p-3'>
            <h2 className='text-center p-3'>Page Dashboard </h2>
            <Image src='/images/em.jpg' alt='image' width={200} height={200} className='rounded'/>
        </div>
    </div>
  )
}
