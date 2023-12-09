import express, { json } from "express";
import cors from "cors";
import { homePage, currencyPage } from "./controllers.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.get('/', async (req, res) => {
    return res.status(200).json({data: await homePage(req.query.page)});
});

app.post('/currency', async (req, res) => {
    return res.status(200).json({data: await currencyPage({url: req.body.url, timeStart: req.body.timeStart, timeEnd: req.body.timeEnd})});
});

app.use("*", (req, res) => {
    res.status(404).json({error: "Page Not Found"});
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})

export {
    app
};