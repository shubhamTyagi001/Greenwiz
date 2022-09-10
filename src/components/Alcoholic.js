import React, { useState } from 'react'
import { useEffect } from 'react';
import "./alcholic.css"
function Alcoholic() {
const[alc,setalc]= useState([])
    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic").then((response)=>{
          return response.json();
        }).then((data)=>{
            setalc(data.drinks)
        //   console.log(data.drinks)
        })
      },[])
  
  return (
    <div className='outer'>
        { 
        alc.map((drinks)=>{
            return (
                <div key = {drinks.idDrink}> 
                <img className='img_size' src ={drinks.strDrinkThumb} alt = "/"/>
                <p>{drinks.strDrink}</p>
                </div>
            );
        })}
    </div>
  )
}

export default Alcoholic