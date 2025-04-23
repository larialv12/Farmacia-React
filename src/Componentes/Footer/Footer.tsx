
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Projeto FarmaciaGen | {data}
                        </p>
                    <p className='text-lg'>Feito com amor e carinho</p>
                   
                </div>
            </div>
        </>
    )
}                    

export default Footer