function sendDataAPI(selectedAnswers) {
  console.log(selectedAnswers);
  const apiURL = "https://server";
  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(selectedAnswers),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
export default sendDataAPI;
