// const mongoose = require("mongoose");
// const { loadPlanetsData } = require("../models/planets.model");
// const MONGO_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.arc3nbp.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
// mongoose.connection.once("open", () => {
//   console.log("mongoDB connection ready!");
// });
// mongoose.connection.on("error", (err) => {
//   console.error(err);
// });
// async function mongoConnect() {
//   await mongoose.connect(MONGO_URL);
//   await loadPlanetsData();
// }
// async function mongoDisconnect() {
//   await mongoose.disconnect();
// }
// module.exports = { mongoConnect, mongoDisconnect };
