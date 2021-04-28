// sample request to request to json file

function calculate() {
  /* fetch is built into the browser
   getrequest
   runs asynchronously (in the background and when its done fetching it returns a promise)  fetch('items.json');.
   catch that promise with .then()
   */
  fetch('items.json').then((res) => {
    res
      .json()
      //second promise
      .then((data) => console.log(data));
  });
}
calculate();
