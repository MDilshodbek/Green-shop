// 64bebc1e2c6d3f056a8c85b7 token
// let url = "https://cute-jade-binturong-boot.cyclic.app/api";

// let getflowers = (search_flower) => {
//   fetch(
//     `${url}/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "GET",
//     }
//   )
//     .then((respond) => {
//       return respond.json();
//     })
//     .then((data) => {
//       console.log(
//         data.data.filter((value) =>{
//         return value.title.includes(search_flower);
//       }),
//     );
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// getflowers("Cactus");

// ASYNC AWAIT Method

// let url = "https://cute-jade-binturong-boot.cyclic.app/api";

// const getflowers = async (search_flower) => {
//   const response = await fetch(
//     `${url}/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7`
//   );

//   const data = await response.json();

//   const founddata = data.data.filter((value) => {
//     return value.title.includes(search_flower)
//   })

//   if (founddata.length === 0) {
//     console.log("No flowers found");
//   } else {
//     console.log(founddata);
//   }
// };

// getflowers("Cactus");

let url = "https://cute-jade-binturong-boot.cyclic.app/api";

let signup = () => {
  fetch(`${url}/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`, {
    method: "POST",
    body: JSON.stringify({
      name: "James",
      surname: "Bond",
      password: "12345678",
      email: "agent007@gmail.com",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

signup();



