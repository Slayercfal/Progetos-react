import '../styles/Projetos.css'

function Projetos(){
    return(

        <div className="projects" id='projetos'>
            <h1>Projetos:</h1>

            <div className='projeto'>
                <div className='projetosAll'>
                    <img src="./public/projeto-1.jpg" alt="primeiro projeto" />
                    <p>Projeto bla bla</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus atque consectetur </p>
                </div>
                <div className='projetosAll'>
                    <img src="./public/projeto-2.png" alt="segundo projeto" />
                    <p>Projeto bla bla</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus atque consectetur </p>
                </div>
                <div className='projetosAll'>
                    <img src="./public/projeto-3.jpg" alt="terceiro projeto" />
                    <p>Projeto bla bla</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus atque consectetur .</p>
                </div>
                
            </div>
            

        </div>
    )
}


export default Projetos;