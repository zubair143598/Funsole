import React from 'react'

const AllEvents = () => {

  const events =[
    {
      img:"./assists/team1.png",
      date:"27 Feb 2024",
      event:"Annual Event 2024",
      detail:"Annual Event 2024",
      location:"Islamabad"

    },
    {
      img:"./assists/team1.png",
      date:"25 Aug 2021",
      event:"Annual Tour 2021",
      detail:"Fairy Medows",

    },
    {
      img:"./assists/team1.png",
      date:"27 Feb 2024",
      event:"Annual Event 2024",
      detail:"Annual Event 2024",
      location:"Islamabad"

    },
    {
      img:"./assists/team1.png",
      date:"27 Feb 2024",
      event:"Annual Event 2024",
      detail:"Annual Event 2024",
      location:"Islamabad"

    },
    {
      img:"./assists/team1.png",
      date:"27 Feb 2024",
      event:"Annual Event 2024",
      detail:"Annual Event 2024",
      location:"Islamabad"

    },
    {
      img:"./assists/team1.png",
      date:"27 Feb 2024",
      event:"Annual Event 2024",
      detail:"Annual Event 2024",
      location:"Islamabad"

    },

  ]

  return (
    <div className=' py-[80px]'>
    <h1 className=' text-center text-[48px] font-semibold  pb-[24px] uppercase'>Events</h1>
    <div className='  grid gap-5 px-5 mt-[40px]  lg:grid-cols-2 grid-cols-1'>
      {
        events.map((value, index)=>{
          return(
            <div className='rounded bg-white '>
              <img className=' rounded-[1rem]' src={value.img} alt="" />
              <div className=' p-5'>

              <p className='font-medium text-[16px]'>{value.date}</p>
              <p className=' font-semibold text-[30px]'>{value.event}</p>
              <p className=' font-medium text-[16px]'>{value.detail}</p>
              <p className=' text-[#808080] font-medium text-[16px]'>{value.location}</p>
              </div>

            </div>
          )
        })
      }
    </div>
      </div>
  )
}

export default AllEvents