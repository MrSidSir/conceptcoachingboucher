"use client"
import { useRouter  } from 'next/navigation'
export default function Home() { 
   const router= useRouter()
  return (
   <div> 
    <div className=" flex-1/3 m-20 text-center text-red-500 text-shadow-amber-200 text-[50px]" >
       <h1>  welcome to concept coaching browser </h1>
   <h2>about our browser</h2>
<h3> This is  an international browser </h3>

   
   
       </div>



       <div>
       <div>
      <div>
      <h1>There are many facilities in my coaching institute </h1>
    <p> We provide free of cost question papers</p>
    <p></p>
    </div>
  <button> <search> ok </search> </button>
    </div>
       <div>
      <div className='flex-1/12 text[25px] text-color via-violet-500 m-1.5'>about our facilities</div>
      
    </div>
    <div  className='flex gap-2.5 items-center justify-between w-[70%]  mx-auto'>
    <button  className='bg-emerald-300 text-white rounded-md p-10 cursor-pointer hover:bg-black  ' type= "button" onClick={()=> router.push('/conceptcoachingboucher')} > okey </button>
    <button className='bg-amber-700  flex gap-2.5 text-amber-300 p-10 rounded-[50%] cursor-pointer hover:bg-sky-700 ' type= "button" onClick={()=> router.push('/conceptcoachingcontent')} > yes </button>
    <button className='' type= "button" onClick={()=> router.push('/conceptcoachingonlineplatformlink')} > OK </button>
    <button type= "button" onClick={()=> router.push('/CCCregistration')} > CCC </button>
    </div>
       </div>
  </div>
  );
}
