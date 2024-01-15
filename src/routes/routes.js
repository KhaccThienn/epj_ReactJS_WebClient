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
import ListApplicantVacancy from "../components/Pages/HR/Applicant_Vacancy/ListApplicantVacancy";
import ScheduleInterview from "../components/Pages/HR/Applicant_Vacancy/ScheduleInterview";
import Interview from "../components/Pages/HR/Interview/Interview";
import DetailsInterview from "../components/Pages/HR/Interview/DetailsInterview";
import ListInterview from "../components/Pages/Interviews/Interview/ListInterview";
import InterviewDetails from "../components/Pages/Interviews/Interview/InterviewDetails";
import ChangePassword from "../components/Pages/Admin/Employee/ChangePassword";

export const unLoginRoute = [
    {
        path: "/",
        component: <Login />,
    },
];

export const AdminRoutes = [
    {
        path: "/home",
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
        path: "employee/details/:id",
        component: <AdminLayouts child={<DetailsEmployee />} />,
    },
    {
        path: "employee/change_password/:id",
        component: <AdminLayouts child={<ChangePassword />} />,
    },
    {
        path: "profile",
        component: <AdminLayouts child={<Profile />} />,
    },
];

export const HRRoutes = [
    {
        path: "/home",
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
        path: "applicant_vacancy",
        component: <HRLayouts child={<ListApplicantVacancy />} />
    },


    {
        path: "interview/schedule/:id",
        component: <HRLayouts child={<ScheduleInterview />} />
    },

    {
        path: "interview",
        component: <HRLayouts child={<Interview />} />
    },

    {
        path: "interview/details/:id",
        component: <HRLayouts child={<DetailsInterview />} />
    },


    {
        path: "profile",
        component: <HRLayouts child={<Profile />} />,
    },
];

export const InterviewRoutes = [
    {
        path: "/home",
        component: <InterviewLayouts child={<HomeInterview />} />,
    },
    {
        path: "interview",
        component: <InterviewLayouts child={<ListInterview />} />
    },
    {
        path: "interview/details/:id",
        component: <InterviewLayouts child={<InterviewDetails />} />
    },

    {
        path: "profile",
        component: <InterviewLayouts child={<Profile />} />,
    },
];