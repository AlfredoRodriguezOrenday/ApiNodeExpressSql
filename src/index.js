import app from './app.js';
import  'dotenv/config'

const PORT =  process.env.API_PORT || 3000;

app.listen(PORT);

console.log("http://localhost:" + PORT);