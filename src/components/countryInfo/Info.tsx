import './Info.css'

interface Props {
    png: string
    name: string
    capital: string
    area: number
    region: string
    population: number
    borders: string[]
}


const Info = ({ png, name, capital, area, region, population, borders }: Props) => {
    return (
        <>
            <div className="card mb-3 border p-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title mb-5">{name}</h1>
                            <div className='wrapperInfo'>
                                <div className="icon">
                                    <i className="bi bi-bank me-2"></i>
                                </div>
                                <div className="info">
                                    <p className='capital'>Capital:</p>
                                    <p className='capitalName'><b>{capital}</b></p>
                                </div>
                            </div>
                            <div className="infoContainer">
                                <div className='wrapperInfo'>
                                    <div className="icon">
                                        <i className="bi bi-people me-2"></i>
                                    </div>
                                    <div className="info">
                                        <p className='capital'>Population:</p>
                                        <p className='capitalName'><b>{population}</b></p>
                                    </div>
                                </div>
                                <div className='wrapperInfo'>
                                    <div className="icon">
                                        <i className="bi bi-rulers me-2"></i>
                                    </div>
                                    <div className="info">
                                        <p className='capital'>Area:</p>
                                        <p className='capitalName'><b>{area} km²</b></p>
                                    </div>
                                </div>
                                <div className='wrapperInfo'>
                                    <div className="icon">
                                        <i className="bi bi-globe me-2"></i>
                                    </div>
                                    <div className="info">
                                        <p className='capital'>Region:</p>
                                        <p className='capitalName'><b>{region}</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className='wrapperInfo'>
                                <div className="info">
                                    <div className="icon">
                                    <i className="bi bi-bounding-box me-2"></i>
                                        <p className='capital'>Borders with:</p>
                                    </div>
                                    <ul>
                                        {borders.map((country, index) =>
                                            <li className='capitalName' key={index}><b>{country}</b></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center mt-5">
                        <img
                            src={png}
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{ width: 200 }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info