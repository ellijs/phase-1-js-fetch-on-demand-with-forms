const init = () => {
  const inputForm = document.querySelector("form");

  //  option: 1
  //   inputForm.addEventListener("submit", (event) => {
  //     event.preventDefault();
  //     console.log(event);
  //     console.log(event.target);
  //     console.log(event.target.children[1].value);
  //   });
  // };

  // option: 2
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input#searchByID");

    // console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // const title = document.getElementById('movieDetails')
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.textContent = data.title;
        summary.textContent = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
