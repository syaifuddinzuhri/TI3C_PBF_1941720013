import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../components/BlogPost/Post";
import API from "../../services";

class BlogPost extends Component {
  state = {
    listArtikel: [],
    insertArtikel: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        listArtikel: result,
      });
    });
    // fetch("http://localhost:3001/posts?_sort=id&_order=desc")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({
    //       listArtikel: json,
    //     });
    //   });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleHapusArtikel = (data) => {
    API.deleteNewsBlog(data).then((response) => {
      this.ambilDataDariServerAPI();
    });

    // fetch(`http://localhost:3001/posts/${data}`, { method: "DELETE" }).then(
    //   (res) => this.ambilDataDariServerAPI()
    // );
  };

  handleTambahArtikel = (event) => {
    let formInsertArtikel = { ...this.state.insertArtikel };
    let timestamp = new Date().getTime();
    formInsertArtikel["id"] = timestamp;
    formInsertArtikel[event.target.name] = event.target.value;
    this.setState({
      insertArtikel: formInsertArtikel,
    });
  };

  handleTombolSimpan = (e) => {
    e.preventDefault();

    // fetch("http://localhost:3001/posts", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(this.state.insertArtikel),
    // }).then((response) => {
    //   this.ambilDataDariServerAPI();
    // });

    API.postNewsBlog(this.state.insertArtikel).then((response) => {
      this.ambilDataDariServerAPI();
    });

    this.setState({
      insertArtikel: {
        userId: 1,
        id: 1,
        title: "",
        body: "",
      },
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Judul
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={this.state.insertArtikel.title}
                onChange={this.handleTambahArtikel}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Body
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="3"
                value={this.state.insertArtikel.body}
                onChange={this.handleTambahArtikel}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Artikel</h2>
        {this.state.listArtikel.map((artikel) => {
          return (
            <Post
              key={artikel.id}
              judul={artikel.title}
              isi={artikel.body}
              idArtikel={artikel.id}
              hapusArtikel={this.handleHapusArtikel}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;
