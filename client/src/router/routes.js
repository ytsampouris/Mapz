const routes = [
  {
    path: "/user",
    name: "user",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "maps",
        name: "maps",
        component: () => import("pages/Maps.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "myAccount",
        name: "myAccount",
        component: () => import("pages/MyAccount.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "newMap",
        name: "newMap",
        component: () => import("pages/NewMap.vue"),
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      // {
      //   path: "documents/:id",
      //   name: "documentViewer",
      //   component: () => import("pages/DocumentViewer.vue"),
      //   meta: {
      //     requiresAuth: true
      //   }
      // },
      {
        path: "usermanagement",
        name: "userManagement",
        component: () => import("pages/UserManagement.vue"),
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "departmentmanagement",
        name: "departmentManagement",
        component: () => import("pages/DepartmentManagement.vue"),
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "databaseAdministration",
        name: "databaseAdministration",
        component: () => import("pages/DatabaseAdministration.vue"),
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/SplashLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/login",
        name: "login",
        component: () => import("pages/Login.vue")
      },
      {
        path: "database",
        name: "database",
        component: () => import("pages/Database.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/projectinfo",
        name: "projectinfo",
        component: () => import("pages/Projectinfo.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MapLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "map",
        name: "map",
        component: () => import("pages/Map.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/projectinfo",
        name: "projectinfo",
        component: () => import("pages/Projectinfo.vue")
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
