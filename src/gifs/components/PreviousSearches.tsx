interface Props {
    searches: string[]
    onLabelClicked: (value: string) => void
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((value) => (
                        <li key={value} onClick={() => onLabelClicked(value)}>
                            {value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
