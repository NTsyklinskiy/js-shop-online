import { register } from '../api';
import { getUserInfo, setUserInfo } from '../localStorage';
import { showLoading, hideLoading, showMessage, redirectUser } from '../utils';

const RegisterScreen = {
  after_render: () => {
    document
      .getElementById('register-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading();
        const data = await register({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfo(data);
          redirectUser();
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }
    return `
    <div class="form-container">
      <form id="register-form">
        <ul class="form-items">
          <li>
            <h1>Регистрация</h1>
          </li>
          <li>
            <label for="name">Логин</label>
            <input type="name" name="name" id="name" />
          </li>
          <li>
            <label for="email">Почта</label>
            <input type="email" name="email" id="email" />
          </li>
          <li>
            <label for="password">Пароль</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <label for="repassword">Повторите Пароль</label>
            <input type="password" name="repassword" id="repassword" />
          </li>
          <li>
            <button type="submit" class="primary">Регистрация</button>
          </li>
          <li>
            <div>
            Уже есть аккаунт?
              <a href="/#/signin">Войти</a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },
};
export default RegisterScreen;
