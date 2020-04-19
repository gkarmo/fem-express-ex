document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
      // fetch
    fetch("/complement")
      .then(function(res) {
          console.log(res);
        return res.json();
      })
      .then(function(data) {
          console.log(data)
        document.querySelector(".complement").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });