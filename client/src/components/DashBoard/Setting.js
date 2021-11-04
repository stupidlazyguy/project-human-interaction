import React from 'react'
import { useSelector } from 'react-redux'

export default function Setting() {
    const animals = useSelector(state => state.animals.animalList)
    

    return (
        <div className="setting">
            <div className="title">
                <h3>Quản lý thông tin </h3>
            </div>
            <div className="content">
                <p>Tổng số họ động vật:</p>
                <p>Tổng động vật là: {animals && animals.length}</p>
            </div>
        </div>
    )
}
