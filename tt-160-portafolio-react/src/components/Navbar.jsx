function Navbar(){
    return(
        <>           
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Julián Gómez</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Sobre mi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Proyectos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Tecnologias</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Estudios y reconocimientos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Que dicen de mi</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>        
    )
}
export default Navbar