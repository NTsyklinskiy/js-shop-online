const DashboardMenu = {
  render: (props) => {
    return `
    <div class="dashboard-menu">
      <ul>
        <li class="${props.selected === 'dashboard' ? 'selected' : ''}">
          <a href="/#/dashboard">Панель Администратора</a>
        </li>
        <li class="${props.selected === 'orders' ? 'selected' : ''}">
          <a href="/#/orderlist">Заказы</a>
        </li>
        <li class="${props.selected === 'products' ? 'selected' : ''}">
          <a href="/#/productlist">Продукты</a>
        </li>
      </ul>
    </div>
    `;
  },
};
export default DashboardMenu;
