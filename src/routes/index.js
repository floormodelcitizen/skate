// Authentication related pages
import Login from "../pages/Authentication/Login.svelte";
import Register from "../pages/Authentication/Register.svelte";
// import ForgetPwd from "../pages/Authentication/ForgetPassword.svelte";

// Dashboard
import Dashboard from "../pages/Dashboard/index.svelte";

const authProtectedRoutes = [
  { path: "/", component: Dashboard },
  { path: "/index", component: Dashboard },
  { path: "/dashboard", component: Dashboard },

];

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },

];

const MOCK_DATA = {
  authProtectedRoutes,
  publicRoutes,
};

export default MOCK_DATA;