window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    console.log(key);
    switch(key) {
        case 65: // a
            transition_down();
            break;
        case 80: // p
            transition_to('/section_parts/projects', 0);
            break;
        case 87: // w
            transition_to('/section_parts/websites', 1);
            break;
        case 84: // t
            transition_to('/section_parts/themes', 2);
            break;
        case 67: // c
            transition_to('/section_parts/contact', 3);
            break;
    }
}
