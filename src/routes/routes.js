import AdminLayouts from "../components/Layouts/AdminLayouts/AdminLayouts";
import InterviewLayouts from "../components/Layouts/InterviewLayouts/InterviewLayouts";
import AddDepartment from "../components/Pages/Admin/Department/AddDepartment";
import Department from "../components/Pages/Admin/Department/Department";
import HomeAdmin from "../components/Pages/Admin/HomeAdmin/HomeAdmin";
import Login from "../components/Pages/Login/Login";
import HRLayouts from './../components/Layouts/HRLayouts/HRLayouts';
import HomeHR from './../components/Pages/HR/HomeHR/HomeHR';
import HomeInterview from './../components/Pages/Interviews/HomeInterview/HomeInterview';
import UpdateDepartment from './../components/Pages/Admin/Department/UpdateDepartment';
import ListEmployee from "../components/Pages/Admin/Employee/ListEmployee";
import AddEmployee from "../components/Pages/Admin/Employee/AddEmployee";
import UpdateEmployee from './../components/Pages/Admin/Employee/UpdateEmployee';
import Profile from "../components/Pages/Profile/Profile";

export const unLoginRoute = [
    {
        path: "/",
        component: <Login />,
    },
    {
        path: "homeadmin",
        component: <AdminLayouts child={<HomeAdmin />} />,
    },

    {
        path: "department",
        component: <AdminLayouts child={<Department />} />,
    },
    {
        path: "department/add",
        component: <AdminLayouts child={<AddDepartment />} />,
    },
    {
        path: "department/update/:id",
        component: <AdminLayouts child={<UpdateDepartment />} />,
    },

    {
        path: "employee",
        component: <AdminLayouts child={<ListEmployee />} />,
    },
    {
        path: "employee/add",
        component: <AdminLayouts child={<AddEmployee />} />,
    },
    {
        path: "employee/update/:id",
        component: <AdminLayouts child={<UpdateEmployee />} />,
    },

    {
        path: "profile",
        component: <AdminLayouts child={<Profile />} />,
    },


    // {
    //     path: "homehr",
    //     component: <HRLayouts child={<HomeHR />} />,
    // },
    // {
    //     path: "homeinterview",
    //     component: <InterviewLayouts child={<HomeInterview />} />,
    // },
];

export const AdminRoutes = [
    {
        path: "/",
        component: <AdminLayouts child={<HomeAdmin />} />,
    },
];

export const HRRoutes = [
    {
        path: "/",
        component: <HRLayouts child={<HomeHR />} />,
    },
];

export const InterviewRoutes = [
    {
        path: "/",
        component: <InterviewLayouts child={<HomeInterview />} />,
    },
];