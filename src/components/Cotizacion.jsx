export const Cotizacion = ({ resultado, onReset }) => {
    if (Object.keys(resultado).length === 0) return null;

    return (
        <div className="w-4/5 lg:w-2/4 m-auto cotizacion-style">
            <div className="shadow-xl px-5 py-10 rounded-xl">
                <h2 className="font-black text-2xl mb-5">Cotización:</h2>

                <div className="mb-3">
                    <span className="font-bold">Cotización del día:</span>
                    <span className="ml-2 text-gray-700 font-semibold">{resultado.PRICE}</span>
                </div>

                <div className="mb-3">
                    <span className="font-bold">Precio más alto del día:</span>
                    <span className="ml-2 text-gray-700 font-semibold">{resultado.HIGHDAY}</span>
                </div>

                <div className="mb-3">
                    <span className="font-bold">Precio más bajo del día:</span>
                    <span className="ml-2 text-gray-700 font-semibold">{resultado.LOWDAY}</span>
                </div>

                <div className="mb-3">
                    <span className="font-bold">Precio de apertura (últimas 24h):</span>
                    <span className="ml-2 text-gray-700 font-semibold">{resultado.OPEN24HOUR}</span>
                </div>
            </div>

            <div className="text-center mt-5">
                <button
                    className="text-yellow-500 font-bold hover:underline"
                    onClick={onReset}
                >
                    Nueva cotización
                </button>
            </div>
        </div>
    );
};
