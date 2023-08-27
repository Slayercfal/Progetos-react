import './contato.css'


function Contato(){
    return(
        <div className='container-projetos'>
            <div className='Github'>
                <img src="github.png" alt="" />
                <h2>Abilio vinicius</h2>

                <p>Slayercfal</p>

                <a href="https://github.com/Slayercfal" target='_blank' className='linkgit'>
                    Acessar
                </a>

            </div>
            <div className='linkedin'>
                    <img src="linkedin.png" alt="" />

                    <h2>Abilio vinicius dos Santos bandeira</h2>

                    <a href="https://www.linkedin.com/in/abilio-vinicius-vinicius-358604272/" target='_blank' className='link-link'>
                        Acessar
                    </a>
            </div>
        </div>
    )
}

export default Contato;