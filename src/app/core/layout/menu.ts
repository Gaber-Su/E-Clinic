
export const MENU = [
   {
    label: 'Dashboard',
    icon: 'fa-solid fa-gauge',
    permission: [
      'ComplianceOfficer',
      'ComplianceManager',
      'Administrator',
      'ReadOnly',
      'Auditor',
      'BusinessExecutive',
    ],
    isTitle: true,
    link : '/Dashboard'

   
  },
  {
    label: 'General Setups',
    icon: 'fa-solid fa-gauge',
    permission: [
      'ComplianceOfficer',
      'ComplianceManager',
      'Administrator',
      'BusinessExecutive',
    ],
    subItems: [
      {
        label: 'Patients',
        link: '/patients',
      },
      {
        label: 'Staff',
        link: '/staff',
      },
      {
        label: 'Branches',
        link: '/report/country-profile-report',
      },
      {
        label: 'Services',
        link: '/report/assessment-reports',
      },
    ],
    isExpanded : true
  },
  {
    label: 'Vistors',
    // isTitle: true,
    permission: [
      'BusinessOfficer',
      'BusinessManager',
      'BusinessExecutive',
      'ComplianceOfficer',
      'ComplianceManager',
      'Administrator',
      'ReadOnly',
      'Auditor',
    ],
    isTitle : true,
    //  subItems: [
    //   {
    //     label: 'test',
    //     link: '/report/standard-reports',
    //   },
    //   {
    //     label: 'Test',
    //     link: '/report/ad-hoc-report',
    //   },
    //   {
    //     label: 'test',
    //     link: '/report/country-profile-report',
    //   },
    //   {
    //     label: 'test',
    //     link: '/report/assessment-reports',
    //   },
    // ],
    isExpanded : true
  },
//   {
//     label: 'Templates',
//     icon: 'settings',
//     link: '/template/templates',
//     permission: [
//       'ComplianceOfficer',
//       'ComplianceManager',
//     ],
//   },
//   {
//     label: 'Assessments',
//     icon: 'layers',
//     link: '/assessment/assessments',
//     permission: [
//       'BusinessOfficer',
//       'BusinessManager',
//       'BusinessExecutive',
//       'ComplianceOfficer',
//       'ComplianceManager',
//       'Administrator',
//       'ReadOnly',
//       'Auditor',
//     ],
//   },
//   {
//     label: 'Monitoring',
//     icon: 'monitor',
//     link: '/assessment/monitoring',
//     permission: [
//       'BusinessOfficer',
//       'BusinessManager',
//       'BusinessExecutive',
//       'ComplianceOfficer',
//       'ComplianceManager',
//       'Administrator',
//       'ReadOnly',
//       'Auditor',
//     ],
//   },
//   {
//     label: 'Country Profiles',
//     icon: 'layers',
//     link: '/lookup/country-profiles',
//     permission: [
//       'BusinessOfficer',
//       'BusinessManager',
//       'BusinessExecutive',
//       'ComplianceOfficer',
//       'ComplianceManager',
//       'Administrator',
//       'Auditor',
//     ],
//   },
//   {
//     label: 'Configuration',
//     isTitle: true,
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Permissions',
//     icon: 'settings',
//     link: '/lookup/configurations',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'User Groups',
//     icon: 'users',
//     link: '/lookup/groups',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Users',
//     icon: 'user',
//     link: '/lookup/users',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Countries',
//     icon: 'globe',
//     link: '/lookup/countries',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Country Profile Group',
//     icon: 'codepen',
//     link: '/lookup/country-profile-group',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'References',
//     icon: 'upload',
//     link: '/upload',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Reports Setup',
//     icon: 'clipboard',
//     link: '/report-setup/home',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Data Mart',
//     icon: 'database',
//     link: '/datamart',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Error Messages',
//     icon: 'edit-2',
//     link: '/lookup/errormessages',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
//   {
//     label: 'Gallery Images',
//     icon: 'camera',
//     link: '/lookup/gallery-images',
//     permission: [
//       'Administrator',
//       'SecurityOfficer',
//     ],
//   },
];
