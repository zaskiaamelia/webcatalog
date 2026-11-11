/* ===== DAFTAR HARGA =====
   Format tiap baris: ["Kategori", "Nama item", "Deskripsi", "Range harga"]
   Kategori harus persis: Small, Medium, atau Large */
var D = [
  ["Small",  "Kios / Cafe Mini",     "Bangunan kecil bergaya cozy, cocok untuk roleplay.",     "8.000 – 30.000"],
  ["Small",  "Mini House",    "Rumah dengan satu sampai dua kamar yang nyaman.",          "15.000 – 30.000"],
  ["Small",  "Interior",   "Dekorasi ruangan sesuai tema pilihanmu.",                "10.000 – 25.000"],
  ["Small",  "Garden & Backyard",   "Taman mini di depan atau di belakang rumah.",                "8.000 – 25.000"],
  ["Medium", "Birthday Venue",       "Dekorasi untuk acara ulang tahun sesuai keinginan.",              "12.000 – 30.000"],
  ["Medium",  "Cooking Station",   "Central kitchen untuk para baker membuat kue.",                "10.000 – 40.000"],
  ["Medium", "Rumah 2 Lantai",       "Layout lebih luas, balkon, dan tangga.",                 "30.000 – 120.000"],
  ["Medium", "Cafe / Restoran",      "Area makan, dapur, dan dekor sesuai konsep.",            "25.000 – 60.000"],
  ["Large",  "Mansion",              "Rumah mewah multi-ruangan dengan detail penuh.",         "50.000 – 200.000"],
  ["Large",  "Palace",   "Bangunan bernuansa kerajaan yang megah.",                "70.000 – 300.000"],
  ["Large",  "Sekolah / Hotel / Mall","Bangunan besar dengan banyak ruangan.",                 "70.000 – 300.000"]
];

/* Membuat kartu harga dari daftar di atas */
var L = document.getElementById("list");
D.forEach(function (d) {
  var e = document.createElement("div");
  e.className = "item";
  e.dataset.c = d[0];
  e.innerHTML = '<span class="sz">' + d[0] + '</span><h3>' + d[1] + '</h3><p>' + d[2] +
                '</p><div class="price">Rp ' + d[3] + '<span>range harga</span></div>';
  L.appendChild(e);
});

/* Tombol filter Semua / Small / Medium / Large */
document.getElementById("tabs").onclick = function (e) {
  var c = e.target.dataset.c;
  if (!c) return;
  [].forEach.call(this.children, function (b) {
    b.classList.toggle("on", b.dataset.c === c);
  });
  [].forEach.call(L.children, function (i) {
    i.style.display = (c === "all" || i.dataset.c === c) ? "" : "none";
  });
};

/* ===== GALERI CONTOH HASIL =====
   Sekarang masih placeholder ilustrasi rumah.
   Untuk pakai screenshot asli: taruh gambar di folder yang sama,
   lalu ganti isi 'img' dengan nama filenya, misalnya "mansion.jpg" */
var gal = [
  { nama: "Bakery Station",        warna: "#D49A9A", img: "bakerystation.png" },
  { nama: "Mini Cafe",           warna: "#AA5E7A", img: "minicafe.png" },
  { nama: "Cafe And Apartment Studio",           warna: "#F2DACE", img: "cafeandhouse.png" },
  { nama: "Medium House", warna: "#D49A9A", img: "mediumhouse.png" },
  { nama: "Interior Design",       warna: "#AA5E7A", img: "interior2.png" },
  { nama: "Medium Cafe",          warna: "#F2DACE", img: "mediumcafe.png" }
];
var G = document.getElementById("gal");
gal.forEach(function (g) {
  var f = document.createElement("figure");
  var gambar = g.img
    ? '<img src="' + g.img + '" alt="' + g.nama + '" loading="lazy">'
    : '<svg viewBox="0 0 120 90" style="background:' + g.warna + '"><use href="#h"/></svg>';
  f.innerHTML = gambar + '<figcaption>' + g.nama + '</figcaption>';
  G.appendChild(f);
});
