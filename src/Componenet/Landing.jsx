import React from 'react'
import unorganized from '../assets/unorganized.svg'
import todo from '../assets/todo.svg'
import circle from '../assets/circle.svg'
import note from '../assets/note.svg'
import select from '../assets/select.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import image from '../assets/image2.jpg'
import circleFill from '../assets/circle-fill.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
    const nav =[
        {title:"Home", path:'/'},
         {title:"About", path:'/About'},
          {title:"Services", path:'/Services'},
          {title:"Login", path:'/Login'}
        ]

          const aboutTodo =[
            {title:'Add tasks to your to-do list', img:circle},
            {title:'Set priorities, deadlines, and reminders', img:circle},
            {title:'Track progress and stay productive', img:circle},
            {title:'Boost Productivity', img:circle},
          ]
          const aboutNote =[
            {title:'Take Quick Notes ', img:circle},
            {title:'Capture your thoughts, ideas, and reminders on the go', img:circle},
            {title:'Keep track of meeting notes, to-do lists, or random thoughts in one place.', img:circle},
            {title:'Add personal or work-related notes and stay organized without the clutter.', img:circle},
          ]
          const media=[
            {title:instagram, path:'https://github.com/ashmah17/Track_it_app'},
            {title:facebook, path:'/About'},
             {title:twitter, path:'/Services'}
           ]
          
  return (
    <div className='w-[100%] h-[100vh] relative'>
        <div className="shadow pb-4">
            <div className="bg pt-6 relative md:h-[70vh] h-[34vh] justify-between  overflow-hidden flex flex-col">
                        <div className=" w-[50%] md:w-[30%] md:ml-3 flex justify-between p-4">
                            {nav.map((nav, index)=>(
                            <Link to={nav.path}>
                                <ul key={index} className='text-gray-400 md:text-xl hover:text-white transition-all duration-300 text-[.8rem] cursor-pointer'>{nav.title}</ul>

                            </Link>
                            ))}
                        </div>
                        <div className='p-5 w-full md:w-[50%] mb-[2.8rem]  flex md:justify-left  flex-col justify-left '>
                            <h1 className="text-4xl  md:text-8xl md:text-center ml-2 text-gray-300 ">Track it</h1>
                            <p className="md:text-center ml-6 text-[.8rem] md:text-3xl text-gray-400  mt-1">Todo App</p> 
                        </div>
                        <div className="hidden md:block md:w-[50%] p-8 md:mb-[3rem] flex flex-col items-center justify-center">
                            <p className='text-[#6f856c;] text-center text-[.8rem] md:text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Quasi tenetur veniam dolores corrupti voluptatum quod cum
                                harum ipsam laudantium, magnam libero dicta excepturi                             
                                soluta similique sequi sed impedit, vitae minus?                              
                            </p>
                            <Link to='/Login'>
                                <button className="p-2 text-[white]  hover:shadow-2xl shadow-xl transition-all duration-300 mt-4 bg-[#6f856c;] w-full rounded-xl ">Sign In</button>
                            </Link>
                        </div>


                    <div className=' bg-gray-200 w-[35vh] h-[35vh] p-2 md:w-[86vh] md:h-[82vh] absolute flex items-center bottom-[-2rem] right-[-4rem] md:bottom-[-6rem] md:right-[-5rem] rounded-full overflow-hidden'>
                        <img src={unorganized}  className="md:w-[90%] p-3 w-[80%]" />
                    </div>
            </div>
            <div className=" items-center flex flex-col p-4 block md:hidden">
                 <p className='text-gray-500 text-[.8rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                     Quasi tenetur veniam dolores corrupti voluptatum quod cum
                    harum ipsam laudantium, magnam libero dicta excepturi                             
                    soluta similique sequi sed impedit, vitae minus?                              
                </p>
                <button className="p-2 text-white hover:bg-gray-500 transition-all duration-300 mt-4 bg-gray-400 w-[50%] rounded-xl ">Sign In</button>
            </div>
            
        </div>  

        <div className="">
                            {/* ABOUT US */}
            <div className=" p-4 mt-8">
                 <h1 className="text-2xl font-primaryBold text-gray-500">About Us</h1>
                 <p className='p-2 font-primaryRegular text-gray-600'>Stay organized and boost your productivity with our
                     all-in-one To-Do & Notes app! Easily add tasks, 
                     track your progress, and jot down important notes—all 
                     in one place. Whether you're managing daily errands, 
                     work projects, or personal reminders, our intuitive 
                     design helps you stay on top of everything that matters.</p>
            </div>
            
            <div className="md:flex justify-between z-30">
                <div className="mb-[2rem] shadow-xl rounded-xl bg-white border md:w-full m-3 md:flex justify-between">
                  
                   <div className="p-4 w-[80%]">
                        <h1 className="text-xl font-primaryBold text-gray-500 text-center mb-2">Manage your to-dos</h1>
                       {aboutTodo.map((todo)=>(
                        <span className='flex ml-8'>
                             <img src={todo.img} alt="" className="w-[1rem]" />
                             <h1 className="p-2 text-[.8rem] text-primaryRegular text-gray-600">{todo.title}</h1>
                         </span>
                       ))
                       }

                   </div>

                  <div className="w-[50%] m-4 flex items-center">
                     <img src={todo} alt="" className="" />
                  </div>
                </div>

                <div className="mb-[2rem] shadow-xl rounded-xl bg-white border md:w-full m-3 md:flex  justify-between">
                   <div className="p-4">
                        <h1 className="text-xl mb-2 font-primaryBold text-gray-500 text-center">Manage your Notes</h1>
                       {aboutNote.map((todo)=>(
                        <span className='flex ml-8'>
                             <img src={todo.img} alt="" className="w-[1rem]" />
                             <h1 className="p-1 text-[.9rem] text-primaryRegular text-gray-600">{todo.title}</h1>
                         </span>
                       ))
                       }

                   </div>

                  <div className=" m-4 flex items-center">
                     <img src={note} alt="" className="w-full" />
                  </div>
                </div>


                <div className=" p-6 shadow-2xl pb-[5rem]">
                    <div className="mb-2  text-2xl font-primaryBold text-gray-500 ">Why Choose Us</div>
                    <div className="pl-4 flex flex-col">
                        <div className=" flex items-center">
                             <img src={select} className='w-[60%]' />
                        </div>
                        <p className="">
                        Our app combines a task manager and notepad in one, eliminating 
                        the need for multiple apps. Whether you're planning your day, 
                        tracking work projects, or saving ideas, we've got you covered.
                        </p>
                    </div>
                </div>
               
            </div>
            
        </div> 
        <div className="bg3 h-[74%] w-full relative">
            <div className=" b3 w-full h-[5rem] p-3">
                <h1 className="text-center p-2 text-gray-200 md:text-4xl text-4xl">Track <span className='text-gray-400'>it</span></h1>
            </div>
            <div className='bg-cover bg-center bg3 opacity-40 w-full h-[50vh] relative overflow-hidden'
             style={{ backgroundImage: `url(${image})` }} >
                <div className="bg3 w-full rotate-[10deg] top-[-7rem] absolute right-[-2rem] h-[8rem]" ></div>
                <div className="bg3 w-full rotate-[170deg] top-[-7rem] absolute right-[3rem] h-[8rem]" ></div>
                <div className="bg3 w-full rotate-[180deg] top-[-6rem] absolute right-[3rem] h-[8rem]" ></div>
               
            
            </div>
            <div className="z-40 absolute top-[3rem] w-full">
                <h1 className="text-2xl ml-4 mt-6 text-gray-300 font-primaryRegular">Contact Us</h1>
               <div className="">
                    <div className=" flex flex-col  p-4 ">
                        <h1 className=" text-gray-300 m-2">Get in touch and let us know how we can help you!</h1>
                        <input type="text" placeholder='Name' className=" p-2 m-2 bg4 rounded text-white outline-none" />
                        <input type="text" placeholder='Email' className=" p-2 m-2 bg4 rounded text-white outline-none" />
                        <input type="text" placeholder='Phone' className=" p-2 m-2 bg4 rounded text-white outline-none" />
                        <input type="text" placeholder='Message' className=" p-2 m-2 bg4 rounded text-white outline-none" />
                        <button className="p-2 bg-gray-300 m-2 rounded">Submit</button>
                    </div>
                    <div className=" flex  m-4 mt-9 justify-between p-3">
                       {media.map((media)=>(
                       <Link to={media.path}>
                             <img src={media.title} alt="" className="w-10" />
                       </Link>
                       ))}
                    </div>

               </div>
            </div>
            <span className=" absolute bottom-0  text-gray-600  text-center w-full justify-center bg-gray-200 mt-4 p-2 flex">
                &copy;Daada copyright Reserved
            </span>

        </div>
    </div>
  
  )
}

export default Landing
