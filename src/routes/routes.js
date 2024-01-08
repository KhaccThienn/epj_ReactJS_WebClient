import AdminLayouts from "../components/Layouts/AdminLayouts/AdminLayouts";
import InterviewLayouts from "../components/Layouts/InterviewLayouts/InterviewLayouts";
import HomeAdmin from "../components/Pages/Admin/HomeAdmin/HomeAdmin";
import Login from "../components/Pages/Login/Login";
import HRLayouts from './../components/Layouts/HRLayouts/HRLayouts';
import HomeHR from './../components/Pages/HR/HomeHR/HomeHR';
import HomeInterview from './../components/Pages/Interviews/HomeInterview/HomeInterview';

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
        path: "homehr",
        component: <HRLayouts child={<HomeHR />} />,
    },
    {
        path: "homeinterview",
        component: <InterviewLayouts child={<HomeInterview />} />,
    },
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
        component: <AdminLayouts child={<HomeAdmin />} />,
    },
];