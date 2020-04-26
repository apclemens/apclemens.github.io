var current_phrase;

function anagram(front) {
    if (front) {
        current_phrase = 'andrew clemens';
    } else {
        var item;
        do {
            item = Object.keys(translations)[Math.floor(Math.random() * Object.keys(translations).length)]
        } while (item == current_phrase || item == 'andrew clemens');
        current_phrase = item;
    }
    $('#header a span').each(function(index) {
        $(this).css('transform', 'translateX('+translations[current_phrase][$(this).attr('class')]+'px)')
    })
}

translations = {
    'crewmen sandle': {
        'c': -182,
        'r': -73,
        'e2': -194,
        'w': -89,
        'm': -176,
        'e3': -185,
        'n1': 109,
        's': -188,
        'a': 193,
        'n2': -115,
        'd': 179,
        'l': 54,
        'e1': 159
    },
    'andrew clemens': {
        'a': 0,
        'n1': -6,
        'd': -12,
        'r': -18,
        'e1': -24,
        'w': -30,
        'c': -30,
        'l': -36,
        'e2': -42,
        'm': -48,
        'e3': -54,
        'n2': -60,
        's': -66
    },
    'newsmen cradle': {
        'n1': -34,
        'e2': -211,
        'w': -105,
        's': -295,
        'm': -173,
        'e3': -181,
        'n2': -187,
        'c': 3,
        'r': 113,
        'a': 223,
        'd': 183,
        'l': 59,
        'e1': 165
    },
    'we mend lancers': {
        'w': -147,
        'e1': -91,
        'm': -198,
        'e3': -207,
        'n1': 87,
        'd': 80,
        'l': -32,
        'a': 191,
        'n2': -117,
        'c': 59,
        'e2': 33,
        'r': 194,
        's': -57
    },
    'dense men crawl': {
        'd': -66,
        'e2': -210,
        'n1': 13,
        's': -294,
        'e3': -144,
        'm': -137,
        'e1': -30,
        'n2': -147,
        'c': 42,
        'r': 152,
        'a': 261,
        'w': 135,
        'l': 98
    },
    /*
    'lends new cream': {
    }
    */
}
