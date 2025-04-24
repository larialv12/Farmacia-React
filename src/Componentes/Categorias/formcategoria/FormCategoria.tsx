import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categorias } from "../../../models/Categoria";

import { atualizar, listar, cadastrar } from "../../../Services/Service";

function FormCategorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    // Removed unused setIsLoading state
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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // Removed setIsLoading as it is unused

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categorias, setCategorias);
                alert("A categoria foi atualizada com sucesso!");
            } catch (error: any) {
                alert("Erro ao atualizar a categoria.");
                console.error(error);
            }
        } else {
            try {
                await cadastrar(`/categorias`, categorias, setCategorias);
                alert("A categoria foi cadastrada com sucesso!");
            } catch (error: any) {
                alert("Erro ao cadastrar a categoria.");
                console.error(error);
            }
        }

        retornar();
    }

    return (
        <div className="container w-full md:w-1/2 mx-auto flex flex-col items-center justify-center bg-[#d6f2ee] py-10 px-4">
            <h1 className="text-4xl text-center my-8 text-[#006D77]">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            <form className="w-full flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-[#006D77]">
                        Nome da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Digite o nome da categoria:"
                        name="nome"
                        className="border-2 border-[#006D77] rounded p-2 text-[#2E2E2E]"
                        value={categorias.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-[#006D77]">
                        Descrição da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria:"
                        name="descricao"
                        className="border-2 border-[#006D77] rounded p-2 text-[#2E2E2E]"
                        value={categorias.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded text-[#2E2E2E] bg-[#006D77] hover:bg-[#004f4f] w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                </button>
            </form>
        </div>
    );
}

export default FormCategorias;
