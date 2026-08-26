import './AuthForms.css'

export function SignUpForm() {
    return (
        <div className="auth">
            <div className="auth__card">
                <div className="auth__logo">
                    <img src="/Logo.png" alt="Nexcent" />
                </div>

                <h2 className="auth__title">Створити акаунт</h2>
                <p className="auth__subtitle">Це займе менше хвилини</p>

                <form>
                    <div className="auth__field">
                        <label htmlFor="name">Ім'я</label>
                        <input id="name" type="text" placeholder="Ваше ім'я" />
                    </div>

                    <div className="auth__field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="name@example.com" required />
                    </div>

                    <div className="auth__field">
                        <label htmlFor="password">Пароль</label>
                        <input id="password" type="password" placeholder="Мінімум 6 символів" required minLength={6} />
                    </div>

                    <button type="submit" className="auth__submit">Зареєструватись</button>
                </form>

                <p className="auth__switch">
                    Вже є акаунт?
                    <a className="auth__switch-link" href="#">Увійти</a>
                </p>
            </div>
        </div>
    );
}
