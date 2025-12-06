let form = document.querySelector("form");
let poem = document.querySelector(".poem");
let siganiture = "<p><strong>SheCodes AI</strong></p>";

function generatePoem(res) {
  console.log(res.data.answer);
  let poemContent = res.data.answer;
  new Typewriter(".poem", {
    strings: poemContent + siganiture,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function submitForm(e) {
  e.preventDefault();
  let prompt = e.target[0].value;
  console.log(e.target[0].value);
  let key = "5b8o6964f0f67bt5d0f6463d6177af7f";
  let context = `You can generate a four line precise english poem with a key word i will give you in the prompt that can be easily red by none native speakers. Put each line in a HTML p element, for example:  <p>SheCodes, a community strong and bright,</p><p>Women learning to code, taking flight,</p><p>With determination and support in sight,</p><p>Together we shine, in love for tech we unite.</p>`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  console.log(url);
  poem.innerHTML = "<p>Generating poem now......</p>";
  axios.get(url).then(generatePoem);
}

form.addEventListener("submit", submitForm);
