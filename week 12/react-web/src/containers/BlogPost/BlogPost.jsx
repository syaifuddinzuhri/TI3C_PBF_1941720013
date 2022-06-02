import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../components/BlogPost/Post";
import API from "../../services";
import uniqid from "uniqid";
import { db } from "../../firebase/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

class BlogPost extends Component {
  state = {
    listArtikel: [],
    insertArtikel: {
      userId: "",
      id: "",
      title: "",
      body: "",
    },
  };

  ambilDataDariServerAPI = async () => {
    this.setState({
      listArtikel: [],
    });
    
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      this.setState({
        listArtikel: [...this.state.listArtikel, doc.data()],
      });
    });
    // API.getNewsBlog().then((result) => {
    //   this.setState({
    //     listArtikel: result,
    //   });
    // });
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

  handleHapusArtikel = async (data) => {
    // API.deleteNewsBlog(data).then((response) => {
    //   this.ambilDataDariServerAPI();
    // });
    const taskDocRef = doc(db, "posts", data);
    try {
      await deleteDoc(taskDocRef);
      this.ambilDataDariServerAPI();
    } catch (err) {
      console.log(err);
    }
    // fetch(`http://localhost:3001/posts/${data}`, { method: "DELETE" }).then(
    //   (res) => this.ambilDataDariServerAPI()
    // );
  };

  handleTambahArtikel = (event) => {
    let formInsertArtikel = { ...this.state.insertArtikel };
    formInsertArtikel["id"] = uniqid();
    formInsertArtikel[event.target.name] = event.target.value;
    this.setState({
      insertArtikel: formInsertArtikel,
    });
  };

  handleTombolSimpan = async (e) => {
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
    // const docRef = await setDoc(doc(db, "posts", this.state.insertArtikel['id']), {
    //   id: this.state.insertArtikel['id'],
    //   title: this.state.insertArtikel['title'],
    //   body: this.state.insertArtikel['body'],
    // });

    // await addDoc(collection(db, "posts"), {
    //   id: new Date().getTime(),
    //   title: this.state.insertArtikel["title"],
    //   body: this.state.insertArtikel["body"],
    // });

    // API.postNewsBlog(this.state.insertArtikel).then((response) => {
    // this.ambilDataDariServerAPI();
    // });

    try {
      await setDoc(doc(db, "posts", this.state.insertArtikel["id"]), {
        id: this.state.insertArtikel["id"],
        title: this.state.insertArtikel["title"],
        body: this.state.insertArtikel["body"],
      });
      this.ambilDataDariServerAPI();
    } catch (error) {
      console.log(error);
    }

    this.setState({
      insertArtikel: {
        userId: "",
        id: "",
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
