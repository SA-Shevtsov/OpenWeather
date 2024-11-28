const dataMinsk = {
    id: 625143,
    name: "Minsk",
    state: "",
    country: "BY",
    coord: {
        lon: 27.566668,
        lat: 53.900002
    }
};

const dataBrest = {
    id: 629634,
    name: "Brest",
    state: "",
    country: "BY",
    coord: {
        lon: 23.700001,
        lat: 52.099998
    }
};

const dataVitebsk = {
    id: 620127,
    name: "Vitebsk",
    state: "",
    country: "BY",
    coord: {
        lon: 30.2033,
        lat: 55.190479
    }
};

const dataHomyel = {
    id: 627907,
    name: "Homyel",
    state: "",
    country: "BY",
    coord: {
        lon: 30.975401,
        lat: 52.434502
    }
};

const dataHrodna = {
    id: 627904,
    name: "Hrodna",
    state: "",
    country: "BY",
    coord: {
        lon: 23.8258,
        lat: 53.6884
    }
};

const dataMahilyow = {
    id: 625072,
    name: "Mahilyow",
    state: "",
    country: "BY",
    coord: {
        lon: 53.9139,
        lat: 30.3364
    }
};

const urlCities = {
    Minsk: 'https://api.openweathermap.org/data/2.5/weather?id=625143&appid=65b02267903d6b2c6c8c64d34eb3128d',
    Brest : 'https://api.openweathermap.org/data/2.5/weather?id=629634&appid=65b02267903d6b2c6c8c64d34eb3128d',
    Vitebsk: 'https://api.openweathermap.org/data/2.5/weather?id=620127&appid=65b02267903d6b2c6c8c64d34eb3128d',
    Gomel: 'https://api.openweathermap.org/data/2.5/weather?id=627907&appid=65b02267903d6b2c6c8c64d34eb3128d',
    Grodno: 'https://api.openweathermap.org/data/2.5/weather?id=627904&appid=65b02267903d6b2c6c8c64d34eb3128d',
    Mogilev: 'https://api.openweathermap.org/data/2.5/weather?id=625072&appid=65b02267903d6b2c6c8c64d34eb3128d'
}

const backGrounds = {
    0: "url('./img/img__background/item_01.jpg')",
    1: "url('./img/img__background/item_02.jpg')",
    2: "url('./img/img__background/item_03.jpg')",
    3: "url('./img/img__background/item_04.jpg')",
    4: "url('./img/img__background/item_05.jpg')",
    5: "url('./img/img__background/item_06.jpg')",
    6: "url('./img/img__background/item_07.jpg')",
    7: "url('./img/img__background/item_08.jpg')",
    8: "url('./img/img__background/item_09.jpg')",
    9: "url('./img/img__background/item_10.jpg')",
    10: "url('./img/img__background/item_11.jpg')",
    11: "url('./img/img__background/item_12.jpg')"
}

const icons = {
    '01d': "./img/img__icon-svg/01d.svg",  //clear sky
    '01n': "./img/img__icon-svg/01n.svg",  //clear sky

    '02d': "./img/img__icon-svg/02d.svg",  //few clouds
    '02n': "./img/img__icon-svg/02n.svg",  //few clouds

    '03d': "./img/img__icon-svg/03dn.svg",  //scattered clouds
    '03n': "./img/img__icon-svg/03dn.svg",  //scattered clouds

    '04d': "./img/img__icon-svg/04dn.svg",  //broken clouds
    '04n': "./img/img__icon-svg/04dn.svg",  //broken clouds

    '09d': "./img/img__icon-svg/09dn.svg",  //shower rain
    '09n': "./img/img__icon-svg/09dn.svg",  //shower rain

    '10d': "./img/img__icon-svg/10d.svg",   //rain
    '10n': "./img/img__icon-svg/10n.svg",   //rain

    '11d': "./img/img__icon-svg/11dn.svg",  //thunderstorm
    '11n': "./img/img__icon-svg/11dn.svg",  //thunderstorm

    '13d': "./img/img__icon-svg/13dn.svg",  //snow
    '13n': "./img/img__icon-svg/13dn.svg",  //snow

    '50d': "./img/img__icon-svg/50d.svg",  //mist
    '50n': "./img/img__icon-svg/50n.svg"  //mist
}