function NovoItemCard() {
    return (
        <div className="col">
            <li className="card align-items-center h-100 p-4 text-center border-style">
                <div className="d-flex flex-column justify-content-center align-items-center my-auto">
                    <div className="card-icon d-flex align-items-center justify-content-center rounded-circle bg-dark bg-opacity-25">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#420004"><path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"/></svg>
                    </div>
                    <article className="card-body">
                        <a href="#cadastro" className="btn btn-primary">Adicionar novo item</a>
                    </article>
                </div>
            </li>
        </div>
    )
}

export default NovoItemCard;