const CheckoutSteps = {
  render: (props) => {
    return `
    <div class="checkout-steps">
      <div class="${props.step1 ? 'active' : ''}">Вход</div>
      <div class="${props.step2 ? 'active' : ''}">Адрес</div>
      <div class="${props.step3 ? 'active' : ''}">Способ Оплты</div>
      <div class="${props.step4 ? 'active' : ''}">Разместить заказ</div>
    </div>
    `;
  },
};
export default CheckoutSteps;
