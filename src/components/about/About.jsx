import React from 'react'
import './about.css'
import Award from '../../assets/award.jpg'

export default function About() {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
            <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
            </div>
            
        </div>
        <div className="a-right">
            <h1 className='a-tilte'>About Me</h1>
            <p className='a-sub'>
                I am a full stack developer with a passion for creating innovative and user-friendly
            </p>
            <p className='a-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis cum vero temporibus dolorum repellat laudantium inventore aperiam. Culpa dolorum sint, repellat et sunt animi error ad laborum veniam maxime?
            </p>
            {/* <div className='a-award'>
                <img src={Award} alt="" className="a-award-img" />
            </div> */}
        </div>
    </div>
  )
}
