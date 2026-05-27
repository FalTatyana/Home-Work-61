interface Props {
    name: string
    onclick: () => void
}

const List = ({ name, onclick }: Props) => {
    return (
        <li
            className="list-group-item cursor-pointer"
            role="button"
            onClick={onclick}
        >
            {name}
        </li>
    )
}

export default List