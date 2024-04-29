let allProducts = [];

function generateContactList(namejson){
    let name = `${namejson}.json`
    fetch(name)
    .then(response => response.json())
    .then(data => {
        allProducts = data; // перезаписываем данные в массиве allProducts
        generateContactListMarkup(); // вызываем функцию для генерации разметки после получения данных
    })
    .catch(error => console.error('Ошибка при загрузке данных:', error));
}


function generateContactListMarkup() {
    let html = '';
    for (let i = 0; i < allProducts.length; i++) {
        html += `
        <tr>
        <td>${allProducts[i].sguf !== null ? allProducts[i].sguf : ''}</td>
        <td>${allProducts[i].nomePrestador !== null ? allProducts[i].nomePrestador : ''}</td>
        <td>${allProducts[i].noWebSite !== null ? allProducts[i].noWebSite : ''}</td>
        <td>${allProducts[i].nuTelefone !== null ? allProducts[i].nuTelefone : ''}</td>
        <td>${allProducts[i].noLocalidade !== null ? allProducts[i].noLocalidade : ''}</td>
        <td>${allProducts[i].municipio !== null ? allProducts[i].municipio : ''}</td>
        <td>${allProducts[i].noBairro !== null ? allProducts[i].noBairro : ''}</td>
        <td>${allProducts[i].noLogradouro !== null ? allProducts[i].noLogradouro : ''}</td>
        <td>${allProducts[i].complemento !== null ? allProducts[i].complemento : ''}</td>
        <td>${allProducts[i].nuCep !== null ? allProducts[i].nuCep : ''}</td>
        ${
            allProducts[i].atividadeRedeSociais !== null ?
            `<td><a href="${allProducts[i].atividadeRedeSociais}">${allProducts[i].atividadeRedeSociais}</a></td>` : `<td></td>`
        }
        </tr>
      `;
    };
    document.getElementById('data-table').innerHTML = html;
}

document.getElementById('button1').addEventListener('click', () => generateContactList('cadastur'));
document.getElementById('button2').addEventListener('click', () => generateContactList('cadasturAC'));
// document.getElementById('button3').addEventListener('click', () => generateContactList('cadastur2'));
// document.getElementById('button4').addEventListener('click', () => generateContactList('cadastur3'));
// document.addEventListener('DOMContentLoaded', () => {
//     // Оставляем пустую функцию, так как данные будут загружаться асинхронно и обработаны в функции generateContactListMarkup()
//   });