import Image from 'next/image'
'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Paytone_One } from 'next/font/google';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link'
import image from '../public/next.svg'
import nav from './components/navbar.json'
import carddata from './components/carddata.json'
import carddata1 from './components/carddata1.json'
import footerdata from './components/footerdata.json'

export default function Home() {
  const[ham,UseHam]=useState("hidden");

   const hamfunc=(e:any)=>{
    e.preventDefault();
    if(ham === "hidden"){
      UseHam("inline-block")
      console.log("inline-block")
    }
    else{
      console.log("hidden")
      UseHam("hidden")
    }
   }
   const[dark,UseDark]=useState("light");
   
   const darkfunc=(e:any)=>{
    e.preventDefault();
    if(dark === "light"){
      UseDark("dark");
    }
    else{
      
      UseDark("light")
    }
   }
  
  
  
  
  return (
   <main >
    
    < >
    <div className={`transition-transform: duration-500 ${dark === "dark"? 'bg-[#181720]':'bg-white'}`}>
    <section> 
      
    <div className={`container mx-auto pt-10`}>
    
      <div className= {`mx-auto container px-2 py-2 text-2xl  lg:rounded-full md:rounded-full transition-transform
       duration-500 ${dark === 'light' && ham ==='hidden' ? 'text-white' : 'text-black'} ${ham === 'hidden' ? 'rounded-full' : 
       'rounded-2xl'} ${dark === 'light' && ham === 'hidden' ? 'bg-navbg' : 'bg-[#22212A]'} ${dark === 'light' && ham != 'hidden' ? 
       'bg-white'  : 'bg-[#22212A]'} ${dark === 'light' && ham != 'hidden' ? 'text-darktext'  : 'text-white'}  flex z-50 static 
       top-0 ${ham === 'hidden' ? 'items-center' : ''}`}>
        <div  className='lg:hidden md:hidden  '>
        <img  className={`${ham === 'hidden'?'inline-block':'hidden' } `} src="jd.svg" alt="" />
        <img  className={`${ham}  `} src="jd1.svg" alt="" />
        </div>
        <div className={`lg:flex lg:flex-row  md:flex md:flex-row  flex flex-col justify-between lg:pt-0 md:pt-0 ${ham === 'hidden'?'pt-0':'pt-20' }  items-center container `}>
        {nav.map((data,index) => (
          <>
          <div className={`lg:inline-block md:inline-block hidden  `} key={data.id} >
            <div className=' '>

            
              {data.id !==4 ?(
              <a className='hover:bg-white hover:text-black px-8 md:px-4  py-4 font-semibold hover:rounded-full flex  items-center ' href="">{ data.name}</a>
              ):(<img 
              src="jd.svg"
              alt="Image"
               />)
               }
               </div>
          </div>
          <div className={`lg:hidden md:hidden  ${ham}`}  key={data.id} >
          {data.id !== 4 ? (
          <a className='hover:bg-white hover:text-black px-8 py-4 font-semibold hover:rounded-full flex items-center' href="">
            {data.name}
          </a>
        ) : null}
         
      </div>
      </>
          ))}
          <div className={`${ham}`}>
          <div className='pt-10'>
            <p className='shadow-lg font-semibold pb-2 ps-6 text-sm'>hello@artboardstudio.com</p>
            </div>
            <div className='flex text-xs gap-10 pt-5'>
              <div>
                <a href="">Facebook</a>
              </div>
              <div>
                <a href="">Linkedin</a>
              </div>
              <div>
                <a href="">Instagram</a>
              </div>
            </div>
            </div>
          
          </div>
          <div className='   top-0 '>
          <button onClick={hamfunc} className={`float-end lg:hidden md:hidden ${ham === 'hidden'?'inline-block':'hidden' }`}>
          <img src="navham.png" alt="" />
          
          </button> 
          <button  onClick={hamfunc} className={` lg:hidden md:hidden  ${ham} `}>
          <img className={`transition-transform: duration-500 ${dark === 'dark'?'hidden':'inline-block'}`} src="cross.svg" alt="" />
          <img className={`transition-transform: duration-500 ${dark === 'dark'?'inline-block':'hidden'}`} src="cross1.svg" alt="" />
            </button> 
          </div>   
      </div>


        <div className=' mx-auto container  lg:mt-36 md:mt-20'>
          <div className=' flex lg:flex-row md:flex-row flex-col  justify-between'>
            <div className='lg:w-[45%] md:w-[82%] md:pe-4   border-black  mt-20' >
              <h1 className={`lg:text-6xl md:text-4xl text-[41px] font-fhead  relative transition-transform: duration-500 ${dark === "dark"? 'text-white':'text-darktext'}`}>           
              I'm <span className={`transition-transform: duration-500 ${dark === "dark"? 'text-white':'text-navbg'}`}>Jon Dawson</span>, Product Designer
              
              <img className={`absolute -right-0 lg:-top-6 md:-top-6 -top-2 transition-transform: duration-500 ${dark === "dark"? 'hidden':'inline-block'}`} src="v1.svg" alt="" />
              <img className={`absolute -right-0 lg:-top-6 md:-top-6 -top-2 transition-transform: duration-500 ${dark === "dark"? 'inline-block':'hidden'}`} src="v2.svg" alt="" />
              </h1>            
                <p className={`pt-8 font-fpara text-lg font-medium transition-transform: duration-500 ${dark === "dark"? 'text-white':'text-darktext'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud.</p>
              <div className='flex py-16 gap-4 font-bold'>
              <button onClick={darkfunc} className={`  lg:px-16 lg:py-4 md:px-10 md:py-2 px-12 py-3 rounded-lg transition-transform: duration-500  ${dark === "dark"? 'text-black':'text-white'}   ${dark === "dark"? 'bg-white':'bg-black'}`}>
              About
              </button>
              <button className='text-white bg-navbg lg:px-16 lg:py-4 md:px-8 md:py-2 px-8 py-3  rounded-lg  '>
              Download CV
              </button>
            </div>
          </div>
          <div className='flex'>
            <div className='relative'>            
            <img className='flex  ' src="h1.svg" alt="" />
            <button >
            <img className='flex absolute  lg:bottom-5 right-0 bottom-5  lg:right-0 md:bottom-32 md:-right-3  lg:h-32 md:h-22 h-24  ' src="hbtn.svg" alt="" />
              </button>
            </div>
            <div className='lg:inline-block hidden'>
              <p className='rotate-90 text-navbg mt-40'>Follow me on:</p>
              <div className='ps-10 pt-16 flex flex-col gap-8'>
                <div><img src="fb.svg" alt="" /></div>
                <div><img src="ig.svg" alt="" /></div>
                <div><img src="lkdn.svg" alt="" /></div>             
              </div>
            </div>
          </div>      
      </div>
    </div>
    </div>
    </section>
    <section>
     <div className={` rounded-3xl transition-transform: duration-500 ${dark === "dark"? 'bg-[#22212A]':'bg-navbg'}`}>
        <div className='mx-auto container mt-16 pt-16 pb-16'>
        <div className=' flex flex-col  justify-center  '>
          <div className='border-3 flex items-center text-center flex-col justify-center '>
            <p className='text-white  lg:text-2xl md:text:2xl text-xl '>
            MY EXPERTISE
            </p>
            <p className='lg:text-6xl md:text-6xl text-4xl  mx-auto font-fhead text-white mt-2'>
            Innovative 
            Solutions
            </p>
          </div>
          <div className=' mx-auto lg:w-[50%] md:w-[80%] pt-4 text-slate-300 flex text-center '>
            <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          </div>
        </div>
        <div className='container mt-20'>
  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    centeredSlides={false}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    breakpoints={{
      358: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }}
  >
    {carddata.map((data, index) => (
      <SwiperSlide key={index}>
        <div className={`overflow-hidden lg:h-[508px] md:h-[360px] h-[468px] relative   rounded-3xl bg-cover bg-center mb-10 transition-transform: duration-500  ${dark === "dark"? 'bg-[url(/recdark.svg)]':'bg-[url(/rec.svg)]'}`} >
          <p className='p-6 text-3xl font-semibold'>
            {data.title}
          </p>
          <p className='border border-black'></p>
          <img className='lg:pt-10 md:pt-0 pt-10 scale'  src={data.address} alt="" />
          
          <Link href={data.link}>
            <img className={`absolute bottom-0  lg:-right-0  -right-0 md:-right-0  lg:h-28 md:h-[75px]  h-[90px]  transition-transform: duration-500  ${dark === 'dark'?'hidden':'inline-block'}`} src={data.iconaddress} alt="" />
            <img className={`absolute bottom-0  lg:-right-0  -right-0 md:-right-0  lg:h-28 md:h-[75px]  h-[90px]  transition-transform: duration-500 ${dark === 'dark'?'inline-block':'hidden'}`} src={data.iconaddress1} alt="" />
          
          </Link>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


  
        </div>
      </div>
    </section>
    <section>
      <div className='mx-auto container  mt-16  grid grid-cols-12 relative'>
        <div className={`flex flex-col justify-center lg:col-span-4 col-span-12 transition-transform: duration-500 ${dark === "dark"? 'text-white':'text-darktext'} `} >
          <p className=' lg:text-2xl md:2xl text-xl font-semibold'>
          MY SKILLS
          </p>
          <p className='lg:text-6xl md:text-6xl text-4xl font-extrabold leading-snug py-2  '>
          Beautiful and 
          unique digital 
          experiences 
          </p>
          <p className='lg:w-[74%] md:w-[100%] w-[100%] lg:mt-0 md:mt-4 mt-0  text-lg font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className=' lg:col-span-4 md:col-span-6 col-span-12 mt-12 mx-3'>
          <div className=' p-5 float-end   mt-5 lg:w-[90%] md:w-[90%] w-[100%] flex justify-evenly  rounded-3xl bg-navbg'>
            <div className='w-[45%] '>
              <img className='bg-white  p-2 px-3 rounded-xl' src="figma.svg" alt="" />
              <p className='text-2xl py-1 font-semibold text-white'>Figma</p>
              <p className='text-xs text-slate-300 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              </p>
            </div>
            <div className=' lg:ps-4 md:ps-0 ps-4 w-[60%]'>
              <img className='' src="fcard.svg" alt="" />
            </div>
          </div>
          <div>
            <div className='bg-navbg rounded-3xl mt-5 p-5 lg:w-[70%] md:w-[70%] w-[48%] float-end'>
              <img className='bg-white p-2 rounded-xl' src="adobe.jpg" alt="" />
              <p className='text-2xl py-1 font-semibold text-white'>
              Illustrator
              </p>
              <p className='text-xs text-slate-300 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <img className='pt-4' src="fcard1.svg" alt="" />
            </div>
            
          </div>
        </div>
        <div className='lg:col-span-4 md:col-span-6  col-span-12  m-3  lg:static md:static absolute lg:top-[0%] md:top[0%] top-[64%] '>
        <div>
            <div className='bg-navbg rounded-3xl  p-5 lg:w-[70%] md:w-[70%] w-[48%]'>
              <img className='bg-white p-2 rounded-xl' src="photoshop.png" alt="" />
              <p className='text-2xl py-1 font-semibold text-white'>
              Photoshop
              </p>
              <p className='text-xs text-slate-300 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <img  className='pt-4' src="fcard2.svg" alt="" />
            </div>
            
          </div>
          <div className=' p-5   mt-5 lg:w-[90%] md:w-[90%] w-[100%] flex justify-evenly  rounded-3xl bg-navbg'>
            <div className='w-[45%] '>
              <img className='bg-white p-2 rounded-xl' src="canva.png" alt="" />
              <p className='text-2xl py-1 font-semibold text-white'>Canva</p>
              <p className='text-xs text-slate-300 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              </p>
            </div>
            <div className='lg:ps-4 md:ps-0 ps-4 w-[60%]'>
              <img className='' src="fcard3.svg" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section>
      <div className='container mx-auto lg:mt-0 md:mt-0   mt-64'>
        <div className={` mx auto text-center  my-20 font-fhead lg:text-8xl md:text-7xl text-4xl transition-transform: duration-500 ${dark === "dark"? 'text-white':'text-darktext'}`}>
          <p>
          Featured Works
          </p>
        </div>
        <div className='lg:inline-block md:inline-block hidden'>
        <div className='mx-auto  container     grid grid-cols-12'>
          
          <div className='flex  gap-4  flex-col lg:col-span-4 md:col-span-4 col-span-12'>
            <div className=' lg:h-1/5 md:h-1/5    rounded-3xl overflow-hidden shadow-xl'>
              <img  className='size-full' src="sec31.svg" alt="" />
            </div>
            <div className='lg:h-1/3 md:h-1/3    lg:mb-0 md:mb-0  mb-4 rounded-3xl overflow-hidden shadow-xl'>
              <img className='w-full h-full object-cover'  src="sec32.svg" alt="" />
            </div>
            <div className='lg:h-1/3 md:h-1/4 h-1/3 rounded-3xl overflow-hidden shadow-xl lg:inline-block md:inline-block hidden'>
              <img className=' size-full'  src="sec33.svg" alt="" />
            </div>
          </div>
          <div className='lg:col-span-8 md:col-span-8 col-span-12'>
            <div className='lg:mx-8 md:mx-8   rounded-3xl overflow-hidden shadow-xl'>
              <img className='size-full' src="sec34.svg" alt="" />
            </div>
            <div className='flex  lg:flex-row md:flex-row  lg:gap-0 md:gap-0 gap-5 flex-col  lg:mx-6 md:mx-8 mx-6 lg:my-6 md:my-4 my-6   ' >
              <div className='flex lg:gap-7 md:gap-2 gap-7  flex-col'>
                <div className='lg:h-72 md:h-40  rounded-3xl overflow-hidden shadow-xl'>
                <img className='size-full' src="sec35.svg" alt="" />
                </div>
                <div className='h-58 rounded-3xl  overflow-hidden shadow-xl lg:inline-block md:inline-block hidden'>
                <img className='' src="sec36.svg" alt="" />
                </div>
                
                
              </div>
              <div className='ps-5 flex-col'>
                <div  className='lg:h-52 md:h-[100px]   rounded-3xl overflow-hidden shadow-xl'>
                  <img className='size-full' src="sec37.svg" alt="" />
                </div>
                <div className='lg:h-80  rounded-3xl lg:my-6 md:my-5 my-6 overflow-hidden shadow-xl'>
                  <img className='size-full ' src="sec38.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        </div>
        <div className='lg:hidden md:hidden inline-block'>
          <div className='rounded-3xl overflow-hidden'>
            <img className='object-cover' src="sec34.svg" alt="" />
          </div>
          <div className='flex gap-4 mt-4'>
            <div className='flex-col '>
              <div className='rounded-3xl overflow-hidden'>
              <img className='object-cover' src="sec31.svg" alt="" />
              </div>
              <div className='rounded-3xl mt-4 overflow-hidden'>
              <img className='object-cover' src="sec32.svg" alt="" />
              </div>
            </div>
            <div className='flex-col '>
              <div className='rounded-3xl overflow-hidden'>
              <img className='h-[225px] object-cover' src="sec38.svg" alt="" />
              </div>
              <div className='rounded-3xl mt-4 overflow-hidden'>
              <img className='object-cover' src="sec37.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='rounded-3xl overflow-hidden mt-5'>
            <img className='object-cover' src="sec35.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='mx-auto  container'>
        <div className={`lg:text-center md:text-center lg:m-10 md:m-10 lg:my-10 md:my-10 my-10 transition-transform: duration-500 ${dark === "dark"? 'text-white':'text-darktext'}`}>
          <p className='lg:text-2xl md:text-2xl text-xl font-semibold'>MY EXPERIENCE</p>
          <p className='lg:text-6xl md:text-6xl text-4xl font-fhead'>Education</p>
          <p className='lg:hidden md:hidden inline-block py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className=' grid gap-5 grid-cols-12 '>
          
          <div className={`p-5 rounded-3xl shadow-xl lg:col-span-6 md:col-span-12 col-span-12 transition-transform: duration-500 ${dark === "dark"? 'bg-[#3E3D4B]':'bg-[#F2EFFF]'} `}>
            <img src="sec4.svg" alt="" />
            <div className='flex gap-5 my-3 items-center'>
              <img src="sec4box.png" alt="" />
              <p className='text-3xl font-extrabold'>2024</p>
            </div>
            <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud. 
            </p>
          </div>
          <div className='lg:col-span-6 md:col-span-12 col-span-12'>
            <div>
              <div className={`p-5 rounded-3xl shadow-xl col-span-5 transition-transform: duration-500 ${dark === "dark"? 'bg-[#3E3D4B]':'bg-[#F2EFFF]'}`}>
              <div className='flex lg:gap-5 md:gap-5  my-3 items-center'>
              <img src="sec4box.png" alt="" />
              <p className='text-3xl font-extrabold'>2022</p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud.
            </p>
              </div>
              <div className='flex mt-14 gap-4'>
              <div className={`p-5 rounded-3xl shadow-2xl col-span-5 transition-transform: duration-500 ${dark === "dark"? 'bg-[#3E3D4B]':'bg-[#F2EFFF]'} `}>
              <div className='flex gap-5 my-3 items-center'>
              <img src="sec4box.png" alt="" />
              <p className='text-3xl font-extrabold'>2020</p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud.
            </p>
              </div>
              <div className={`p-5 rounded-3xl shadow-2xl col-span-5 transition-transform: duration-500  ${dark === "dark"? 'bg-[#3E3D4B]':'bg-[#F2EFFF]'}`}>
              <div className='flex gap-5 my-3 items-center'>
              <img src="sec4box.png" alt="" />
              <p className='text-3xl font-extrabold'>2018</p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud.
            </p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className= {`rounded-3xl my-20 transition-transform: duration-500 ${dark === "dark"? 'bg-[#22212A]':'bg-navbg'}`} >
        <div className='mx-auto  py-20  container'>
          <div className='flex justify-center'>
            <div className='text-center lg:w-[60%] md:w-[90%] mb-24'>
              <div className='relative '>
            <p className='lg:text-6xl md:text-6xl text-4xl font-fhead text-white '>
            Happy Clients <span className='lg:inline-block md:inline-block hidden'> Say</span>
            </p>
            <svg className='absolute lg:right-20 md:-right-6 lg:-top-7 md:-top-2 lg:inline-block md:inline-block hidden' xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <path d="M2.5 20.0078C2.5 17.0078 5.5 11.0078 2.5 2.00781M10 23.5078C14.3333 19.3411 23.2 9.20781 24 2.00781M13 30.5078C15.6667 30.5078 22.8 29.1078 30 23.5078" stroke="#FFFDFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <p className='mt-8 text-slate-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className='container mx-auto grid grid-cols-12  lg:gap-10 md:gap-10 gap-4'>
        
          <div className={`lg:col-span-4 md:col-span-6 col-span-12  rounded-3xl transition-transform: duration-500  ${dark === "dark"? 'bg-[#3E3D4B]':'bg-cardbg'} p-5`}>
            <div className='flex items-center gap-4 text-sm text-white'>
              <div>
                <img src="sec41.svg" alt="" />
              </div>
              <div>
                <p className='text-2xl'>Elsa Aptas</p>
                <p className='text-lg'>CEO, Lirante</p>
              </div>
            </div>
            <div className='py-2'>
              <img src="sec4star.svg" alt="" />
            </div>
            <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          
          <div className={`lg:col-span-4 md:col-span-6 col-span-12 rounded-3xl p-5 transition-transform: duration-500 ${dark === "dark"? 'bg-[#3E3D4B]':'bg-cardbg'}`}>
            <div className='flex items-center gap-4 text-white'>
              <div>
                <img src="sec42.svg" alt="" />
              </div>
              <div>
                <p className='text-2xl'>Jonas Jhon</p>
                <p className='text-lg'>CEO, Lirante</p>
              </div>
            </div>
            <div className='py-2'>
              <img src="sec4star1.svg" alt="" />
            </div>
            <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className='md:col-span-3 lg:hidden md:inline-block hidden '></div>
          <div className={`lg:col-span-4 md:col-span-6  col-span-12 rounded-3xl   p-5 transition-transform: duration-500 ${dark === "dark"? 'bg-[#3E3D4B]':'bg-cardbg'}`}>
            <div className='flex items-center gap-4 text-white'>
              <div>
                <img src="sec43.svg" alt="" />
              </div>
              <div>
                <p className='text-2xl'>Andrés Ceballos</p>
                <p className='text-lg'>CEO, Lirante</p>
              </div>
            </div>
            <div className='py-2'>
              <img src="sec4star2.svg" alt="" />
            </div>
            <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className='md:col-span-3 lg:hidden md:inline-block hidden '></div>
        </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container mx-auto'>
          <div className={`flex lg:flex-row md:flex-col flex-col justify-between  lg:items-center md:items-start items-start transition-transform: duration-500 ${dark === "dark"? 'text-white':'text-darktext'}`}>
            <div>
              <p className='text-3xl font-bold'>STORIES</p>
              <p className='text-6xl font-fhead'>Blog Update</p>
            </div>
            <div className='lg:w-[45%] md:w-[100%]  lg:text-xl md:text-xl lg:mt-0 md:mt-6 mt-6 text-lg'>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
          </div>
          
          <div className='grid  grid-cols-12 lg:gap-8 md:gap-8  my-16'>
          {carddata1.map((data,index)=>(
          <div className="h-full lg:col-span-4  md:col-span-6  col-span-12  size-full ">   
          <div className="overflow-hidden ch   relative  bg-[url('/rec1.svg')] rounded-3xl bg-cover  bg-center mb-10 ">
            <img className='scale2   ' src={data.address} alt="" />
            <button className=''>
            <img className=' lg:h-[22%] md:h-[17%] h-[18%] absolute top-0 -right-0' src={data.iconaddress} alt="" />
            </button>
            <p className='absolute p-3 font-fhead text-white lg:text-4xl md:text-4xl text-3xl  lg:top-[55%] md:top-56 top-64 z-10'>{data.title}</p>
            <p className='absolute px-3 py-8 text-slate-300 text-lg lg:top-[60%] md:top-72 top-72 z-10'>{data.data}</p>
            <p className='absolute px-3 py-16 text-slate-300 text-xl  lg:top-96 md:top-96 top-[75%] z-10 font-extrabold'>7 october 2019</p>
            </div >     
          </div>
           ))}

          </div>
      </div>
    </section>
    <section>
   
      <div className={` rounded-t-3xl  transition-transform: duration-500 ${dark === "dark"? 'bg-[#22212A]':'bg-navbg'}`}>
        <div className='container mx-auto'>
          <div className='flex  lg:flex-row md:flex-row flex-col justify-between lg:items-center md:items-center items-start  py-10'>
            <div className='lg:text-6xl md:text-5xl  text-5xl font-fhead text-white'>
              <p>
              Lets Connect there
              </p>           
            </div>
            <div className='lg:pt-0 md:pt-0 pt-5'>
              <button className='lg:px-10 md:px-2 px-10 py-2 rounded-lg text-xl font-semibold text-navbg bg-white'>Contact Us</button>
            </div>
          </div>
          <div className=' border border-1 border-slate-400 '>
          </div>
          <div className='grid grid-cols-12 py-10 gap-6 lg:gap-24 md:gap-5'>
            <div className='lg:col-span-4 md:col-span-3 col-span-12'>
              <img src="logofooter.svg" alt="" />
              <p className='py-6 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>             
            <div className='flex gap-2'>
            {footerdata.map((data,index)=>(
              <div key={index}>
              <img src={data.address} alt="" />
              </div>
              ))}
            </div>
            </div>
            <div className='lg:col-span-2 md:col-span-2 col-span-6'>
              <p className='text-xl font-bold text-white '>Navigation</p>
              {nav.map((data,index)=>(
                <div className='py-1 text-white'>
                  <a className='' href="">{data.name}</a>
                </div>
              ))}
            </div>
            <div className='lg:col-span-3 md:col-span-3 col-span-6 text-white gap-2'>
                <p className='text-xl font-bold  '>Contact</p>
                <p className='py-3'>+1 (234) 567-89-00</p>
                <p>info@gmail.com</p>
                <p className='py-3'>Portfolio.com</p>
            </div>
            <div className='lg:col-span-3 md:col-span-3 col-span-12  gap-2 float-end'>
                <p className='text-white font-fhead text-xl'>Get the latest information</p>
                <div className="relative flex">
  <input placeholder="Email Address" className="rounded-lg lg:px-7 md:px-0 px-14 py-2 my-2 pl-4" type="text" />
  <button className="absolute lg:right-5 md:-right-9 right-28 top-3 px-2 py-1 rounded-r-lg bg-white" type="button">
    <img src="filled.png" alt="" />
  </button>
</div>            
</div>
        </div>
        <div className=' border border-1 border-slate-400 '>
          </div>
          <div className='py-10 flex lg:flex-row md:flex-row flex-col justify-between text-white'>
            <div >
              <p>Copyright© 2024 All Rights Reserved.</p>
            </div>
            <div className='lg:pt-0 md:pt-0  pt-5'>
              <p>Terms & Conditions   |   Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>    
    </section>
    </div>
    </>
   </main>
  )
}
