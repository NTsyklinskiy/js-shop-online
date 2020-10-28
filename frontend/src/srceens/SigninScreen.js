import { signin } from '../api';
import { getUserInfo, setUserInfo } from '../localStorage';
import { showLoading, hideLoading, showMessage, redirectUser } from '../utils';

const SigninScreen = {
  after_render: () => {
    document
      .getElementById('signin-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading();
        const data = await signin({
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
      <form id="signin-form">
        <ul class="form-items">
          <li>
            <h1>Вход</h1>
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
            <button type="submit" class="primary">Войти</button>
          </li>
          <li>
            <div>
            Новый пользователь?
              <a href="/#/register">Создать учетную запись
              </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },
};
export default SigninScreen;
