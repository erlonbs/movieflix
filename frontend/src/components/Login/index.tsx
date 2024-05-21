import './styles.css';
const Login = () => {
    return (
        <>
        <div className="container">
            <h1>Login</h1>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />

            <button>Fazer Login</button>
        </div>
        </>
    )
}

export default Login