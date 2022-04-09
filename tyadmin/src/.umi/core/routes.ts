// @ts-nocheck
import { ApplyPluginsType, dynamic } from 'D:/code/pycharm/csci_6234/tyadmin/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/xadmin/login",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'D:/code/pycharm/csci_6234/tyadmin/src/layouts/UserLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "name": "login",
        "path": "/xadmin/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__UserLogin' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/TyAdminBuiltIn/UserLogin'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "path": "/xadmin/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'D:/code/pycharm/csci_6234/tyadmin/src/layouts/SecurityLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/xadmin/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'D:/code/pycharm/csci_6234/tyadmin/src/layouts/BasicLayout'), loading: require('@/components/PageLoading/index').default}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "name": "Home",
            "path": "/xadmin/index",
            "icon": "dashboard",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__DashBoard' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/TyAdminBuiltIn/DashBoard'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "path": "/xadmin/",
            "redirect": "/xadmin/index",
            "exact": true
          },
          {
            "name": "Authentication and Authorization",
            "icon": "BarsOutlined",
            "path": "/xadmin/auth",
            "routes": [
              {
                "name": "permission",
                "path": "/xadmin/auth/permission",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__PermissionList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/PermissionList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "group",
                "path": "/xadmin/auth/group",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__GroupList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/GroupList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "Demo",
            "icon": "BarsOutlined",
            "path": "/xadmin/demo",
            "routes": [
              {
                "name": "Symptom",
                "path": "/xadmin/demo/symptom",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__SymptomList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/SymptomList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "Medicine",
                "path": "/xadmin/demo/medicine",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__MedicineList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/MedicineList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "Doctor visit",
                "path": "/xadmin/demo/doctor_visit",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__Doctor_visitList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/Doctor_visitList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "Trip",
                "path": "/xadmin/demo/trip",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__TripList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/TripList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "News",
                "path": "/xadmin/demo/news_info",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__News_infoList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/News_infoList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "Take out food",
                "path": "/xadmin/demo/take_out",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__Take_outList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/Take_outList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "UserProfile",
                "path": "/xadmin/demo/user_profile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__UserProfileList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/AutoGenPage/UserProfileList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "TyadminBuiltin",
            "icon": "VideoCamera",
            "path": "/xadmin/sys",
            "routes": [
              {
                "name": "TyAdminLog",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_sys_log",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminSysLogList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/TyAdminBuiltIn/TyAdminSysLogList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "TyAdminVerify",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_email_verify_record",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminEmailVerifyRecordList' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/TyAdminBuiltIn/TyAdminEmailVerifyRecordList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "passwordModify",
            "path": "/xadmin/account/change_password",
            "hideInMenu": true,
            "icon": "dashboard",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__ChangePassword' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/TyAdminBuiltIn/ChangePassword'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/code/pycharm/csci_6234/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
