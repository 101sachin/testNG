interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
    badge: {
      variant: "info",
      text: "NEW"
    }
  },

  {
    name: "Manage Kare",
    url: "/manage-kare",
    icon: "icon-puzzle",
    children: [
      {
        name: "Sub Assets",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "Assets",
        url: "/manage-kare/assets",
        icon: "icon-puzzle"
      },
      {
        name: "Asset Series",
        url: "/manage-kare/asset-series",
        icon: "icon-puzzle"
      },
      {
        name: "Clients",
        url: "/manage-kare/clients",
        icon: "icon-puzzle"
      },
      {
        name: "M-Data Inspection",
        url: "/manage-kare/master-data",
        icon: "icon-puzzle"
      },
      {
        name: "SMS Component",
        url: "/manage-kare/sms",
        icon: "icon-puzzle"
      },
      {
        name: "Site ID",
        url: "/manage-kare/siteid",
        icon: "icon-puzzle"
      }
    ]
  },

  {
    title: true,
    name: "Rope Access Management",
  },
  {
    name: "RAMS",
    url: "/rams",
    children: [
      {
        name: "Dashboard",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "inspection Parameters",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "Custom Forms",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "Report List",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "Product Report",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
    ]
  },
  {
    title: true,
    name: "Rope Access Management",
  },

  {
    name: "PM",
    url: "/rams",
    icon: "icon-puzzle",
    children: [
      {
        name: "Dashboard",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "inspection Parameters",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "Custom Forms",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "Report List",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
      {
        name: "Product Report",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
    ]
  },


  {
    title: true,
    name: "Knowledge Tree",
  },

  {
    name: "PM",
    url: "/rams",
    icon: "icon-puzzle",
    children: [
      {
        name: "Dashboard",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
    ]
  },

  {
    title: true,
    name: "Safety Management",
  },

  {
    name: "PM",
    url: "/rams",
    icon: "icon-puzzle",
    children: [
      {
        name: "Dashboard",
        url: "/manage-kare/sub-assets",
        icon: "icon-puzzle"
      },
    ]
  },

  {
    title: true,
    name: "Theme"
  },
  {
    name: "Colors",
    url: "/theme/colors",
    icon: "icon-drop"
  },
  {
    name: "Typography",
    url: "/theme/typography",
    icon: "icon-pencil"
  },
  {
    title: true,
    name: "Components"
  },
  {
    name: "Base",
    url: "/base",
    icon: "icon-puzzle",
    children: [
      {
        name: "Cards",
        url: "/base/cards",
        icon: "icon-puzzle"
      },
      {
        name: "Carousels",
        url: "/base/carousels",
        icon: "icon-puzzle"
      },
      {
        name: "Collapses",
        url: "/base/collapses",
        icon: "icon-puzzle"
      },
      {
        name: "Forms",
        url: "/base/forms",
        icon: "icon-puzzle"
      },
      {
        name: "Pagination",
        url: "/base/paginations",
        icon: "icon-puzzle"
      },
      {
        name: "Popovers",
        url: "/base/popovers",
        icon: "icon-puzzle"
      },
      {
        name: "Progress",
        url: "/base/progress",
        icon: "icon-puzzle"
      },
      {
        name: "Switches",
        url: "/base/switches",
        icon: "icon-puzzle"
      },
      {
        name: "Tables",
        url: "/base/tables",
        icon: "icon-puzzle"
      },
      {
        name: "Tabs",
        url: "/base/tabs",
        icon: "icon-puzzle"
      },
      {
        name: "Tooltips",
        url: "/base/tooltips",
        icon: "icon-puzzle"
      }
    ]
  },
  {
    name: "Buttons",
    url: "/buttons",
    icon: "icon-cursor",
    children: [
      {
        name: "Buttons",
        url: "/buttons/buttons",
        icon: "icon-cursor"
      },
      {
        name: "Dropdowns",
        url: "/buttons/dropdowns",
        icon: "icon-cursor"
      },
      {
        name: "Brand Buttons",
        url: "/buttons/brand-buttons",
        icon: "icon-cursor"
      }
    ]
  },
  {
    name: "Charts",
    url: "/charts",
    icon: "icon-pie-chart"
  },
  {
    name: "Icons",
    url: "/icons",
    icon: "icon-star",
    children: [
      {
        name: "CoreUI Icons",
        url: "/icons/coreui-icons",
        icon: "icon-star",
        badge: {
          variant: "success",
          text: "NEW"
        }
      },
      {
        name: "Flags",
        url: "/icons/flags",
        icon: "icon-star"
      },
      {
        name: "Font Awesome",
        url: "/icons/font-awesome",
        icon: "icon-star",
        badge: {
          variant: "secondary",
          text: "4.7"
        }
      },
      {
        name: "Simple Line Icons",
        url: "/icons/simple-line-icons",
        icon: "icon-star"
      }
    ]
  },
  {
    name: "Notifications",
    url: "/notifications",
    icon: "icon-bell",
    children: [
      {
        name: "Alerts",
        url: "/notifications/alerts",
        icon: "icon-bell"
      },
      {
        name: "Badges",
        url: "/notifications/badges",
        icon: "icon-bell"
      },
      {
        name: "Modals",
        url: "/notifications/modals",
        icon: "icon-bell"
      }
    ]
  },
  {
    name: "Widgets",
    url: "/widgets",
    icon: "icon-calculator",
    badge: {
      variant: "info",
      text: "NEW"
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: "Extras"
  },
  {
    name: "Pages",
    url: "/pages",
    icon: "icon-star",
    children: [
      {
        name: "Login",
        url: "/login",
        icon: "icon-star"
      },
      {
        name: "Register",
        url: "/register",
        icon: "icon-star"
      },
      {
        name: "Error 404",
        url: "/404",
        icon: "icon-star"
      },
      {
        name: "Error 500",
        url: "/500",
        icon: "icon-star"
      }
    ]
  },
  {
    name: "Disabled",
    url: "/dashboard",
    icon: "icon-ban",
    badge: {
      variant: "secondary",
      text: "NEW"
    },
    attributes: { disabled: true }
  },
  {
    name: "Download CoreUI",
    url: "http://coreui.io/angular/",
    icon: "icon-cloud-download",
    class: "mt-auto",
    variant: "success",
    attributes: { target: "_blank", rel: "noopener" }
  },
  {
    name: "Try CoreUI PRO",
    url: "http://coreui.io/pro/angular/",
    icon: "icon-layers",
    variant: "danger",
    attributes: { target: "_blank", rel: "noopener" }
  }
];
