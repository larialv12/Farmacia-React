import Listacategoria from "../Categorias/listacategoria/listacategoria"
function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex w-full justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            FarmaciaGen
                        </h2>
                        <p className='text-xl'>
                            Se ate o seu deploy precisa de saude , imagina voce
                        </p>

                        
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <Listacategoria/>
         
            </>
    )
}

export default Home