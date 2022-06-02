import React, { Component } from "react";
import Mahasiswa from "../../components/Mahasiswa/Mahasiswa";

class ListMahasiswa extends Component {
  state = {
    listMahasiswa: [],
    insertMahasiswa: {
      id: 1,
      nim: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: "",
    },
  };

  ambilDataDariServerAPI = () => {
    fetch("http://localhost:3002/mahasiswa?_sort=id&_order=desc")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          listMahasiswa: json,
        });
      });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleTambahMahasiswa = (event) => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa,
    });
  };

  handleHapusMahasiswa = (data) => {
    fetch(`http://localhost:3002/mahasiswa/${data}`, { method: "DELETE" }).then(
      (res) => this.ambilDataDariServerAPI()
    );
  };

  handleTombolSimpan = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/mahasiswa", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.insertMahasiswa),
    }).then((response) => {
      this.ambilDataDariServerAPI();
    });
    this.setState({
      insertMahasiswa: {
        id: 1,
        nim: "",
        nama: "",
        alamat: "",
        hp: "",
        angkatan: "",
        status: "",
      },
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-12 mb-5">
            <div className="card">
              <div className="card-header">Form Tambah Mahasiswa</div>
              <div className="card-body">
                <div>
                  <div className="form-group mb-2">
                    <label htmlFor="nim">NIM</label>
                    <input
                      type="number"
                      className="form-control"
                      id="nim"
                      name="nim"
                      value={this.state.insertMahasiswa.nim}
                      onChange={this.handleTambahMahasiswa}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="nama">Nama</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      name="nama"
                      value={this.state.insertMahasiswa.nama}
                      onChange={this.handleTambahMahasiswa}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="hp">Nomor HP</label>
                    <input
                      type="number"
                      className="form-control"
                      id="hp"
                      name="hp"
                      value={this.state.insertMahasiswa.hp}
                      onChange={this.handleTambahMahasiswa}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="angkatan">Tahun Angkatan</label>
                    <select
                      className="form-control"
                      id="angkatan"
                      name="angkatan"
                      defaultValue={this.state.insertMahasiswa.angkatan}
                      onChange={this.handleTambahMahasiswa}
                    >
                      <option value="" disabled>
                        Pilih Tahun Angkatan
                      </option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="alamat">Alamat</label>
                    <textarea
                      className="form-control"
                      name="alamat"
                      id="alamat"
                      rows="3"
                      value={this.state.insertMahasiswa.alamat}
                      onChange={this.handleTambahMahasiswa}
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="status">Status</label>
                    <select
                      className="form-control"
                      id="status"
                      name="status"
                      defaultValue={this.state.insertMahasiswa.status}
                      onChange={this.handleTambahMahasiswa}
                    >
                      <option value="" disabled>
                        Pilih Status
                      </option>
                      <option value="aktif">Aktif</option>
                      <option value="lulus">Lulus</option>
                      <option value="cuti">Cuti</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleTombolSimpan}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h1>List Mahasiswa</h1>
            <ul className="list-group">
              {this.state.listMahasiswa.map((mahasiswa) => {
                return (
                  <Mahasiswa
                    key={mahasiswa.nim}
                    data={mahasiswa}
                    hapus={this.handleHapusMahasiswa}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ListMahasiswa;
