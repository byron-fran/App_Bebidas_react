import {createContext, useState, useEffect} from 'react'
import axios from 'axios';


const BebidasContext = createContext()

// eslint-disable-next-line react/prop-types
const BebidasProvider = ({children}) => {
    const [ bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [bebidaId, setBebidaId] = useState(null);
    const [receta, setReceta] = useState({});
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        if(!bebidaId) return;
        const getReceta = async () => {
            setCargando(true)
            try{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
                const {data} = await axios(url);
              setReceta(data.drinks[0])
            }
            catch(error){
                console.log(error)
            }
            finally{
                setCargando(false)
            }
        }
        getReceta();
    }, [bebidaId]);

    const getBebidas = async datos => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c${datos.categoria}`;
        const {data} = await axios(url);
       
        setBebidas(data.drinks)
    }
    const handleModalChange = () => {
        setModal(!modal);
    }
    const handleModalId = id => {
       // console.log(id)
        setBebidaId(id);
     
    }
   return (
    <BebidasContext.Provider value={{
        getBebidas,
        bebidas, 
        handleModalChange,
        modal,
        handleModalId,
        receta,
        cargando
    }}>
        {children}
    </BebidasContext.Provider>
  )
}

export {
    BebidasContext,
    BebidasProvider
}