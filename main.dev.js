"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var toTopButton = document.querySelector('.to-top');

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (toTopButton) {
    toTopButton.addEventListener('click', scrollToTop);
  }

  function toggleToTopButton() {
    if (window.scrollY > 100) {
      toTopButton.classList.add('active');
    } else {
      toTopButton.classList.remove('active');
    }
  }

  window.addEventListener('scroll', toggleToTopButton);
  toggleToTopButton();
});
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
    var rowNumber = i + 1; // Номер строки по порядку

    var formattedPhoneNumber = '';

    if (allProducts[i].nuTelefone !== null) {
      var phoneNumber = allProducts[i].nuTelefone.trim();

      if (phoneNumber.length === 11) {
        formattedPhoneNumber = "(".concat(phoneNumber.substring(0, 2), ") ").concat(phoneNumber.substring(2, 7), "-").concat(phoneNumber.substring(7));
      }
    }

    var nomePrestador = allProducts[i].nomePrestador !== null ? allProducts[i].nomePrestador : '';
    var registroRf = allProducts[i].registroRf !== null ? allProducts[i].registroRf : '';
    var prestadorName = nomePrestador.includes('*') ? registroRf : nomePrestador;
    var nomeEmail = allProducts[i].noLocalidade !== null && allProducts[i].noLocalidade.includes('@') ? allProducts[i].noLocalidade : '';
    html += "\n        <tr>\n        <td>".concat(rowNumber, "</td>\n        <td>").concat(allProducts[i].atividade !== null ? allProducts[i].atividade : '', "</td>\n        <td>").concat(allProducts[i].sguf !== null ? allProducts[i].sguf : '', "</td>\n        <td>").concat(allProducts[i].registroRf !== null ? allProducts[i].registroRf : '', "</td>\n        <td>").concat(prestadorName, "</td>\n        <td class=\"web_site\">").concat(allProducts[i].noWebSite !== null ? allProducts[i].noWebSite : '', "</td>\n        <td>").concat(formattedPhoneNumber, "</td>\n        <td>").concat(nomeEmail, "</td>\n        <td>").concat(allProducts[i].municipio !== null ? allProducts[i].municipio : '', "</td>\n        <td>").concat(allProducts[i].noBairro !== null ? allProducts[i].noBairro : '', "</td>\n        <td>").concat(allProducts[i].noLogradouro !== null ? allProducts[i].noLogradouro : '', "</td>\n        <td>").concat(allProducts[i].complemento !== null ? allProducts[i].complemento : '', "</td>\n        <td>").concat(allProducts[i].nuCep !== null ? allProducts[i].nuCep : '', "</td>\n        ").concat(allProducts[i].atividadeRedeSociais !== null ? "<td><a href=\"".concat(allProducts[i].atividadeRedeSociais, "\">").concat(allProducts[i].atividadeRedeSociais, "</a></td>") : "<td></td>", "\n        </tr>\n      ");
  }

  ;
  document.getElementById('data-table').innerHTML = html;
}

document.getElementById('button1').addEventListener('click', function () {
  return generateContactList('cadasturAC');
});
document.getElementById('button2').addEventListener('click', function () {
  return generateContactList('cadasturAL');
});
document.getElementById('button3').addEventListener('click', function () {
  return generateContactList('cadasturAM');
});
document.getElementById('button4').addEventListener('click', function () {
  return generateContactList('cadasturAP');
}); // document.getElementById('button5').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button6').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button7').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button8').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button9').addEventListener('click', () => generateContactList('cadasturAL'));