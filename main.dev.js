"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var allProducts = [];
fetch('cadastur.json').then(function (response) {
  return response.json();
}).then(function (data) {
  allProducts.push.apply(allProducts, _toConsumableArray(data)); // добавляем данные в массив allProducts

  generateContactListMarkup(); // вызываем функцию для генерации разметки после получения данных
})["catch"](function (error) {
  return console.error('Ошибка при загрузке данных:', error);
});

function generateContactListMarkup() {
  var html = '';

  for (var i = 0; i < allProducts.length; i++) {
    html += "\n        <tr>\n        <td>".concat(allProducts[i].sguf !== null ? allProducts[i].sguf : '', "</td>\n        <td>").concat(allProducts[i].nomePrestador !== null ? allProducts[i].nomePrestador : '', "</td>\n        <td>").concat(allProducts[i].noWebSite !== null ? allProducts[i].noWebSite : '', "</td>\n        <td>").concat(allProducts[i].nuTelefone !== null ? allProducts[i].nuTelefone : '', "</td>\n        <td>").concat(allProducts[i].noLocalidade !== null ? allProducts[i].noLocalidade : '', "</td>\n        <td>").concat(allProducts[i].municipio !== null ? allProducts[i].municipio : '', "</td>\n        <td>").concat(allProducts[i].noBairro !== null ? allProducts[i].noBairro : '', "</td>\n        <td>").concat(allProducts[i].noLogradouro !== null ? allProducts[i].noLogradouro : '', "</td>\n        <td>").concat(allProducts[i].complemento !== null ? allProducts[i].complemento : '', "</td>\n        <td>").concat(allProducts[i].nuCep !== null ? allProducts[i].nuCep : '', "</td>\n        ").concat(allProducts[i].atividadeRedeSociais !== null ? "<td><a href=\"".concat(allProducts[i].atividadeRedeSociais, "\">").concat(allProducts[i].atividadeRedeSociais, "</a></td>") : "<td></td>", "\n        </tr>\n      ");
  }

  ;
  document.getElementById('data-table').innerHTML = html;
} // document.addEventListener('DOMContentLoaded', generateProductListMarkup);


document.addEventListener('DOMContentLoaded', function () {// Оставляем пустую функцию, так как данные будут загружаться асинхронно и обработаны в функции generateContactListMarkup()
});