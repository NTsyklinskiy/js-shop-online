import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 
  <div class="brand">
    <a href="/#/">ShopOnline</a>
  </div>
  <div>
  ${
    name
      ? `<a href="/#/profile">${name}</a>`
      : `<a href="/#/signin">Вход</a>`
  }    
    <a href="/#/cart">Каталог</a>
    ${isAdmin ? `<a href="/#/dashboard">Панель Администратора</a>` : ''}
  </div>`;
  },
  after_render: () => {},
};
export default Header;
