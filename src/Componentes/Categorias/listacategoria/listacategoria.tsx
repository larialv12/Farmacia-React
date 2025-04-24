import { useEffect, useState } from "react";
import CardCategorias from "../CardCategoria/CardCategoria";
import { listar } from "../../../Services/Service";
import { Categorias } from "../../../models/Categoria";

function Listacategoria() {
    const [categoria, setCategoria] = useState<Categorias[]>([]);

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategoria);
        } catch (error: any) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, []);

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoria.map((cat) => (
                            <CardCategorias key={cat.id} categoria={cat} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listacategoria;
