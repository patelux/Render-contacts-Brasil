document.addEventListener("DOMContentLoaded", function() {
    const toTopButton = document.querySelector('.to-top');

    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth'});
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
        let rowNumber = i + 1; // Номер строки по порядку
        let formattedPhoneNumber = '';
        if (allProducts[i].nuTelefone !== null) {
            formattedPhoneNumber = allProducts[i].nuTelefone.trim();
        }

        const nomePrestador = allProducts[i].nomePrestador !== null ? allProducts[i].nomePrestador : '';
        const registroRf = allProducts[i].registroRf !== null ? allProducts[i].registroRf : '';
        const prestadorName = nomePrestador.includes('*') ? registroRf : nomePrestador;

        const nomeEmail = allProducts[i].noLocalidade !== null && allProducts[i].noLocalidade.includes('@') ? allProducts[i].noLocalidade : ''; 

        html += `
        <tr>
        <td>${rowNumber}</td>
        <td>${allProducts[i].atividade !== null ? allProducts[i].atividade : ''}</td>
        <td>${allProducts[i].sguf !== null ? allProducts[i].sguf : ''}</td>
        <td>${allProducts[i].registroRf !== null ? allProducts[i].registroRf : ''}</td>
        <td>${prestadorName}</td>
        <td class="web_site">${allProducts[i].noWebSite !== null ? allProducts[i].noWebSite : ''}</td>
        <td>${formattedPhoneNumber}</td>
        <td>${nomeEmail}</td>
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

function generateContactListCroatia(namejson){
    let name = `${namejson}.json`
    fetch(name)
    .then(response => response.json())
    .then(data => {
        allProducts = data; // перезаписываем данные в массиве allProducts
        generateContactListMarkupCroatia(); // вызываем функцию для генерации разметки после получения данных
    })
    .catch(error => console.error('Ошибка при загрузке данных:', error));
}

function generateContactListMarkupCroatia() {
    
    let html = '';
    for (let i = 0; i < allProducts.length; i++) {
        let rowNumber = i + 1; // Номер строки по порядку
        let phoneNumber = allProducts[i].POI_Phone;       
        phoneNumber = phoneNumber.replace(/\++/g, '+');// Замена "++" на "+"
        phoneNumber = phoneNumber.replace(/,/g, ', ');// Замена "," на ", "
        html += `
        <tr>
        <td>${rowNumber}</td>
        <td>Agency</td>
        <td>Croatia</td>
        <td></td>
        <td>${allProducts[i].Title !== null ? allProducts[i].Title : ''}</td>
        <td class="web_site">${allProducts[i].POI_WebAddress !== null ? allProducts[i].POI_WebAddress : ''}</td>
        <td>${phoneNumber}</td>
        <td>${allProducts[i].POI_Email !== null ? allProducts[i].POI_Email : ''}</td>
        <td>${allProducts[i].POI_City.Title !== null ? allProducts[i].POI_City.Title : ''}</td>
        <td>${allProducts[i].POI_Address !== null ? allProducts[i].POI_Address : ''}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
      `;
    };
    document.getElementById('data-table').innerHTML = html;
}
document.getElementById('button01').addEventListener('click', () => generateContactListCroatia('croatia'));
document.getElementById('button1').addEventListener('click', () => generateContactList('cadasturAC'));
document.getElementById('button2').addEventListener('click', () => generateContactList('cadasturAL'));
document.getElementById('button3').addEventListener('click', () => generateContactList('cadasturAM'));
document.getElementById('button4').addEventListener('click', () => generateContactList('cadasturAP'));
document.getElementById('button5').addEventListener('click', () => generateContactList('cadasturBA'));
document.getElementById('button6').addEventListener('click', () => generateContactList('cadasturCE'));
document.getElementById('button7').addEventListener('click', () => generateContactList('cadasturDF'));
document.getElementById('button8').addEventListener('click', () => generateContactList('cadasturES'));
document.getElementById('button9').addEventListener('click', () => generateContactList('cadasturGO'));
document.getElementById('button10').addEventListener('click', () => generateContactList('cadasturMA'));
document.getElementById('button11').addEventListener('click', () => generateContactList('cadasturMG'));
document.getElementById('button12').addEventListener('click', () => generateContactList('cadasturMS'));
document.getElementById('button13').addEventListener('click', () => generateContactList('cadasturMT'));
document.getElementById('button14').addEventListener('click', () => generateContactList('cadasturPA'));
// document.getElementById('button15').addEventListener('click', () => generateContactList('cadastur'));
// document.getElementById('button16').addEventListener('click', () => generateContactList('cadastur'));
// document.getElementById('button17').addEventListener('click', () => generateContactList('cadastur'));
// document.getElementById('button18').addEventListener('click', () => generateContactList('cadastur'));
// document.getElementById('button19').addEventListener('click', () => generateContactList('cadastur'));
// document.getElementById('button20').addEventListener('click', () => generateContactList('cadastur'));
// document.getElementById('button21').addEventListener('click', () => generateContactList('cadastur'));



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
