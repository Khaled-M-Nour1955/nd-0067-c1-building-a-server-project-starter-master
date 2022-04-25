// importing the requierments
import express, {Application, Request, Response} from 'express'
import Image from './routes/imageResizeing';
//Global variables
const app: Application= express();
const port = process.env.port || 3000;
const api: express.Router = express.Router();
//routes using
app.use(api);
//main process
api.get('/resizeimage',async (request: express.Request,response: express.Response)=> {
  await Image.createThumbsFile(request.query);
  const path= await Image.ImageUrlPath(request.query);
      if (path) {
        response.sendFile(path);
      }
    }
  );
// Enable  cors for the server to avoid 405 error 
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});
// sending the response of 200
app.get('/', (_, res) => {
  res.status(200).send('The Server Is Running');
});
// the port 
app.listen(port, async ()=>{
  const url: string = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
  console.log(`Running On ${url}`);
});
export default app;






















    













