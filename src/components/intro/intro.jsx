import React from 'react'
import "./intro.css"
import profile from '../../assets/profile.png'

export default function Intro() {
  return (
    <div className="i">
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2>Hello, My name is </h2>
                <h1 className='i-name'>Chandra Adithya</h1>
                <div className='i-title'>
                    <div className="i-title-wrapper">
                        <div className="i-title-item">KACHIGUDA KING</div>
                        <div className="i-title-item">KMIT Student</div>
                        <div className="i-title-item">Canada Khalisthan</div>
                        <div className="i-title-item">Moey Moey</div>
                        <div className="i-title-item">CSE</div>
                    </div>
                </div>
                <div className='i-desc'>Hey prends, Bye prends</div>
            </div>
        </div>
        <div className='i-right'>
            <div className="i-bg"></div>
            <img src={profile} alt='' className='i-img' />
        </div>
    </div>
  )
}
