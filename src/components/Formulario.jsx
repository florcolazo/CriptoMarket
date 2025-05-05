import { useState } from 'react';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta, cryptoList }) => {
    const [error, guardarError] = useState(false);
    
    const { criptomoneda, moneda } = busqueda;

    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (moneda.trim() === '' || criptomoneda.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarConsulta(true);
    }

    return (
        <div className="w-4/5 lg:w-2/4 m-auto px-0 pb-5 w-full formulario-text-effect">   
            <p className="text-lg mt-5 mb-10 text-center">
                Seleccione el tipo de moneda y{" "}
                <span className="text-yellow-400 font-bold">Cotizalas</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md text-left p-4 rounded-md">
                {error && (
                    <p className="text-red-600 font-bold mb-3">
                        (*) Debe completar todos los campos
                    </p>
                )}

                <div className="mb-5">
                    <label htmlFor="moneda">Tipo de moneda (*)</label>
                    <select
                        id="moneda"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        name="moneda"
                        value={moneda}
                        onChange={handleChange}
                    >
                        <option value=''>Seleccionar...</option>
                        <option value='USD'>Dólares Estadounidenses</option>
                        <option value='ARS'>Pesos Argentinos</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="criptomoneda">Seleccione una criptomoneda (*)</label>
                    <select
                        id="criptomoneda"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        name="criptomoneda"
                        value={criptomoneda}
                        onChange={handleChange}
                    >
                        <option value=''>Seleccionar...</option>
                        {cryptoList.map((crypto) => (
                            <option key={crypto} value={crypto}>{crypto}</option>
                        ))}
                    </select>
                </div>

                <input
                    type="submit"
                    value="Cotizar"
                    className="bg-yellow-400 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-yellow-500 cursor-pointer transition-colors"
                />
            </form>
        </div>
    );
}

export default Formulario;
