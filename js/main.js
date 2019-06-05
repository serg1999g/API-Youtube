//    This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//    This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640'
    });
}

let btn = document.querySelector('button'),
    url = document.querySelector('#url');



btn.addEventListener("click", function () {


    if (url.value.indexOf("=") > 0) {
        let id = url.value.split('='),
            playlist_id = id[1].split('&')[0];
        /* console.log(id); */
        player.loadVideoByUrl("http://www.youtube.com/v/" + playlist_id);
    } else {
        let id = url.value.split('e/');
        /* console.log(id); */
        player.loadVideoByUrl("http://www.youtube.com/v/" + id[1]);
    }

});