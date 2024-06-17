var slides = [
    {
        imageUrl: 'https://i.ytimg.com/vi/HdBPNB8DNkU/maxresdefault.jpg',
        no: 0
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/DmWaypZgf5o/maxresdefault.jpg',
        no: 1
    },
    {
        imageUrl: 'https://i.pinimg.com/originals/1d/09/61/1d096198e70dfa91164a2d59d9c64baf.jpg',
        no: 2
    },
    {
        imageUrl: "https://i.ytimg.com/vi/DagS1J3oAeA/maxresdefault.jpg",
        no: 3
    },
    {
        imageUrl: "https://c4.wallpaperflare.com/wallpaper/89/717/68/rajnikanth-kaala-kaala-karikaalan-tamil-wallpaper-preview.jpg",
        no: 4
    },
    {
        imageUrl: "https://i.ytimg.com/vi/5z9z7S7xOcE/maxresdefault.jpg",
        no: 5
    },
    {
        imageUrl: "https://i.ytimg.com/vi/lgaMeT3BbPk/maxresdefault.jpg",
        no: 6
    },
    {
        imageUrl: "https://i.ytimg.com/vi/-K7NHZ6XA4U/maxresdefault.jpg",
        no: 7
    },
    {
        imageUrl: "https://i.ytimg.com/vi/krdW48Ff234/maxresdefault.jpg",
        no: 8
    },
    {
        imageUrl: "https://timesofindia.indiatimes.com/photo/msid-110862773,imgsize-144770.cms",
        no: 9
    },
    {
        imageUrl: "https://s1.dmcdn.net/v/SqAwk1WXcuGzS11me/x1080",
        no: 10
    },
    {
        imageUrl: "https://filmyfocus.com/wp-content/uploads/2022/03/Top-15-Best-Comedy-Movies-of-South-India-in-Hindi-Dubbed-8.jpg",
        no: 11
    },
    {
        imageUrl: "https://i.ytimg.com/vi/qt-_gHvfUWQ/maxresdefault.jpg",
        no: 12
    }

];
var count = 0;

var container = document.getElementById("container");
var btn = document.getElementById("SlideShow");
var image = document.createElement("img")

var slideshowStarted = false;

btn.addEventListener("click", function oneclick() {

    


    if (!slideshowStarted) {
        slideshowStarted = true;
        btn.ariaDisabled = true;

        setInterval(function () {
            count++;

            if (count == slides.length) {
                count = -1;
            }
            else {

                var x = slides[count].imageUrl;
                image.src = x;
            }


        }, 3000);
    }







})



image.src = slides[0].imageUrl;



container.append(image);