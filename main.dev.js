"use strict";

var allProducts = [];

function generateContactList(namejson) {
  var name = "".concat(namejson, ".json");
  fetch(name).then(function (response) {
    return response.json();
  }).then(function (data) {
    allProducts = data; // перезаписываем данные в массиве allProducts

    generateContactListMarkup(); // вызываем функцию для генерации разметки после получения данных
  })["catch"](function (error) {
    return console.error('Ошибка при загрузке данных:', error);
  });
}

function generateContactListMarkup() {
  var html = '';

  for (var i = 0; i < allProducts.length; i++) {
    html += "\n        <tr>\n        <td>".concat(allProducts[i].sguf !== null ? allProducts[i].sguf : '', "</td>\n        <td>").concat(allProducts[i].nomePrestador !== null ? allProducts[i].nomePrestador : '', "</td>\n        <td>").concat(allProducts[i].noWebSite !== null ? allProducts[i].noWebSite : '', "</td>\n        <td>").concat(allProducts[i].nuTelefone !== null ? allProducts[i].nuTelefone : '', "</td>\n        <td>").concat(allProducts[i].noLocalidade !== null ? allProducts[i].noLocalidade : '', "</td>\n        <td>").concat(allProducts[i].municipio !== null ? allProducts[i].municipio : '', "</td>\n        <td>").concat(allProducts[i].noBairro !== null ? allProducts[i].noBairro : '', "</td>\n        <td>").concat(allProducts[i].noLogradouro !== null ? allProducts[i].noLogradouro : '', "</td>\n        <td>").concat(allProducts[i].complemento !== null ? allProducts[i].complemento : '', "</td>\n        <td>").concat(allProducts[i].nuCep !== null ? allProducts[i].nuCep : '', "</td>\n        ").concat(allProducts[i].atividadeRedeSociais !== null ? "<td><a href=\"".concat(allProducts[i].atividadeRedeSociais, "\">").concat(allProducts[i].atividadeRedeSociais, "</a></td>") : "<td></td>", "\n        </tr>\n      ");
  }

  ;
  document.getElementById('data-table').innerHTML = html;
}

document.getElementById('button1').addEventListener('click', function () {
  return generateContactList('cadastur');
});
document.getElementById('button2').addEventListener('click', function () {
  return generateContactList('cadasturAC');
}); // document.getElementById('button3').addEventListener('click', () => generateContactList('cadastur2'));
// document.getElementById('button4').addEventListener('click', () => generateContactList('cadastur3'));
// document.addEventListener('DOMContentLoaded', () => {
//     // Оставляем пустую функцию, так как данные будут загружаться асинхронно и обработаны в функции generateContactListMarkup()
//   });