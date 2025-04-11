"use client"
import { useRouter  } from 'next/navigation'
export default function Home() { 
   const router= useRouter()
  return (
   <div> 
    <div className=" flex-1/3 m-20 text-center text-red-500 text-shadow-amber-200 text-[50px]" >
       <h1>  welcome to concept coaching browser </h1>
   <h2>about our browser</h2>
   <p>
this is  an international browser
   </p>

   
   
       </div>



       <div>
       <div>
      <div>
      <h1>there are many facilities in my coaching institute </h1>
    <p> we provide free of cost question papers</p>
    </div>
  <button> <search> ok </search> </button>
    </div>
       <div>
      <div className='flex-1/12 text[25px] text-color via-violet-500 m-1.5'>about our facilities</div>
      <button type= "button" onClick={()=> router.push('/conceptcoachingsyllbus')} > okey </button>
    </div>
       </div>
  </div>
  );
}
