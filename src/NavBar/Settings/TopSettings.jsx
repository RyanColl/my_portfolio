import React, { useEffect } from 'react'
import Logo from '../../assets/svgs/Logo'
import Dropdown from '../../Dropdown/Dropdown'
import './settings.scss'
import Time from './Time'

const settingsObject = {
    icon: [],
    about: [],
    projects: [],
    thoughts: []
}
const settingsArray = Object.keys(settingsObject)

const TopSettings = () => {
    const [toggled, setToggled] = React.useState(false)
    const [setting, setSetting] = React.useState('')
    const navItemClicked = (index) => {
        let setting = settingsArray[index].substring(0, 1).toUpperCase() + settingsArray[index].substring(1)
        setSetting(setting)
    }
    console.log(toggled)
  return (
    <div className='top-settings'>
        <div onClick={() => setToggled(!toggled)} className='settings-left settings-item'>
            <Logo />
            <span>About</span>
            <span>Projects</span>
            <span>Thoughts</span>
        </div>
        <div className='settings-right settings-item'>
            <Time />
        </div>
    </div>
  )
}

export default TopSettings