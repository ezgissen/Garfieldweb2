document.getElementById("divUst").addEventListener("click", icerikDegistir); // divUst id'li elemente "click" yapınca "icerikDegistir" fonksiyonunu çalıştırmaak için fonk
document.getElementById("divUst").addEventListener("mouseover", yaziyiKarart);
document.getElementById("divUst").addEventListener("mouseout", yaziyiBeyazlat);
document.getElementById("divUst").getElementsByTagName("h1")[0].addEventListener("mouseover", yaziyiGizle);
document.getElementById("divUst").getElementsByTagName("h1")[0].addEventListener("mouseout", yaziyiGoster);

var icerik = 0; // Şu anki icerik id'si 0
const icerikler = [
    ["ana_1.jpeg", "Jim Davis, Garfield'ı yaratma anını tam olarak hatırlamadığını söylüyor. Ancak, karakterin ilk taslağının 1976 yılında Indiana Üniversitesi'nde bir öğrenciyken karakalem çizimler olarak ortaya çıktığını belirtiyor."],
    ["ana_2.jpg", "Davis, o sıralar çizgi roman endüstrisinde bir kariyer yapmaya çalışıyordu ve farklı karakter fikirleri üzerinde çalışıyordu."],
    ["ana_3.jpg", "Davis, Garfield'ın ilk ilham kaynağının kendi evcil kedisi olduğu söyleniyor. Davis'in kedisi \"Jon\" adında tembel ve obur bir kedisiydi ve Davis, karakterin bu özelliklerini Garfield'a aktarmış."],
    ["ana_4.jpg", "Ancak Davis, Garfield'ın sadece bir kedi olmaktan öte bir şey olması gerektiğini biliyordu. Garfield'ın insanların ilişkilendirilebileceği bir mizah anlayışına sahip olması ve kendi hatalarından ders alabilen bir karakter olması gerektiğini düşünüyordu."],
    ["ana_5.jpeg", 'Davis, Garfield\'ı yaratırken birçok farklı isim denemiş. Örneğin, "Jon Arbuckle" karakteri başlangıçta "Luke" olarak adlandırılmış ve Garfield ise "Handsome Dan" veya "Grover" olarak düşünülmüş.']
];

function icerikDegistir() {
    document.getElementById("divUst").style.backgroundImage = "url(" + icerikler[icerik][0] + ")"; // divUst elementinin backgroundImage'sini icerikler array'ındaki şu anki icerik değişkeninin 0. değişkenini yaptm
    document.getElementById("divUst").getElementsByTagName("h1")[0].innerText = icerikler[icerik][1]; // divUst elementinin h1 elementinin yazısını icerikler arrayındaki şu anki icerik id'ye göre değiştirdm

    icerik++;
    if (icerik >= icerikler.length) icerik = 0; 
}

function yaziyiGizle() {
    document.getElementById("divUst").getElementsByTagName("h1")[0].style.opacity = "0"; // fare resim üstüne geldiğinde yazının şeffaflığı
}

function yaziyiGoster() {
    document.getElementById("divUst").getElementsByTagName("h1")[0].style.opacity = "1"; 
}

function yaziyiKarart() {
    document.getElementById("divUst").getElementsByTagName("h1")[0].style.color = "black"; 
}

function yaziyiBeyazlat() {
    document.getElementById("divUst").getElementsByTagName("h1")[0].style.color = "#D96342"; 
}