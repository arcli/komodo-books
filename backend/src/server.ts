import { app } from "./app";

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server running at http://0.0.0.0:${port}`);
});
