function hitungInvestasi() {
  let bunga = parseFloat(document.getElementById("bunga").value) / 100;
  let waktu = parseInt(document.getElementById("waktu").value);
  let modal = parseFloat(document.getElementById("modal").value);

  let hasil_kotor_pertahun = bunga * modal;
  let hasil_bersih_pertahun = hasil_kotor_pertahun - hasil_kotor_pertahun * 0.1;
  let hasil_kotor_perbulan = hasil_kotor_pertahun / 12;
  let hasil_bersih_perbulan = hasil_bersih_pertahun / 12;
  let hasil_kotor_perperiode = hasil_kotor_pertahun * waktu;
  let hasil_bersih_perperiode =
    hasil_kotor_perperiode - hasil_kotor_perperiode * 0.1;

  document.getElementById(
    "hasil_kotor_pertahun"
  ).innerText = `Rp ${hasil_kotor_pertahun.toLocaleString("id-ID")}`;
  document.getElementById(
    "hasil_bersih_pertahun"
  ).innerText = `Rp ${hasil_bersih_pertahun.toLocaleString("id-ID")}`;
  document.getElementById(
    "hasil_kotor_perbulan"
  ).innerText = `Rp ${hasil_kotor_perbulan.toLocaleString("id-ID")}`;
  document.getElementById(
    "hasil_bersih_perbulan"
  ).innerText = `Rp ${hasil_bersih_perbulan.toLocaleString("id-ID")}`;
  document.getElementById(
    "hasil_kotor_perperiode"
  ).innerText = `Rp ${hasil_kotor_perperiode.toLocaleString("id-ID")}`;
  document.getElementById(
    "hasil_bersih_perperiode"
  ).innerText = `Rp ${hasil_bersih_perperiode.toLocaleString("id-ID")}`;
}
