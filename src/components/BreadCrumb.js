import React from 'react'

import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = ({page}) => {
  return (
    <div className="breadcrumb">
        <AiFillHome className="icon"/>
        Home
        <MdOutlineKeyboardArrowRight className="icon-next"/>
        {page}
    </div>
  )
}

export default BreadCrumb
