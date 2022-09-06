import  express  from "express";

import { Request,Response,NextFunction } from "express";
const MainRouter = express.Router();

export default MainRouter.get("/", (req: Request,res:Response,next: NextFunction)=>{
    res.end('tudo ok');
})