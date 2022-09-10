import{BiWine} from "react-icons/bi"
import{FaWineBottle,FaWineGlassAlt} from "react-icons/fa"
import{GiBeerStein} from "react-icons/gi"

import React from 'react'

function Category() {
  return (
    <div>
        <div>
            <GiBeerStein/>
        </div>
        <div>
            <FaWineBottle/>
        </div>
        <div>
            <BiWine/>
        </div>
        <div>
            <FaWineGlassAlt/>
        </div>
    </div>
  )
}

export default Category