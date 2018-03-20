window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    console.log(key);
    switch(key) {
        case 65: // a
            transition_down();
            break;
        case 80: // p
            transition_to('projects.txt', 0);
            break;
        case 87: // w
            transition_to('websites.txt', 1);
            break;
        case 84: // t
            transition_to('themes.txt', 2);
            break;
        case 67: // c
            transition_to('contact.txt', 3);
            break;
    }
}
