import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[700px] h-[700px] bg-red-300">
        {/* <Image src='/images/em.jpg' alt="em" width={200} height={200} quality={100}/> */}
          <Image 
                src='https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
               alt="pexels" 
               width={300} 
               height={200} 
               quality={100}
               priority 
               fill
               style={{
                objectFit: 'cover', // cover, contain, none
              }}
            />
      </div>
    </main>
  );
}
