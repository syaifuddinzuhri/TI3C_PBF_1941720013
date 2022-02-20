const e = React.createElement;

function LikeButton() {
  return e(
    "button",
    {
      onClick: () => alert("berhasil"),
    },
    "Like"
  );
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
