import { useEffect, useState } from 'react'
import { Cotizacion } from './components/Cotizacion'
import Formulario from './components/Formulario'
import image from './assets/logo-crypto.png'
import './App.css'

function App() {
    const [ busqueda, guardarBusqueda ] = useState ({
    criptomoneda :'',
    moneda: '',
    })
    const [consultar, guardarConsulta] = useState(false)
    const [resultado, guardarResultado] = useState({})

    const {criptomoneda , moneda} = busqueda

    const resetForm = () => {
    guardarBusqueda({
        criptomoneda: '',
        moneda: '',
    })
    guardarResultado({
        resultado:''
    });
    guardarConsulta({
        consultar:''
    })
    };

    useEffect(() => {
        const consultarApi = async () =>{
        if (!criptomoneda || !moneda) {
            guardarResultado({})
            return;
        }
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        if (resultado.DISPLAY && resultado.DISPLAY[criptomoneda] && resultado.DISPLAY[criptomoneda][moneda]) {
            guardarResultado(resultado.DISPLAY[criptomoneda][moneda])
        } else {
            guardarResultado({})
        }

        console.log(resultado)


    }
    consultarApi();
    
    }, [consultar])

    return (
        <>


        <div className="app-background bg-white py-10 px-10 rounded-xl flex:wrap "> {/* mt: margin top */}

        <h2 className="heading-highlight text-center lg:text-4xl  md:text-2xl  ">Cotizador de criptomonedas</h2>
        <div className="mt-10 w-6 lg:w-12 m-auto mb-10" >
            <img className="image-logo-bitcoin rounded-xl" src={image} />
        </div>
        
        <div className='md:flex  m-auto'>
            <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
                cryptoList={['BTC', 'ETH', 'LTC']}
            /> 
            <Cotizacion
            resultado={resultado}
            onReset={resetForm}
            />
            </div>
        </div>
        </>
    )
}


export default App
