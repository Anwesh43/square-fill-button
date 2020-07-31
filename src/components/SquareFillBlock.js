import {useAnimatedScale, useDimension, useStyle} from '../utils/hooks'
import React from 'react'

const SquareFillBlock = () => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {getStrokeStyle, getFillStyle} = useStyle(w, h, scale)
    return <div onClick = {start}>
        <div style = {getStrokeStyle()}>
        </div>
        <div style = {getFillStyle()}>
        </div>
    </div>
}

export default SquareFillBlock

