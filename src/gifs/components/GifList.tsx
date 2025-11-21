import type { Gif } from "../interfaces/gif.interface"


interface Props {
    mockGifs: Gif[]
}


export const GifList = ({ mockGifs }: Props) => {
    return (
        <div className="gifs-container">
            {
                mockGifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}x{gif.height} ( 1.5mb )
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
