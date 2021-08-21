import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Home as HomeIcon, People } from "@material-ui/icons";

export const mainRoutes = [
    {
        label: "Home",
        path: "/",
        exact: true,
        icon: HomeIcon,
        component: Home,
    },
    {
        label: "About Me",
        path: "/about",
        exact: true,
        icon: People,
        component: About
    }
]