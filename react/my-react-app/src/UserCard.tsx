import "./UserCard.css"

export function UserCard() {
const handleFollow = () => {
    alert('Followed');
};

return (
    <div className="card">
        <img src="http://localhost:5173/vite.svg" alt="Avatar" className="avatar" />
        <h2>Razif Fadhil Akbar</h2>
        <p>Web Developer</p>
        <button onClick={handleFollow}>Follow</button>
        </div>
)
}