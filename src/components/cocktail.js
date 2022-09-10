import React, { useState } from 'react'

function Cocktail() {
    const[cocktail,setcocktail]= useState([])
    useEffect(()=>{
        const detCocktail = async(name)=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then((response)=>{
          return response.json();
        }).then((data)=>{
            setcocktail(data.drinks)
        //   console.log(data.drinks)
        })
      }},[])

  return (
    <div>
    { 
    cocktail.map((drinks)=>{
        return (
            <div key = {drinks.idDrink}> 
            <p>{drinks.strDrink}</p>
            <img src ={drinks.strDrinkThumb} alt = ""/>
            </div>
        );
    })}
</div>
  )
}

export default Cocktail