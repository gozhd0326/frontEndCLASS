export function signup(user) {
   return fetch(`http://localhost:8080/api/signup/user`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function login(user) {
   console.log(user);
   return fetch(`http://localhost:8080/api/authenticate`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   })
      .then((response) => {
         if (!response.ok) {
            throw new Error(`HTTP ERROR! Status : ${response.status}`);
         }
         return response.json();
      })
      .catch((error) => {
         console.error("FETCH ERROR :", error);
      });
}
