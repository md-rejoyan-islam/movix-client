import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./public.routes";
import privateRouter from "./private.routes";


const router = createBrowserRouter([...publicRouter, ...privateRouter]);



export default router;
