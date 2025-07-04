import React from 'react'
import "./FilterComponent.scss"
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const FilterComponent:React.FC = () => {
  return (
    <>
    <div className='filter_component'>
        <div className='filter_section'>
            <div className='location_container'>
                <div className="location_title">
                    Your Location
                </div>
                <div className="location">
                    Jamshedpur,Kolkata,Bangladesh.
                </div>
            </div>
            <div className="search_container">
                <div className="search_icons"><IoSearchOutline className='icon'/></div>
                <input type="text" className="search_input" placeholder='Search Restaurant'/>
                <div className="cross_icons"><RxCross2 className='icon'/></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FilterComponent
