import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>
            Satu
            <Image linkGambar="https://seru.co.id/wp-content/uploads/2021/09/Akses-utama-menuju-gedung-Jurusan-Teknik-Mesin-dan-Pascasarjana-Polinema-1024x683.jpg" />
          </li>
          <li>
            Dua
            <Image linkGambar="https://malangvoice.com/wp-content/uploads/2021/05/polinema-font.jpg" />
          </li>
          <li>
            Tiga
            <Image linkGambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8vuSW0iHU7nAtCFuvKqjIFitxj8EV9AWJhquK3hbDn5EpRJppFsztUp2qivv1iTkZvw&usqp=CAU" />
          </li>
          <li>
            Empat
            <Image linkGambar="https://pendidikan.memontum.com/wp-content/uploads/sites/4/2018/06/Polinema-Siapkan-Gebrakan-di-Tahun-Akademik-20182019.jpg" />
          </li>
        </ol>
      </div>
    );
  }
}

export default List;
