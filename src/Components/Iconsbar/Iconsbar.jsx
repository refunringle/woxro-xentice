import React from 'react'
import { GiShop } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { BiLandscape } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";
import { RiBuilding4Line } from "react-icons/ri";
import { MdMeetingRoom } from "react-icons/md";
import './Iconsbar.css'

const Iconsbar = () => {
  return (
    <div className="iconsbar">
      <div className="container m-auto">
        <div className="flex-icon m-auto">
          <div className="commercial-shop " >
            <GiShop className="img-responsive center-block d-block mx-auto" />
            <p className="text-center fw-2">Commercial Shop</p>
          </div>
          <div className="commercial-office" >
            <ImOffice className="img-responsive center-block d-block mx-auto" />
            <p className="text-center">Commercial Office</p>
          </div>
          <div className="commercial-land">
            <BiLandscape className="img-responsive center-block d-block mx-auto" />
            <p className="text-center">Commercial Land</p>
          </div>
          <div className="commercial-building">
            <BsBuilding className="img-responsive center-block d-block mx-auto" />
            <p className="text-center">Commercial Building</p>
          </div>
          <div className="industrial-shop">
            <FaIndustry className="img-responsive center-block d-block mx-auto" />
            <p className="text-center">Industrial Building</p>
          </div>
          <div className="coworking-space">
            <GiOfficeChair className="img-responsive center-block d-block mx-auto" />
            <p className="text-center">Co-working Space</p>
          </div>
          <div className="private-office">
            <RiBuilding4Line className="img-responsive center-block d-block mx-auto" />
            <p className="text-center">Private Office</p>
          </div>
          <div className="meeting-room">
            <MdMeetingRoom className="img-responsive center-block d-block mx-auto" />
            <p className="text-center">Meeting Room</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iconsbar