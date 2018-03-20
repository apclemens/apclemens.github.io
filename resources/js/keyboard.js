window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    console.log(key);
    switch(key) {
        case 65: // a
            transition_down(true);
            break;
        case 80: // p
            transition_to('/section_parts/projects', 0, '/projects', 'projects - andrew clemens', true);
            break;
        case 87: // w
            transition_to('/section_parts/websites', 1, '/websites', 'websites - andrew clemens', true);
            break;
        case 84: // t
            transition_to('/section_parts/themes', 2, '/themes', 'themes - andrew clemens', true);
            break;
        case 67: // c
            transition_to('/section_parts/contact', 3, '/contact', 'contact - andrew clemens', true);
            break;
    }
}
