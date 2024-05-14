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
        // formattedPhoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
        formattedPhoneNumber = "".concat(phoneNumber.substring(0, 2)).concat(phoneNumber.substring(2, 7)).concat(phoneNumber.substring(7));
      } else if (phoneNumber !== null) {
        formattedPhoneNumber = allProducts[i].nuTelefone;
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

function generateContactListCroatia(namejson) {
  var name = "".concat(namejson, ".json");
  fetch(name).then(function (response) {
    return response.json();
  }).then(function (data) {
    allProducts = data; // перезаписываем данные в массиве allProducts

    generateContactListMarkupCroatia(); // вызываем функцию для генерации разметки после получения данных
  })["catch"](function (error) {
    return console.error('Ошибка при загрузке данных:', error);
  });
}

function generateContactListMarkupCroatia() {
  var html = '';

  for (var i = 0; i < allProducts.length; i++) {
    var rowNumber = i + 1; // Номер строки по порядку

    var phoneNumber = allProducts[i].POI_Phone;
    phoneNumber = phoneNumber.replace(/\++/g, '+'); // Замена "++" на "+"

    phoneNumber = phoneNumber.replace(/,/g, ', '); // Замена "," на ", "

    html += "\n        <tr>\n        <td>".concat(rowNumber, "</td>\n        <td>Agency</td>\n        <td>Croatia</td>\n        <td></td>\n        <td>").concat(allProducts[i].Title !== null ? allProducts[i].Title : '', "</td>\n        <td class=\"web_site\">").concat(allProducts[i].POI_WebAddress !== null ? allProducts[i].POI_WebAddress : '', "</td>\n        <td>").concat(phoneNumber, "</td>\n        <td>").concat(allProducts[i].POI_Email !== null ? allProducts[i].POI_Email : '', "</td>\n        <td>").concat(allProducts[i].POI_City.Title !== null ? allProducts[i].POI_City.Title : '', "</td>\n        <td>").concat(allProducts[i].POI_Address !== null ? allProducts[i].POI_Address : '', "</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        </tr>\n      ");
  }

  ;
  document.getElementById('data-table').innerHTML = html;
}

document.getElementById('button01').addEventListener('click', function () {
  return generateContactListCroatia('croatia');
});
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
});
document.getElementById('button5').addEventListener('click', function () {
  return generateContactList('cadasturBA');
});
document.getElementById('button6').addEventListener('click', function () {
  return generateContactList('cadasturCE');
});
document.getElementById('button7').addEventListener('click', function () {
  return generateContactList('cadasturDF');
});
document.getElementById('button8').addEventListener('click', function () {
  return generateContactList('cadasturES');
});
document.getElementById('button9').addEventListener('click', function () {
  return generateContactList('cadasturGO');
});
document.getElementById('button10').addEventListener('click', function () {
  return generateContactList('cadasturMA');
});
document.getElementById('button11').addEventListener('click', function () {
  return generateContactList('cadasturMG');
}); // document.getElementById('button12').addEventListener('click', () => generateContactList('cadastur'));
// async function readJsonFile(filename) {
//     try {
//         const response = await fetch(filename);
//         if (!response.ok) {
//             throw new Error('Failed to fetch file');
//         }
//         return await response.json();
//     } catch (err) {
//         console.error('Error reading JSON file:', err);
//         return null;
//     }
// }
// function checkDuplicates(jsonArray) {
//     const idSet = new Set();
//     const duplicates = [];
//     jsonArray.forEach(item => {
//         if (idSet.has(item.id)) {
//             duplicates.push(item);
//         } else {
//             idSet.add(item.id);
//         }
//     });
//     return duplicates;
// }
// const filename = 'cadasturMG.json';
// readJsonFile(filename)
//     .then(jsonData => {
//         if (jsonData) {
//             const duplicateRecords = checkDuplicates(jsonData);
//             if (duplicateRecords.length > 0) {
//                 console.log('Найдены повторяющиеся записи:');
//                 console.log(duplicateRecords);
//             } else {
//                 console.log('Повторяющихся записей не найдено.');
//             }
//         }
//     })
//     .catch(err => console.error('Error:', err));