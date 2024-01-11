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
import Vacancy from "../components/Pages/HR/Vacancy/Vacancy";
import DetailsEmployee from "../components/Pages/Admin/Employee/DetailsEmployee";
import AddVacancy from "../components/Pages/HR/Vacancy/AddVacancy";
import VacancyDetails from "../components/Pages/HR/Vacancy/VacancyDetails";
import UpdateVacancy from "../components/Pages/HR/Vacancy/UpdateVacancy";
import Applicant from "../components/Pages/HR/Appicant/Applicant";
import AddApplicant from './../components/Pages/HR/Appicant/AddApplicant';
import UpdateApplicant from "../components/Pages/HR/Appicant/UpdateApplicant";
import DetailsApplicant from "../components/Pages/HR/Appicant/DetailsApplicant";

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
        component: <HRLayouts child={<Profile />} />,
    },

    {
        path: "home",
        component: <HRLayouts child={<HomeHR />} />,
    },

    {
        path: "homeinterview",
        component: <InterviewLayouts child={<HomeInterview />} />,
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
        path: "employee/details/:id",
        component: <AdminLayouts child={<DetailsEmployee />} />,
    },

    {
        path: "vacancy",
        component: <HRLayouts child={<Vacancy />} />
    },
    {
        path: "department",
        component: <AdminLayouts child={<Department />} />,
    },
    {
        path: "applicant",
        component: <HRLayouts child={<Applicant />} />
    },
];

export const AdminRoutes = [
    {
        path: "/",
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
];

export const HRRoutes = [
    {
        path: "/",
        component: <HRLayouts child={<HomeHR />} />,
    },
    {
        path: "vacancy",
        component: <HRLayouts child={<Vacancy />} />
    },
    {
        path: "vacancy/add",
        component: <HRLayouts child={<AddVacancy />} />
    },
    {
        path: "vacancy/details/:id",
        component: <HRLayouts child={<VacancyDetails />} />
    },
    {
        path: "vacancy/update/:id",
        component: <HRLayouts child={<UpdateVacancy />} />
    },

    {
        path: "applicant",
        component: <HRLayouts child={<Applicant />} />
    },
    {
        path: "applicant/add",
        component: <HRLayouts child={<AddApplicant />} />
    },
    {
        path: "applicant/details/:id",
        component: <HRLayouts child={<DetailsApplicant />} />
    },
    {
        path: "applicant/update/:id",
        component: <HRLayouts child={<UpdateApplicant />} />
    },


    {
        path: "profile",
        component: <HRLayouts child={<Profile />} />,
    },
];

export const InterviewRoutes = [
    {
        path: "/",
        component: <InterviewLayouts child={<HomeInterview />} />,
    },
];