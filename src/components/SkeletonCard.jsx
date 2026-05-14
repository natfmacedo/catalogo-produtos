function SkeletonCard() {
    return (
        <div className="col">
            <li className="card h-100 p-4 text-center" aria-hidden="true">
                <div className="placeholder-glow">
                    <span className="card-icon rounded-circle placeholder col-6"></span>
                </div>
                <div className="ratio ratio-4x3 placeholder-glow">
                    <span className="card-img placeholder mt-3"></span>
                </div>
                <article className="card-body mt-3">
                    <h3 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h3>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-4"></span>
                    </p>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </article>
            </li>
        </div>
    )
}

export default SkeletonCard;