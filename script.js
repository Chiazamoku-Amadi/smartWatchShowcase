let btnBlack = document.getElementById('btnBlack');
let btnRed = document.getElementById('btnRed');
let btnBlue = document.getElementById('btnBlue');
let btnPink = document.getElementById('btnPink');
let btnPurple = document.getElementById('btnPurple');
let btnTime = document.getElementById('btnTime');


function createNewImage() {
    let newImage = document.createElement("img");
    newImage.id = "watch1";
    newImage.className = "image";

    return newImage;
}

function displayTime() {
    let realTime = new Date();
    let hrs = realTime.getHours();
    let min = realTime.getMinutes();
    let sec = realTime.getSeconds();

    let partOfDay = document.getElementById('partOfDay');

    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    digiClock.style.display = "block";
    heartRate.style.display == "none";
}

function displayHeartRate() {
    heartRate.style.display = "block";
    digiClock.style.display == "none";
}

btnBlack.addEventListener('click', function(e) {
    let currentImage = e.target.value;
    let firstImage = watchImages.firstElementChild;

    if (firstImage) {
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/blackSmartWatch.png";

        watchImages.appendChild(newImage);
        watchImages.replaceChild(newImage, firstImage);
        console.log(watchImages);

        // currentImage = '';
        // firstImage = '';
        // watchImages = '';
    } else {
        alert('hi');
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/blackSmartWatch.png";
        watchImages.appendChild(newImage);
        console.log(watchImages);
    }
})

btnRed.addEventListener('click', function(e) {
    let currentImage = e.target.value;
    let firstImage = watchImages.firstElementChild;

    if (firstImage) {
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/redSmartWatch.png";

        watchImages.appendChild(newImage);
        watchImages.replaceChild(newImage, firstImage);
        console.log(watchImages);

        // currentImage = '';
        // firstImage = '';
        // watchImages = '';
    } else {
        alert('hi');
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/redSmartWatch.png";
        watchImages.appendChild(newImage);
        console.log(watchImages);
    }
})

btnBlue.addEventListener('click', function(e) {
    let currentImage = e.target.value;
    let firstImage = watchImages.firstElementChild;

    if (firstImage) {
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/blueSmartWatch.png";

        watchImages.appendChild(newImage);
        watchImages.replaceChild(newImage, firstImage);
        console.log(watchImages);

        // currentImage = '';
        // firstImage = '';
        // watchImages = '';
    } else {
        alert('hi');
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/blueSmartWatch.png";
        watchImages.appendChild(newImage);
        console.log(watchImages);
    }
})

btnPink.addEventListener('click', function(e) {
    let currentImage = e.target.value;
    let firstImage = watchImages.firstElementChild;

    if (firstImage) {
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/pinkSmartWatch.png";

        watchImages.appendChild(newImage);
        watchImages.replaceChild(newImage, firstImage);
        console.log(watchImages);

        // currentImage = '';
        // firstImage = '';
        // watchImages = '';
    } else {
        alert('hi');
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/pinkSmartWatch.png";
        watchImages.appendChild(newImage);
        console.log(watchImages);
    }
})

btnPurple.addEventListener('click', function(e) {
    let currentImage = e.target.value;
    let firstImage = watchImages.firstElementChild;

    if (firstImage) {
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/purpleSmartWatch.png";

        watchImages.appendChild(newImage);
        watchImages.replaceChild(newImage, firstImage);
        console.log(watchImages);

        // currentImage = '';
        // firstImage = '';
        // watchImages = '';
    } else {
        alert('hi');
        let watchImages = document.getElementById('watchImages');
        let newImage = createNewImage();
        newImage.src = "./images/purpleSmartWatch.png";
        watchImages.appendChild(newImage);
        console.log(watchImages);
    }
})

btnTime.addEventListener('click', function() {
        // digiClock.classList.add('digiClock');
        // let checkTime = t.target.value;
        let digiClock = document.getElementById('digiClock');
        let heartRate = document.getElementById('heartRate');

        setInterval(displayTime, 10);

        // digiClock.style.display == "none";
        // heartRate.style.display == "none";

        // if (digiClock.style.display == "none") {
        //     digiClock.style.display = "block";
        //     console.log('e');
        // } else {
        //     digiClock.style.display = "none";
        //     console.log('f');
        // }
    })
    // setInterval(displayTime, 10);


btnHeartRate.addEventListener('click', function() {
    let digiClock = document.getElementById('digiClock');
    let heartRate = document.getElementById('heartRate');

    setInterval(displayHeartRate, 10);

    // digiClock.style.display == "none";
    // heartRate.style.display == "none";

    // if (heartRate.style.display == "none") {
    //     heartRate.style.display = "block";
    //     console.log('g');
    // } else {
    //     heartRate.style.display = "none";
    //     console.log('h');
    // }
})