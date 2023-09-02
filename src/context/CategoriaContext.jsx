import {createContext, useState, useEffect} from 'react'
import axios from 'axios'
const CategoriaContext = createContext()

// eslint-disable-next-line react/prop-types
const CategoriaProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    const getCategorias = async () => {
       try{
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const {data} = await axios(url);
        setCategorias(data.drinks)
       }
       catch(error){
        console.log(error)
       }
    }
    useEffect(() => {
        getCategorias()
    }, [])
  return (
    <CategoriaContext.Provider value={{
        categorias
    }}>
        {children}
    </CategoriaContext.Provider>
  )
}

export {
    CategoriaContext,
    CategoriaProvider
}