import {useState, useEffect} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
} 

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 10 
    const position = 'absolute'
    const fixedX = w / 2
    const fixedY = h / 2
    const color = '#4CAF50'
    const sf = Math.sin(Math.PI * scale)
    return {
        getStrokeStyle() {
            const width = `${size}px`
            const height = `${size}px`
            const left = `${fixedX - size / 2}px`
            const top = `${fixedY - size / 2}px`
            const border = `2px solid ${color}`
            return {
                position, 
                left,
                top, 
                width, 
                height, 
                border
            }
        },
        getFillStyle() {
            const upSize = size * sf 
            const height = `${upSize}px`
            const width = `${upSize}px`
            const left = `${fixedX - upSize}px`
            const top = `${fixedY - upSize}px`
            const background = color 
            return {
                position, 
                height, 
                width, 
                left, 
                top, 
                background 
            }
        }
    }
}