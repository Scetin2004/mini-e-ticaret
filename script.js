// Ürünler
const urunler = [
    { isim: "Ürün 1", fiyat: 100 },
    { isim: "Ürün 2", fiyat: 250 },
    { isim: "Ürün 3", fiyat: 50 }
];

const urunListesi = document.getElementById("urun-listesi");
const sepetListesi = document.getElementById("sepet-listesi");
const toplamSpan = document.getElementById("toplam");
let toplam = 0;

// Ürünleri listele
urunler.forEach((urun, index) => {
    const div = document.createElement("div");
    div.className = "urun";
    div.innerHTML = `
        <h2>${urun.isim}</h2>
        <p>Fiyat: ${urun.fiyat} TL</p>
        <button onclick="sepeteEkle(${index})">Sepete Ekle</button>
    `;
    urunListesi.appendChild(div);
});

// Sepete ekle fonksiyonu
function sepeteEkle(index) {
    const urun = urunler[index];
    const li = document.createElement("li");
    li.textContent = ${urun.isim} - ${urun.fiyat} TL;
    sepetListesi.appendChild(li);
    toplam += urun.fiyat;
    toplamSpan.textContent = toplam;
}