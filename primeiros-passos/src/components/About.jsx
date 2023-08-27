import '../styles/About.css'

function AboutInfo(){
    return(
       <section className='Sobre' id='About'>
         <div className='infos'>
                <h1>SOBRE:</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel quo recusandae magnam commodi adipisci doloribus voluptas molestiae quasi, deleniti dolore nihil, dolorum impedit minus distinctio maxime aut natus! Sapiente!</p>

                <h2>CURSOS:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel quo recusandae magnam commodi adipisci doloribus voluptas molestiae quasi, deleniti dolore nihil, dolorum impedit minus distinctio maxime aut natus! Sapiente!</p>

                <h2>HABILIDADES:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel quo recusandae magnam commodi adipisci doloribus voluptas molestiae quasi, deleniti dolore nihil, dolorum impedit minus distinctio maxime aut natus! Sapiente!</p>
            </div>
            <div className='image-me'>
                <img src="./public/me-image.webp" alt="" />
        </div>
           
       </section>
    )
}

export default AboutInfo;