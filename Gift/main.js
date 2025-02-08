'use strict'

$(document).ready(function () {

    function insertCard(day, gifPicture, subTitle, textBody, class_, qrImage, width, height) {

        const template = `
        <div class="card__inner">
            <div class="card__face card__face--front ${day}">
                <h2>Haz clic</h2>
            </div>
            <div class="card__face card__face--back">
                <div class="card__content">
                    <div class="card__header ${day}__header">
                        <img class="gif" src="./img/${gifPicture}.gif" frameborder="0"></img>
                    </div>
                    <div class="card__body">
                        <h3>${subTitle}</h3>
                        <p>${textBody}</p>
                    </div>
                    <div class="spotify-container ${class_}">
                        <img src="./img/${qrImage}" alt="Spotify" style="width: ${width}; height:${height};">
                    </div>
                </div>
            </div>
        </div>
        `
        return template;

    }



    function insertHugeCard(day, gifPicture, subTitle, textBody) {

        const template = `
        <div class="card__inner">
            <div class="card__face card__face--front ${day}">
                <h2>Haz clic</h2>
            </div>
            <div class="card__face card__face--back">
                <div class="card__content">
                    <div class="card__header ${day}__header">
                        <img class="gif" src="./img/${gifPicture}.gif" frameborder="0"></img>
                    </div>
                    <div class="card__body">
                        <h3>${subTitle}</h3>
                        <p>${textBody}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        return template;

    }


    function greet() {
        
        if (hour < 12) {
            return `<span class="good__morning">¡Buenos dias Usuario!</span>`;
        } else if (hour < 19) {
            return `<span class="good__evening">¡Buenas tardes Usuario!</span>`;
        } else  {
            return `<span class="good__evening">¡Buenas noches Usuario!</span>`;
        }
        
    }


    function buttonSpotifyText() {
        const text = 'No tengo Spotify';
        return text;
    }


    function btnSpotify(text) {
        const template = `
            <div class="spotify-wrap">
                <button type="submit" class="submit">
                    ${text}
                </button>
            </div>
        `
        return template;
    }


    function addSpotifyButton(textInButton, redirect) {
        $('.no-spotify').append(btnSpotify(textInButton));

        $('.submit').click(function (e) { 
            e.preventDefault();
            alert('¿Cómo que no tienes Spotify? No manches, bueno, pulsa "Aceptar" para escuchar la canción en Youtube')
            window.location.href = redirect;
        });
    }


    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hour = new Date().getHours();



    // // MARTES 2 DE MAYO
    // if (date == 26 && month == 3 && year == 2023) {

    //     $('.header').append(greet());

    //     $('.card').append(insertCard(
    //         'tuesday',
    //         'no_today',
    //         'Martes de ...',
    //         'Te dije que no lo abrieras hoy. Regresa mañana para mirar otra tarjeta.',
    //         '',
    //         'viva_la_vida_code.jpeg',
    //         '100%',
    //         'auto'
    //     ));

    //     addSpotifyButton(buttonSpotifyText(), 'https://www.youtube.com/watch?v=dvgZkm1xWPE');

    // }



    // // MIERCOLES 3 DE MAYO
    // if (date == 26 && month == 3 && year == 2023) {

    //     $('.header').append(greet());

    //     $('.card').append(insertCard(
    //         'wednesday',
    //         'destroy_computer',
    //         'Miercoles de ...',
    //         'Descomponer la computadora porque la impresora al parecer ya no la ocupas. Ya te freseas.',
    //         '',
    //         'limitless.jpeg',
    //         '100%',
    //         'auto'
    //     ));

    //     addSpotifyButton(buttonSpotifyText(), 'https://www.google.com');

    // }



    // // JUEVES 4 DE MAYO
    // if (date == 25 && month == 3 && year == 2023) {

    //     $('.header').append(greet());

    //     $('.card').append(insertCard(
    //         'thrusday',
    //         'bear_attacks',
    //         'Jueves de ...',
    //         'Un oso me atacó y por eso llegue tarde al trabajo, se los juro por Dieguito Maradona.',
    //         '',
    //         'dreamers.jpeg',
    //         '100%',
    //         'auto'
    //     ));

    //     addSpotifyButton();

    // }



    // // VIERNES 5 DE MAYO
    // if (date == 25 && month == 3 && year == 2023) {

    //     $('.header').append(greet());

    //     $('.card').append(insertCard(
    //         'friday',
    //         'erin',
    //         'Viernes de ...',
    //         'Celebrar que los franceses no pudieron contra el poderosisimo ejercito mexicano',
    //         '',
    //         'sky_high.jpeg',
    //         '100%',
    //         'auto'
    //     ));

    //     addSpotifyButton();

    // }



    // // SÁBADO 6 DE MAYO
    // if (date == 25 && month == 3 && year == 2023) {

    //     $('.header').append(greet());

    //     $('.card').append(insertCard(
    //         'saturday',
    //         'sleeping_cat',
    //         'Sábado de ...',
    //         'Comer y dormir todo el día, o no sé que hagas tú; igual y tienes clases.',
    //         'qr-code',
    //         'monday.png',
    //         '75%',
    //         '120px'
    //     ));

    // }



    // // DOMINGO 7 DE MAYO
    // if (date == 25 && month == 3 && year == 2023) {

    //     $('.header').append(greet());

    //     $('.card').append(insertCard(
    //         'sunday',
    //         'hurry_cat',
    //         'Domingo de ...',
    //         'Ya falta solo un mes para que termines el servicio social. También pon todo en orden para comenzar bien la semana.',
    //         '',
    //         'on_our_way.jpeg',
    //         '100%',
    //         'auto'
    //     ));

    //     addSpotifyButton();

    // }



    // // LUNES 8 DE MAYO
    // if (date == 25 && month == 3 && year == 2023) {

    //     $('.header').append(greet());

    //     $('.card').append(insertCard(
    //         'monday',
    //         'lazy_cat',
    //         'Lunes de ...',
    //         'Hay que ir a trabajar, ¿Dios por qué me hiciste pobre?',
    //         'qr-code',
    //         'monday.png',
    //         '75%',
    //         '120px'
    //     ));

    // }



    // MARTES 9 DE MAYO

        $('.header').append(greet());

        $('.card').append(insertCard(
            'goodbye',
            'lazy_cat',
            'Martes de ...',
            'Hay que ir a trabajar, ¿Dios por qué me hiciste pobre?',
            'qr-code',
            'monday.png',
            '75%',
            '120px'
        ));

        addSpotifyButton('Perfil de Spotify');



    const card = document.querySelector(".card__inner");

    card.addEventListener("click", function (e) {
        card.classList.toggle('is-flipped');
    });


});

// https://giphy.com/gifs/Bubble-Witch-cats-pets-3oKIPCSX4UHmuS41TG?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=http%3A%2F%2F127.0.0.1%3A5500%2F