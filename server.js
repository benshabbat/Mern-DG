import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import RouteRoot from './routes/root.js';

const app = express();
const PORT = process.env.PORT ||8800;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/",RouteRoot);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});