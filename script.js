let totalHarga = 0;
const keranjangList = document.getElementById('keranjang-list');
const totalHargaElem = document.getElementById('total-harga');

function tambahKeKeranjang(namaProduk, hargaProduk) {
  totalHarga += hargaProduk;
  totalHargaElem.textContent = `Total: Rp ${totalHarga}`;

  const li = document.createElement('li');
  li.textContent = `${namaProduk} - Rp ${hargaProduk}`;
  keranjangList.appendChild(li);
}