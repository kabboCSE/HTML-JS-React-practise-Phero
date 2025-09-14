const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Generated num", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "Data is not availabe1" });
  }
});

const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Generated num", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "Data is not availabe2" });
  }
});

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Generated num", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "Data is not availabe3" });
  }
});

Promise.all([getData1, getData2, getData3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
