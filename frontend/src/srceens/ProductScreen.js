import { parseRequestUrl, showLoading, hideLoading } from '../utils';
import { getProduct } from '../api';
import Rating from '../components/Rating';

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById('add-button').addEventListener('click', () => {
      document.location.hash = `/cart/${request.id}`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    showLoading();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    hideLoading();
    return `
    <div class="content">
      <div class="back-to-result">
        <a href="/#/">Вернуться</a>
      </div>
      <div class="details">
        <div class="details-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="details-info">
          <ul>
            <li>
              <h1>${product.name}</h1>
            </li>
            <li>
            ${Rating.render({
              value: product.rating,
              text: `${product.numReviews} reviews`,
            })}
            </li>
            <li>
              Цена: <strong>$${product.price}</strong>
            </li>
            <li>
            Описание:
              <div>
                ${product.description}
              </div>
            </li>
          </ul>
        </div>
        <div class="details-action">
            <ul>
              <li>
                Цена: $${product.price}
              </li>
              <li>
                Статус: 
                  ${
                    product.countInStock > 0
                      ? `<span class="success">В наличии</span>`
                      : `<span class="error">Недоступен</span>`
                  }
              </li>
              <li>
                  <button id="add-button" class="fw primary">Добавить в корзину</div>
            </ul>
        </div>
      </div>
    </div>`;
  },
};
export default ProductScreen;
