import { General } from "../Pages/General/General";
import { Misc } from "../Pages/Misc/Misc";
import { Education } from "../Pages/Education/Education";
import { Experience } from "../Pages/Experience/Experience";
import { License } from "../Pages/License/License";
import { Person, School, Work, MoreHoriz, Assignment } from "@material-ui/icons";

export const mainRoutes = [
    {
        label: "General",
        path: "/",
        exact: true,
        icon: Person,
        component: General,
    },
    {
        label: "Education",
        path: "/edu",
        exact: true,
        icon: School,
        component: Education
    },
    {
        label: "License",
        path: "/license",
        exact: true,
        icon: Assignment,
        component: License
    },
    {
        label: "Experience",
        path: "/exp",
        exact: true,
        icon: Work,
        component: Experience
    },
    {
        label: "Miscellaneous",
        path: "/misc",
        exact: true,
        icon: MoreHoriz,
        component: Misc
    }
]