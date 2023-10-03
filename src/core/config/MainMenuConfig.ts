export interface MenuItem {
  // heading?: string;
  // sectionTitle?: string;
  // route?: string;
  // pages?: Array<MenuItem>;
  // keenthemesIcon?: string;
  // bootstrapIcon?: string;
  // sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pengusul: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "home",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Usulan",
        route: "/usulan",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-layers",
      },
    ],
    dei: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "home",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Usulan",
        route: "/usulan",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengadaan",
        route: "/pengadaan",
        keenthemesIcon: "tablet-text-up",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pembangunan",
        route: "/pembangunan",
        keenthemesIcon: "bank",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengawasan",
        route: "/pengawasan",
        keenthemesIcon: "tablet-text-up",
        bootstrapIcon: "bi-layers",
      },
    ],
    ppk: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "home",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "usulan",
        route: "/usulan",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengadaan",
        route: "/pengadaan",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-layers",
      },
    ],
    penyedia: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "home",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Pembangunan",
        route: "/pembangunan",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-layers",
      },
    ],
    pengawas: [
      // {
      //   heading: "dashboard",
      //   route: "/dashboard",
      //   keenthemesIcon: "home",
      //   bootstrapIcon: "bi-app-indicator",
      // },
      {
        heading: "Pembangunan",
        route: "/pembangunan",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-layers",
      },
    ],
    // pages: [
    //   {
    //     heading: "dashboard",
    //     route: "/dashboard",
    //     keenthemesIcon: "home",
    //     bootstrapIcon: "bi-app-indicator",
    //   },
    //   {
    //     heading: "Usulan",
    //     route: "/usulan",
    //     keenthemesIcon: "switch",
    //     bootstrapIcon: "bi-layers",
    //   },
    // ],
  },
];

export default MainMenuConfig;
