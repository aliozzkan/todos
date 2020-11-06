interface Route {
  path: string | string[];
  component: any;
  exact: boolean;
}

export const routes: Route[] = [
  {
    path: ["/", "/home"],
    exact: true,
    component: require("pages/Home").default,
  },
  {
    path: "/login",
    exact: true,
    component: require("pages/Auth/Login").default,
  },
  {
    path: "/register",
    exact: true,
    component: require("pages/Auth/Register").default,
  }
];
