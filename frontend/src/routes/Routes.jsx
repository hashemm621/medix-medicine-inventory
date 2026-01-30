import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts/>
    }
])

export default router;