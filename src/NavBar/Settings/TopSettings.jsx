import React, { useEffect } from 'react'
import Logo from '../../assets/svgs/Logo'
import './settings.scss'
const TopSettings = () => {
    const [time, setTime] = React.useState("")
    useEffect(() => {
        let interval;
        if(time !== ""){
            if(!interval) {
                interval = setInterval(() => {
                    setTime(new Date().toLocaleTimeString())
                }, 1000)
            }
        } else {
            setTime(new Date().toLocaleTimeString())
        }
        return () => clearInterval(interval)
    })

  return (
    <div className='top-settings'>
        <div className='settings-left settings-item'>
            <Logo />
            <span>About</span>
            <span>Projects</span>
            <span>Blog</span>
        </div>
        <div className='settings-right settings-item'>
            {time}
        </div>
    </div>
  )
}

export default TopSettings