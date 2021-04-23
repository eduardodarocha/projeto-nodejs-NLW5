// import express from "express";
// import { routes } from "./routes";
// import "./database";

// const app = express();
// app.use(express.json());

// app.use(routes);



// app.get("/", (request, response) => {
//   return response.json({
//     message: "Olá NLW 5!",
//   });
// });

// // app.post("/", (request, response) => {
// //   return response.json({
// //     message: "Usuário salvo com sucesso!",
// //   });
// // });

// app.listen(3333, () => console.log("Server is running on port 3333"));

import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running!"));
