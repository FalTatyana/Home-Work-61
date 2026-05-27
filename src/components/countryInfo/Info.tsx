interface Props {
    png: string
    name: string
    capital: string
    area: number
    region: string
    population: number
    borders: string
}


const Info = ({ png, name, capital, area, region, population, borders }: Props) => {
    return (
        <>
            <div className="card mb-3 w-20">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={png} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Cuntry: {name}</h5>
                            <p className="card-text">Capital: {capital}</p>
                            <p className="card-text">Capital: {area}</p>
                            <p className="card-text">Region: {region}</p>
                            <p className="card-text">Population: {population}</p>
                            <p className="card-text">Borders: {borders}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info