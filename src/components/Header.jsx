export default function Header({ date, editor }) {
    return (
        <header>
            <h1 className="title">Spelling Bee</h1>
            <p className="date">{date}</p>
            <p className="editor">Game Edited By {editor}</p>
        </header>
    )
}