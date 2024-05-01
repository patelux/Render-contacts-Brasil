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
        // Форматирование номера телефона в виде (XX) XXXXX-XXXX
        let formattedPhoneNumber = '';
        if (allProducts[i].nuTelefone !== null) {
            const phoneNumber = allProducts[i].nuTelefone.trim();
            if (phoneNumber.length === 11) {
                formattedPhoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
            }
        }

        const nomePrestador = allProducts[i].nomePrestador !== null ? allProducts[i].nomePrestador : '';
        const registroRf = allProducts[i].registroRf !== null ? allProducts[i].registroRf : '';
        const prestadorName = nomePrestador.includes('*') ? registroRf : nomePrestador;

        html += `
        <tr>
        <td>${allProducts[i].sguf !== null ? allProducts[i].sguf : ''}</td>
        <td>${prestadorName}</td>
        <td class="web_site">${allProducts[i].noWebSite !== null ? allProducts[i].noWebSite : ''}</td>
        <td>${formattedPhoneNumber}</td>
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

document.getElementById('button1').addEventListener('click', () => generateContactList('cadasturAC'));
document.getElementById('button2').addEventListener('click', () => generateContactList('cadasturAL'));
document.getElementById('button3').addEventListener('click', () => generateContactList('cadasturAM'));

// document.getElementById('button4').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button5').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button6').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button7').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button8').addEventListener('click', () => generateContactList('cadasturAL'));
// document.getElementById('button9').addEventListener('click', () => generateContactList('cadasturAL'));