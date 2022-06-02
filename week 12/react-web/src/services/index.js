const domainPath = "http://localhost:3001";

const GetAPI = (path) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}`)
      .then((response) => response.json())
      .then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

const PostAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

const DeleteAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}/${data}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

const getNewsBlog = () => GetAPI("posts?_sort=id&_order=desc");
const postNewsBlog = (payload) => PostAPI("posts", payload);
const deleteNewsBlog = (payload) => DeleteAPI("posts", payload);

const API = {
  getNewsBlog,
  postNewsBlog,
  deleteNewsBlog
};

export default API;
