

function remove_carburant() {
    for (let i = 1; i < formulaire.carburant.length; i++) {
        formulaire.carburant.options[i].innerText = '';
    }
}
let boiteDeVitess;
formulaire.véhicule.addEventListener('change', function () {
    let index = formulaire.véhicule.selectedIndex;
    let carburant;

    // choose what is index of véhicule
    switch (index) {
        case 0:
            remove_carburant();
            break;
        case 1:
            remove_carburant();
            carburant = ['Electrique', 'Essence'];
            boiteDeVitess = 'none';
            break;
        case 2:
            remove_carburant();
            carburant = ['Hybirde', 'Essence', 'Diesel'];
            boiteDeVitess = 'Manuelle';
            break;
        case 3:
            remove_carburant();
            carburant = ['Electrique', 'Hybirde', 'Essence', 'Diesel'];
            boiteDeVitess = 'Manuelle';
            break;
        case 4:
            remove_carburant();
            carburant = ['Diesel'];
            boiteDeVitess = 'Manuelle';
            break;
        case 5:
            remove_carburant();
            carburant = ['Hybirde', 'Essence', 'Diesel'];
            boiteDeVitess = 'Automatique';
            break;
        case 6:
            remove_carburant();
            carburant = ['Diesel'];
            boiteDeVitess = 'Automatique';
            break;
        case 7:
            remove_carburant();
            carburant = ['Diesel', 'Essence'];
            boiteDeVitess = 'Manuelle';
            break;
    }

    // fill carburant and boiteDeVitess
    for (let i = 0; i < carburant.length; i++) {
        formulaire.carburant.options[i + 1].innerText = carburant[i];
    }
    formulaire.boiteDeVitess.options[1].innerText = boiteDeVitess;


});



document.querySelector("#select-submit").addEventListener('click', function (event) {
    event.preventDefault();

    // get value of select tags
    let cars = document.querySelector("#select > select:nth-child(3)").value;
    let carcarburant = document.querySelector("#select > select:nth-child(4)").value;
    let day = document.querySelector("#number").value;
    let price;
    console.log(cars);
    console.log(carcarburant);
    console.log(boiteDeVitess);

    // calcule boite de vittes none de moto
    if (boiteDeVitess == 'none') {
        if (cars == 'moto') {
            if (carcarburant == 'Electrique') {
                price = (10 * 0.05) + 10;
            }
            if (carcarburant == 'Essence') {
                price = (10 * 0.14) + 10;
            }
        }
    }
    // calcule boite de vittes auto
    if (boiteDeVitess == 'Automatique') {
        // calcule berlin
        if (cars == 'berlin') {
            if (carcarburant == 'Hybirde') {
                price = ((20 * 0.19) + (20 * 0.09)) + 20;
            }
            if (carcarburant == 'Essence') {
                price = ((20 * 0.19) + (20 * 0.14)) + 20;
            }
            if (carcarburant == 'Diesel') {
                price = ((20 * 0.19) + (20 * 0.21)) + 20;
            }
        }
        // calcule camion
        if (cars == 'camion') {
            if (carcarburant == 'Diesel') {
                price = ((250 * 0.19) + (250 * 0.21)) + 250;
            }
        }
    }
    // calcule boite de vittes manuelle
    if (boiteDeVitess == 'Manuelle') {
        // calcule compact
        if (cars == 'compact') {
            if (carcarburant == 'Hybirde') {
                price = 14 + (14 * 0.09);
            }
            if (carcarburant == 'Essence') {
                price = 14 + (14 * 0.14);
            }
            if (carcarburant == 'Diesel') {
                price = 14 + (14 * 0.21);
            }
        }
        // calcule citadin
        if (cars == 'citadin') {
            if (carcarburant == 'Hybirde') {
                price = 12 + (12 * 0.09);
            }
            if (carcarburant == 'Essence') {
                price = 12 + (12 * 0.14);
            }
            if (carcarburant == 'Diesel') {
                price = 12 + (12 * 0.21);
            }
            if (carcarburant == 'Electrique') {
                price = 12 + (12 * 0.05);
            }
        }
        // calcule utilitaire
        if (cars == 'utilitaire') {
            if (carcarburant == 'Diesel') {
                price = 16 + (16 * 0.21);
            }
        }
        // calcule engin de chantier
        if (cars == 'engin de chantier') {
            if (carcarburant == 'Diesel') {
                price = 900 + (900 * 0.21);
            }
            if (carcarburant == 'Essence') {
                price = 900 + (900 * 0.14);
            }
        }
    }

    price = price * day;
    console.log(price);
    Swal.fire('Good job!', `Le prix: ${price} `, 'success');


});
