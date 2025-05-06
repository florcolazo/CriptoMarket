export const Header = ({ titulo }) => {
    return (
        <nav className="bg-light-blue darken-2 p-4">
            <div className="text-center text-white font-bold text-xl">
                {titulo}
            </div>
        </nav>
    );
};