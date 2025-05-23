import { Link } from 'react-router-dom';
import { Categorias } from '../../../models/Categoria';

interface CardCategoriasProps {
    categoria: Categorias;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between w-80 mx-auto ">
            <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
            Categoria
            </header>
            <p className="p-4 text-2xl bg-slate-100">{categoria.nome}</p>

            <p className="p-8 text-xl bg-slate-200 h-full">{categoria.descricao}</p>

            <div className="flex">
            <Link to={`/categorias/atualizar/${categoria.id}`}
            className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
            flex items-center justify-center py-2'>
            <button>Editar</button>
            </Link>
               
            <Link to={`/categorias/deletartema/${categoria.id}`} 
            className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
            flex items-center justify-center'>
            <button>Deletar</button>
            </Link>
            </div>
        </div>
    );
}

export default CardCategorias;