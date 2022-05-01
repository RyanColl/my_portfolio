import React from 'react'

function Time() {
    const [time, setTime] = React.useState("")
    React.useEffect(() => {
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
    <>{time}</>
  )
}

export default Time