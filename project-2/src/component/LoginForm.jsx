import './AuthForms.css'

export function LoginForm({ onClose, onSwitchToSignUp }) {
    return (
        <div className="auth" onClick={onClose}>
            <div className="auth__card" onClick={(e) => e.stopPropagation()}>
                <button className="auth__close" onClick={onClose}>×</button>

                <div className="auth__logo">
                    <img src="/Logo.png" alt="Nexcent" />
                </div>

                <h2 className="auth__title">Ласкаво просимо</h2>
                <p className="auth__subtitle">Увійдіть, щоб продовжити</p>

                <form>
                    <div className="auth__field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="name@example.com" required />
                    </div>

                    <div className="auth__field">
                        <label htmlFor="password">Пароль</label>
                        <input id="password" type="password" placeholder="••••••••" required />
                    </div>

                    <button type="submit" className="auth__submit">Увійти</button>
                </form>

                <p className="auth__switch">
                    Немає акаунту?
                    <a className="auth__switch-link" onClick={onSwitchToSignUp}>Зареєструватись</a>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;