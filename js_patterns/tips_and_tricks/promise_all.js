/**
 * 
 * Promise.all allows you to run multiple promises concurrently and wait for all of them to resolve.
 * 
 * https://dev.to/hmpljs/10-javascript-tips-and-tricks-that-will-be-useful-47fa?context=digest
 * 
 */
const fetchData1 = fetch("/api/data1");
const fetchData2 = fetch("/api/data2");

Promise.all([fetchData1, fetchData2])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => console.log(data))
  .catch(error => console.error(error));