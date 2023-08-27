import { useParams } from "react-router-dom";

function Produto(){

    const { id } = useParams();
    return(
        <div>
            <h2>Pagina dealhe do produto</h2>


            <p>Meu produto e {id}</p>
        </div>
    )
}

export default Produto;