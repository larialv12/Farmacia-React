import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { listar, deletar } from "../../../Services/Service";
import { Categorias } from "../../../models/Categoria";






function DeletarCategoria() {

     const navigate = useNavigate();
        const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
        
        const { id } = useParams<{ id: string }>();
    
        async function listarCategorias(id: string) {
            try {
                await listar(`/categorias/${id}`, setCategorias);
            } catch (error: any) {
                alert("Erro ao buscar a categoria:");
                navigate("/categorias");
            }
        }
    
        useEffect(() => {
            if (id !== undefined) {
                listarCategorias(id);
            }
        }, [id]);
    
        
        function retornar() {
            navigate("/categorias");
        }
    
        async function deletarCategoria() {
    
            if (id !== undefined) {
                try {
                    await deletar(`/categorias/${id}`);

                    alert("A categoria foi deletada com sucesso!");
                } catch (error: any) {
                    alert("Erro ao apagar a categoria.");
                    console.error(error);
                }
            } 
                retornar() ;
        }



    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a  categoria seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>

                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>Categoria</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}



export default DeletarCategoria