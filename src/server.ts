import express from "express";
import path from "path";
import {pageRouter} from "./router/mainPage.router";

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 5200;

app.listen(PORT, () => {
    try {
        console.log(`listening port ${PORT}`);
    } catch (e) {
        console.log(e.message)
    }
});

app.use('/', pageRouter);

