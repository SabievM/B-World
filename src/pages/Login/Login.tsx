import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="container">
            <h2>Авторизация</h2>
            <div className="inputs">
                <input type="text" placeholder='Имя'/>
                <input type="text" placeholder='Пароль'/>
            </div>
            <button className="btn">
                Авторизоваться
            </button>
        </div>
    </div>
  )
}

export default Login