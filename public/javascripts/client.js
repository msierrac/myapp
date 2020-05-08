console.log('Client-side code running');

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        const button = document.getElementById('yahtzeeLikes');
        button.addEventListener('click', function(e) {
            console.log('button was clicked');
        });
    }
});


/*
function init() {
    let gofishLikes = document.getElementById('gofishLikes');
    let count = 0;
    gofishLikes.addEventListener('click', function (e) {
        function onClick() {
            count += 1;
            console.log(count);
        }
    });
}*/

