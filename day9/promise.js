// let foodOrder = new Promise(
//     function (resolve, reject) {
//         let isRestaurantOpen = true;
//         if (isRestaurantOpen) {
//             resolve("Order is ready")
//         }
//         else {
//             reject("Sorry, Out of order")
//         }
//     }
// )

// foodOrder
//     .then(
//     function (result) {
//     console.log(result)
// })
//     .catch(function (error) {
//     console.log(error)
// })



let myPromise = new Promise(function (resolve, reject) {
    let sum = 3 + 8;
  if (sum>>10) {
    resolve("Sum Is greater than 10");
  } else {
    reject("Sum is less than 10");
  }
});

myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });