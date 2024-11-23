const API = "https://api.giphy.com/v1/gifs/search?";
const key = "api_key=qkk9KTpaNwvrBQ7NlpkAwjTfXOw3ZXl1";
const limit = "&limit=";
const params = "&q=";

const form = document.querySelector(".diff_search");
const input = document.querySelector("#inp");
const select = document.querySelector("#count");
const output = document.querySelector("#output");

const searchGiphy = async () => {
  let url = API + key + limit + select.value + params + input.value;
  const req = await fetch(url);
  const res = await req.json();
  renderGiphs(res.data);
  input.value = "";
};

const renderGiphs = (data) => {
  output.innerHTML = "";
  data.forEach((el) => {
    // console.log(el);

    const card = document.createElement("div");
    const title = document.createElement("h2");
    const giff = document.createElement("iframe");
    title.textContent =
      el.title.length > 15 ? el.title.slice(0, 15) + "..." : el.title;
    title.title = el.title;
    giff.src = el.embed_url;
    card.append(giff, title);
    output.append(card);
  });
};

form.addEventListener("click", (event) => {
  event.preventDefault();
  searchGiphy();
});

// let x = 'qwertyuiopasdfghjjk'
// let sliced  = x.slice(0, 5)

// console.log(sliced);
