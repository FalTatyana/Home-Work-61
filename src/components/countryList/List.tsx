import './List.css'

interface Props {
    name: string
    onclick: () => void
    png: string
}

const List = ({ name, onclick, png }: Props) => {
    return (
        <li
            className="list-group-item cursor-pointer p-3"
            role="button"
            onClick={onclick}
        >
            <img
                src={png}
                className="img-fluid rounded-start me-3"
                style={{ width: 20 }}
            />
            {name}
        </li>
    )
}

export default List