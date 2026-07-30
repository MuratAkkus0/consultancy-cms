import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageCta extends Struct.ComponentSchema {
  collectionName: 'components_about_page_cta';
  info: {
    displayName: 'Cta';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_about_page_header';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageMission extends Struct.ComponentSchema {
  collectionName: 'components_about_page_mission';
  info: {
    displayName: 'Mission';
    icon: 'apps';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageStats extends Struct.ComponentSchema {
  collectionName: 'components_about_page_stats';
  info: {
    displayName: 'Stats';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface AboutPageTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_page_team';
  info: {
    displayName: 'Team';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'about-page.team-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageTeamItems extends Struct.ComponentSchema {
  collectionName: 'components_about_page_team_items';
  info: {
    displayName: 'Team / Items';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface AboutPageValues extends Struct.ComponentSchema {
  collectionName: 'components_about_page_values';
  info: {
    displayName: 'Values';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'about-page.values-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageValuesItems extends Struct.ComponentSchema {
  collectionName: 'components_about_page_values_items';
  info: {
    displayName: 'Values / Items';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageVision extends Struct.ComponentSchema {
  collectionName: 'components_about_page_vision';
  info: {
    displayName: 'Vision';
    icon: 'apps';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AgbHeader extends Struct.ComponentSchema {
  collectionName: 'components_agb_headers';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AgbSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_agb_section_items';
  info: {
    displayName: 'Section Item';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface AuthPageForgotPassword extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_forgot_password';
  info: {
    displayName: 'Forgot Password';
    icon: 'apps';
  };
  attributes: {
    backToLogin: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    successText: Schema.Attribute.String;
    successTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    validation: Schema.Attribute.Component<
      'auth-page.forgot-password-validation',
      false
    >;
  };
}

export interface AuthPageForgotPasswordValidation
  extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_forgot_password_validation';
  info: {
    displayName: 'Forgot Password / Validation';
    icon: 'apps';
  };
  attributes: {
    emailInvalid: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
  };
}

export interface AuthPageLogin extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_login';
  info: {
    displayName: 'Login';
    icon: 'apps';
  };
  attributes: {
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    forgotPassword: Schema.Attribute.String;
    noAccount: Schema.Attribute.String;
    passwordLabel: Schema.Attribute.String;
    passwordPlaceholder: Schema.Attribute.String;
    registerLink: Schema.Attribute.String;
    rememberMe: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    title: Schema.Attribute.String;
    validation: Schema.Attribute.Component<'auth-page.login-validation', false>;
  };
}

export interface AuthPageLoginValidation extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_login_validation';
  info: {
    displayName: 'Login / Validation';
    icon: 'apps';
  };
  attributes: {
    emailInvalid: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    passwordMin: Schema.Attribute.String;
    passwordRequired: Schema.Attribute.String;
  };
}

export interface AuthPageRegister extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_register';
  info: {
    displayName: 'Register';
    icon: 'apps';
  };
  attributes: {
    confirmPasswordLabel: Schema.Attribute.String;
    confirmPasswordPlaceholder: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    hasAccount: Schema.Attribute.String;
    loginLink: Schema.Attribute.String;
    nameLabel: Schema.Attribute.String;
    namePlaceholder: Schema.Attribute.String;
    passwordLabel: Schema.Attribute.String;
    passwordPlaceholder: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    termsText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    validation: Schema.Attribute.Component<
      'auth-page.register-validation',
      false
    >;
  };
}

export interface AuthPageRegisterValidation extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_register_validation';
  info: {
    displayName: 'Register / Validation';
    icon: 'apps';
  };
  attributes: {
    confirmPasswordRequired: Schema.Attribute.String;
    emailInvalid: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    nameMin: Schema.Attribute.String;
    nameRequired: Schema.Attribute.String;
    passwordMin: Schema.Attribute.String;
    passwordRequired: Schema.Attribute.String;
    passwordsDoNotMatch: Schema.Attribute.String;
    termsRequired: Schema.Attribute.String;
  };
}

export interface AuthPageResetPassword extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_reset_password';
  info: {
    displayName: 'Reset Password';
    icon: 'apps';
  };
  attributes: {
    backToLogin: Schema.Attribute.String;
    confirmPasswordLabel: Schema.Attribute.String;
    confirmPasswordPlaceholder: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    passwordLabel: Schema.Attribute.String;
    passwordPlaceholder: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    successText: Schema.Attribute.String;
    successTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    validation: Schema.Attribute.Component<
      'auth-page.reset-password-validation',
      false
    >;
  };
}

export interface AuthPageResetPasswordValidation
  extends Struct.ComponentSchema {
  collectionName: 'components_auth_page_reset_password_validation';
  info: {
    displayName: 'Reset Password / Validation';
    icon: 'apps';
  };
  attributes: {
    confirmPasswordRequired: Schema.Attribute.String;
    passwordMin: Schema.Attribute.String;
    passwordRequired: Schema.Attribute.String;
    passwordsDoNotMatch: Schema.Attribute.String;
  };
}

export interface BlogPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_header';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    backLink: Schema.Attribute.String;
    badge: Schema.Attribute.String;
    categories: Schema.Attribute.Component<'blog-page.header-categories', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlogPageHeaderCategories extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_header_categories';
  info: {
    displayName: 'Header / Categories';
    icon: 'apps';
  };
  attributes: {
    itemId: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface BlogPagePage extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_page';
  info: {
    displayName: 'Page';
    icon: 'apps';
  };
  attributes: {
    categoryLabels: Schema.Attribute.Component<
      'blog-page.page-category-labels',
      false
    >;
    detailAlertPrefix: Schema.Attribute.String;
    detailAlertSuffix: Schema.Attribute.String;
    loading: Schema.Attribute.String;
    newsletterBtn: Schema.Attribute.String;
    newsletterDesc: Schema.Attribute.String;
    newsletterPlaceholder: Schema.Attribute.String;
    newsletterTitle: Schema.Attribute.String;
    noResults: Schema.Attribute.String;
    popularTitle: Schema.Attribute.String;
    posts: Schema.Attribute.Component<'blog-page.page-posts', true>;
    readMore: Schema.Attribute.String;
    searchBtn: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    tagsTitle: Schema.Attribute.String;
  };
}

export interface BlogPagePageCategoryLabels extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_page_category_labels';
  info: {
    displayName: 'Page / Category Labels';
    icon: 'apps';
  };
  attributes: {
    burs: Schema.Attribute.String;
    dil: Schema.Attribute.String;
    egitim: Schema.Attribute.String;
    vize: Schema.Attribute.String;
  };
}

export interface BlogPagePagePosts extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_page_posts';
  info: {
    displayName: 'Page / Posts';
    icon: 'apps';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    excerpt: Schema.Attribute.String;
    image: Schema.Attribute.String;
    itemId: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    views: Schema.Attribute.Integer;
  };
}

export interface ContactPageCards extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_cards';
  info: {
    displayName: 'Cards';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    details: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageFaq extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_faq';
  info: {
    displayName: 'Faq';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'contact-page.faq-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_faq_items';
  info: {
    displayName: 'Faq / Items';
    icon: 'apps';
  };
  attributes: {
    answer: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface ContactPageForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form';
  info: {
    displayName: 'Form';
    icon: 'apps';
  };
  attributes: {
    fields: Schema.Attribute.Component<'contact-page.form-fields', false>;
    submitBtn: Schema.Attribute.String;
    submittingBtn: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageFormFields extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_fields';
  info: {
    displayName: 'Form / Fields';
    icon: 'apps';
  };
  attributes: {
    email: Schema.Attribute.Component<'contact-page.form-fields-email', false>;
    fullname: Schema.Attribute.Component<
      'contact-page.form-fields-fullname',
      false
    >;
    interest: Schema.Attribute.Component<
      'contact-page.form-fields-interest',
      false
    >;
    message: Schema.Attribute.Component<
      'contact-page.form-fields-message',
      false
    >;
    phone: Schema.Attribute.Component<'contact-page.form-fields-phone', false>;
  };
}

export interface ContactPageFormFieldsEmail extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_fields_email';
  info: {
    displayName: 'Form / Fields / Email';
    icon: 'apps';
  };
  attributes: {
    errorInvalid: Schema.Attribute.String;
    errorRequired: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ContactPageFormFieldsFullname extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_fields_fullname';
  info: {
    displayName: 'Form / Fields / Fullname';
    icon: 'apps';
  };
  attributes: {
    error: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ContactPageFormFieldsInterest extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_fields_interest';
  info: {
    displayName: 'Form / Fields / Interest';
    icon: 'apps';
  };
  attributes: {
    error: Schema.Attribute.String;
    label: Schema.Attribute.String;
    options: Schema.Attribute.Component<
      'contact-page.form-fields-interest-options',
      true
    >;
    placeholder: Schema.Attribute.String;
  };
}

export interface ContactPageFormFieldsInterestOptions
  extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_fields_interest_options';
  info: {
    displayName: 'Form / Fields / Interest / Options';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContactPageFormFieldsMessage extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_fields_message';
  info: {
    displayName: 'Form / Fields / Message';
    icon: 'apps';
  };
  attributes: {
    error: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ContactPageFormFieldsPhone extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_fields_phone';
  info: {
    displayName: 'Form / Fields / Phone';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ContactPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_header';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_info';
  info: {
    displayName: 'Info';
    icon: 'apps';
  };
  attributes: {
    hours: Schema.Attribute.Component<'contact-page.info-hours', false>;
    office: Schema.Attribute.Component<'contact-page.info-office', false>;
    social: Schema.Attribute.Component<'contact-page.info-social', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageInfoHours extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_info_hours';
  info: {
    displayName: 'Info / Hours';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'contact-page.info-hours-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageInfoHoursItems extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_info_hours_items';
  info: {
    displayName: 'Info / Hours / Items';
    icon: 'apps';
  };
  attributes: {
    day: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContactPageInfoOffice extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_info_office';
  info: {
    displayName: 'Info / Office';
    icon: 'apps';
  };
  attributes: {
    addressLine1: Schema.Attribute.String;
    addressLine2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageInfoSocial extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_info_social';
  info: {
    displayName: 'Info / Social';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ContactPageMap extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_map';
  info: {
    displayName: 'Map';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface DashboardPageGroups extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_groups';
  info: {
    displayName: 'groups';
  };
  attributes: {
    ausbildung: Schema.Attribute.String;
    bachelor: Schema.Attribute.String;
    general: Schema.Attribute.String;
    language_course: Schema.Attribute.String;
    master: Schema.Attribute.String;
    phd: Schema.Attribute.String;
    sec81a: Schema.Attribute.String;
    studienkolleg: Schema.Attribute.String;
  };
}

export interface DashboardPagePages extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages';
  info: {
    displayName: 'Pages';
    icon: 'apps';
  };
  attributes: {
    adminAdvisors: Schema.Attribute.Component<
      'dashboard-page.pages-admin-advisors',
      false
    >;
    adminAssignments: Schema.Attribute.Component<
      'dashboard-page.pages-admin-assignments',
      false
    >;
    adminOverview: Schema.Attribute.Component<
      'dashboard-page.pages-admin-overview',
      false
    >;
    adminPayments: Schema.Attribute.Component<
      'dashboard-page.pages-admin-payments',
      false
    >;
    adminStudents: Schema.Attribute.Component<
      'dashboard-page.pages-admin-students',
      false
    >;
    advisorAppointments: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-appointments',
      false
    >;
    advisorMessages: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-messages',
      false
    >;
    advisorOverview: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-overview',
      false
    >;
    advisorStudentDetail: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail',
      false
    >;
    advisorStudents: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-students',
      false
    >;
    applications: Schema.Attribute.Component<
      'dashboard-page.pages-applications',
      false
    >;
    appointments: Schema.Attribute.Component<
      'dashboard-page.pages-appointments',
      false
    >;
    courses: Schema.Attribute.Component<'dashboard-page.pages-courses', false>;
    documents: Schema.Attribute.Component<
      'dashboard-page.pages-documents',
      false
    >;
    kassenbuch: Schema.Attribute.Component<
      'dashboard-page.pages-kassenbuch',
      false
    >;
    messages: Schema.Attribute.Component<
      'dashboard-page.pages-messages',
      false
    >;
    overview: Schema.Attribute.Component<
      'dashboard-page.pages-overview',
      false
    >;
    payments: Schema.Attribute.Component<
      'dashboard-page.pages-payments',
      false
    >;
    preInterview: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview',
      false
    >;
    profile: Schema.Attribute.Component<'dashboard-page.pages-profile', false>;
  };
}

export interface DashboardPagePagesAdminAdvisors
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_advisors';
  info: {
    displayName: 'Pages / Admin Advisors';
    icon: 'apps';
  };
  attributes: {
    activated: Schema.Attribute.String;
    confirmUnassignMessage: Schema.Attribute.String;
    confirmUnassignTitle: Schema.Attribute.String;
    createAdvisor: Schema.Attribute.Component<
      'dashboard-page.pages-admin-advisors-create',
      false
    >;
    deactivate: Schema.Attribute.String;
    deactivated: Schema.Attribute.String;
    defaultTitle: Schema.Attribute.String;
    description: Schema.Attribute.String;
    empty: Schema.Attribute.String;
    studentCount: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminAdvisorsCreate
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_advisors_create';
  info: {
    displayName: 'Pages / Admin Advisors / Create';
    icon: 'apps';
  };
  attributes: {
    bio: Schema.Attribute.String;
    bioPlaceholder: Schema.Attribute.String;
    cancel: Schema.Attribute.String;
    description: Schema.Attribute.String;
    email: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    firstNamePlaceholder: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    lastNamePlaceholder: Schema.Attribute.String;
    password: Schema.Attribute.String;
    passwordPlaceholder: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    specialties: Schema.Attribute.String;
    specialtiesPlaceholder: Schema.Attribute.String;
    submit: Schema.Attribute.String;
    submitting: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titlePlaceholder: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminAssignments
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_assignments';
  info: {
    displayName: 'Pages / Admin Assignments';
    icon: 'apps';
  };
  attributes: {
    allAssigned: Schema.Attribute.String;
    assign: Schema.Attribute.String;
    confirmMessage: Schema.Attribute.String;
    confirmTitle: Schema.Attribute.String;
    description: Schema.Attribute.String;
    table: Schema.Attribute.Component<
      'dashboard-page.pages-admin-assignments-table',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminAssignmentsTable
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_assignments_table';
  info: {
    displayName: 'Pages / Admin Assignments / Table';
    icon: 'apps';
  };
  attributes: {
    action: Schema.Attribute.String;
    assignTo: Schema.Attribute.String;
    email: Schema.Attribute.String;
    student: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminOverview
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_overview';
  info: {
    displayName: 'Pages / Admin Overview';
    icon: 'apps';
  };
  attributes: {
    greeting: Schema.Attribute.String;
    monthlyEarnings: Schema.Attribute.String;
    paid: Schema.Attribute.String;
    pending: Schema.Attribute.String;
    pendingApplications: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalAdvisors: Schema.Attribute.String;
    totalStudents: Schema.Attribute.String;
    unassignedStudents: Schema.Attribute.String;
    upcomingAppointments: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminPayments
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_payments';
  info: {
    displayName: 'Pages / Admin Payments';
    icon: 'apps';
  };
  attributes: {
    confirmMessage: Schema.Attribute.String;
    confirmTitle: Schema.Attribute.String;
    delete: Schema.Attribute.String;
    description: Schema.Attribute.String;
    empty: Schema.Attribute.String;
    emptyDesc: Schema.Attribute.String;
    save: Schema.Attribute.String;
    statuses: Schema.Attribute.Component<
      'dashboard-page.pages-admin-payments-statuses',
      false
    >;
    successMessages: Schema.Attribute.Component<
      'dashboard-page.pages-admin-payments-success',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminPaymentsStatuses
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_payments_statuses';
  info: {
    displayName: 'Pages / Admin Payments / Statuses';
    icon: 'apps';
  };
  attributes: {
    failed: Schema.Attribute.String;
    paid: Schema.Attribute.String;
    pending: Schema.Attribute.String;
    refunded: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminPaymentsSuccess
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_payments_success';
  info: {
    displayName: 'Pages / Admin Payments / Success';
    icon: 'apps';
  };
  attributes: {
    entryDeleted: Schema.Attribute.String;
    statusUpdated: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminStudents
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_students';
  info: {
    displayName: 'Pages / Admin Students';
    icon: 'apps';
  };
  attributes: {
    confirmAssignMessage: Schema.Attribute.String;
    confirmAssignTitle: Schema.Attribute.String;
    confirmDeleteMessage: Schema.Attribute.String;
    confirmDeleteTitle: Schema.Attribute.String;
    confirmUnassignMessage: Schema.Attribute.String;
    confirmUnassignTitle: Schema.Attribute.String;
    delete: Schema.Attribute.String;
    deleted: Schema.Attribute.String;
    description: Schema.Attribute.String;
    empty: Schema.Attribute.String;
    removeAssignment: Schema.Attribute.String;
    save: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    table: Schema.Attribute.Component<
      'dashboard-page.pages-admin-students-table',
      false
    >;
    title: Schema.Attribute.String;
    unassigned: Schema.Attribute.String;
    updated: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdminStudentsTable
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_admin_students_table';
  info: {
    displayName: 'Pages / Admin Students / Table';
    icon: 'apps';
  };
  attributes: {
    actions: Schema.Attribute.String;
    advisor: Schema.Attribute.String;
    email: Schema.Attribute.String;
    name: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorAppointments
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_appointments';
  info: {
    displayName: 'Pages / Advisor Appointments';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    filterAll: Schema.Attribute.String;
    noAppointments: Schema.Attribute.String;
    title: Schema.Attribute.String;
    withStudent: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorMessages
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_messages';
  info: {
    displayName: 'Pages / Advisor Messages';
    icon: 'apps';
  };
  attributes: {
    inbox: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    new: Schema.Attribute.String;
    noActiveChatDesc: Schema.Attribute.String;
    noActiveChatTitle: Schema.Attribute.String;
    noChats: Schema.Attribute.String;
    offline: Schema.Attribute.String;
    online: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorOverview
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_overview';
  info: {
    displayName: 'Pages / Advisor Overview';
    icon: 'apps';
  };
  attributes: {
    applicationStatusLabels: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-overview-application-status-labels',
      false
    >;
    appointmentTypes: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-overview-appointment-types',
      false
    >;
    greeting: Schema.Attribute.String;
    noApplications: Schema.Attribute.String;
    noAppointments: Schema.Attribute.String;
    pendingApplications: Schema.Attribute.String;
    recentStudents: Schema.Attribute.String;
    statApplications: Schema.Attribute.String;
    statAppointments: Schema.Attribute.String;
    statMessages: Schema.Attribute.String;
    statStudents: Schema.Attribute.String;
    statusLabels: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-overview-status-labels',
      false
    >;
    subtitle: Schema.Attribute.String;
    totalStudents: Schema.Attribute.String;
    unreadMessages: Schema.Attribute.String;
    upcomingAppointments: Schema.Attribute.String;
    viewAll: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorOverviewApplicationStatusLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_overview_application_status_labels';
  info: {
    displayName: 'Pages / Advisor Overview / Application Status Labels';
    icon: 'apps';
  };
  attributes: {
    accepted: Schema.Attribute.String;
    interview: Schema.Attribute.String;
    rejected: Schema.Attribute.String;
    reviewing: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorOverviewAppointmentTypes
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_overview_appointment_types';
  info: {
    displayName: 'Pages / Advisor Overview / Appointment Types';
    icon: 'apps';
  };
  attributes: {
    application: Schema.Attribute.String;
    consultation: Schema.Attribute.String;
    language: Schema.Attribute.String;
    visa: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorOverviewStatusLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_overview_status_labels';
  info: {
    displayName: 'Pages / Advisor Overview / Status Labels';
    icon: 'apps';
  };
  attributes: {
    cancelled: Schema.Attribute.String;
    completed: Schema.Attribute.String;
    upcoming: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetail
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail';
  info: {
    displayName: 'Pages / Advisor Student Detail';
    icon: 'apps';
  };
  attributes: {
    actions: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-actions',
      false
    >;
    appointmentStatuses: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-appointment-statuses',
      false
    >;
    booleans: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-booleans',
      false
    >;
    docStatusLabels: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-doc-status-labels',
      false
    >;
    documentCategory: Schema.Attribute.String;
    documentDate: Schema.Attribute.String;
    documentName: Schema.Attribute.String;
    documentStatus: Schema.Attribute.String;
    empty: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-empty',
      false
    >;
    fields: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-fields',
      false
    >;
    notes: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-notes',
      false
    >;
    notFound: Schema.Attribute.String;
    paymentAmount: Schema.Attribute.String;
    paymentCategories: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-payment-categories',
      false
    >;
    paymentDate: Schema.Attribute.String;
    paymentDescription: Schema.Attribute.String;
    paymentStatus: Schema.Attribute.String;
    paymentStatuses: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-payment-statuses',
      false
    >;
    sections: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-sections',
      false
    >;
    statusLabels: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-status-labels',
      false
    >;
    tableHeaders: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-table-headers',
      false
    >;
    tabs: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-tabs',
      false
    >;
    translationStatus: Schema.Attribute.Component<
      'dashboard-page.pages-advisor-student-detail-translation-status',
      false
    >;
    upcomingInterview: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailActions
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_actions';
  info: {
    displayName: 'Pages / Advisor Student Detail / Actions';
    icon: 'apps';
  };
  attributes: {
    addNote: Schema.Attribute.String;
    addPayment: Schema.Attribute.String;
    assignDocument: Schema.Attribute.String;
    cancel: Schema.Attribute.String;
    complete: Schema.Attribute.String;
    confirm: Schema.Attribute.String;
    createAppointment: Schema.Attribute.String;
    edit: Schema.Attribute.String;
    missing: Schema.Attribute.String;
    newApplication: Schema.Attribute.String;
    remove: Schema.Attribute.String;
    save: Schema.Attribute.String;
    start: Schema.Attribute.String;
    startTranslation: Schema.Attribute.String;
    wait: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailAppointmentStatuses
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_appointment_statuses';
  info: {
    displayName: 'Pages / Advisor Student Detail / Appointment Statuses';
    icon: 'apps';
  };
  attributes: {
    cancelled: Schema.Attribute.String;
    completed: Schema.Attribute.String;
    upcoming: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailBooleans
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_booleans';
  info: {
    displayName: 'Pages / Advisor Student Detail / Booleans';
    icon: 'apps';
  };
  attributes: {
    no: Schema.Attribute.String;
    yes: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailDocStatusLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_doc_status_labels';
  info: {
    displayName: 'Pages / Advisor Student Detail / Doc Status Labels';
    icon: 'apps';
  };
  attributes: {
    approved: Schema.Attribute.String;
    missing: Schema.Attribute.String;
    pending: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailEmpty
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_deta_2qn2tv';
  info: {
    displayName: 'Pages / Advisor Student Detail / Empty';
    icon: 'apps';
  };
  attributes: {
    applications: Schema.Attribute.String;
    appointments: Schema.Attribute.String;
    documents: Schema.Attribute.String;
    notes: Schema.Attribute.String;
    payments: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailFields
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_fields';
  info: {
    displayName: 'Pages / Advisor Student Detail / Fields';
    icon: 'apps';
  };
  attributes: {
    birthDate: Schema.Attribute.String;
    certificates: Schema.Attribute.String;
    department: Schema.Attribute.String;
    educationStatus: Schema.Attribute.String;
    email: Schema.Attribute.String;
    englishLevel: Schema.Attribute.String;
    expectations: Schema.Attribute.String;
    fundingSource: Schema.Attribute.String;
    germanLevel: Schema.Attribute.String;
    gpa: Schema.Attribute.String;
    graduationYear: Schema.Attribute.String;
    hasGreenPassport: Schema.Attribute.String;
    location: Schema.Attribute.String;
    monthlyBudget: Schema.Attribute.String;
    name: Schema.Attribute.String;
    nationality: Schema.Attribute.String;
    passportValidity: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    previousVisaApp: Schema.Attribute.String;
    schengenEntry: Schema.Attribute.String;
    school: Schema.Attribute.String;
    targetCountry: Schema.Attribute.String;
    targetEducationType: Schema.Attribute.String;
    targetField: Schema.Attribute.String;
    targetStartDate: Schema.Attribute.String;
    visaRejection: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailNotes
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_notes';
  info: {
    displayName: 'Pages / Advisor Student Detail / Notes';
    icon: 'apps';
  };
  attributes: {
    addNote: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    private: Schema.Attribute.String;
    privateNote: Schema.Attribute.String;
    privateNoteDesc: Schema.Attribute.String;
    public: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailPaymentCategories
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_payment_categories';
  info: {
    displayName: 'Pages / Advisor Student Detail / Payment Categories';
    icon: 'apps';
  };
  attributes: {
    application: Schema.Attribute.String;
    consultation: Schema.Attribute.String;
    course: Schema.Attribute.String;
    visa: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailPaymentStatuses
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_payment_statuses';
  info: {
    displayName: 'Pages / Advisor Student Detail / Payment Statuses';
    icon: 'apps';
  };
  attributes: {
    failed: Schema.Attribute.String;
    paid: Schema.Attribute.String;
    pending: Schema.Attribute.String;
    refunded: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailSections
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_deta_4jn5cd';
  info: {
    displayName: 'Pages / Advisor Student Detail / Sections';
    icon: 'apps';
  };
  attributes: {
    education: Schema.Attribute.String;
    financeVisa: Schema.Attribute.String;
    language: Schema.Attribute.String;
    personalInfo: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailStatusLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_status_labels';
  info: {
    displayName: 'Pages / Advisor Student Detail / Status Labels';
    icon: 'apps';
  };
  attributes: {
    accepted: Schema.Attribute.String;
    interview: Schema.Attribute.String;
    rejected: Schema.Attribute.String;
    reviewing: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailTableHeaders
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_table_headers';
  info: {
    displayName: 'Pages / Advisor Student Detail / Table Headers';
    icon: 'apps';
  };
  attributes: {
    action: Schema.Attribute.String;
    document: Schema.Attribute.String;
    language: Schema.Attribute.String;
    note: Schema.Attribute.String;
    status: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_deta_3yt4ab';
  info: {
    displayName: 'Pages / Advisor Student Detail / Tabs';
    icon: 'apps';
  };
  attributes: {
    applications: Schema.Attribute.String;
    appointments: Schema.Attribute.String;
    documents: Schema.Attribute.String;
    general: Schema.Attribute.String;
    notes: Schema.Attribute.String;
    payments: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudentDetailTranslationStatus
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_student_detail_translation_status';
  info: {
    displayName: 'Pages / Advisor Student Detail / Translation Status';
    icon: 'apps';
  };
  attributes: {
    completed: Schema.Attribute.String;
    inProgress: Schema.Attribute.String;
    pending: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAdvisorStudents
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_advisor_students';
  info: {
    displayName: 'Pages / Advisor Students';
    icon: 'apps';
  };
  attributes: {
    country: Schema.Attribute.String;
    description: Schema.Attribute.String;
    educationType: Schema.Attribute.String;
    filterAll: Schema.Attribute.String;
    noStudents: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    status: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesApplications extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_applications';
  info: {
    displayName: 'Pages / Applications';
    icon: 'apps';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'dashboard-page.pages-applications-card',
      false
    >;
    description: Schema.Attribute.String;
    empty: Schema.Attribute.Component<
      'dashboard-page.pages-applications-empty',
      false
    >;
    filters: Schema.Attribute.Component<
      'dashboard-page.pages-applications-filters',
      false
    >;
    statuses: Schema.Attribute.Component<
      'dashboard-page.pages-applications-statuses',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesApplicationsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_applications_card';
  info: {
    displayName: 'Pages / Applications / Card';
    icon: 'apps';
  };
  attributes: {
    applicationDate: Schema.Attribute.String;
    completed: Schema.Attribute.String;
    details: Schema.Attribute.String;
    process: Schema.Attribute.String;
    upcomingInterview: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesApplicationsEmpty
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_applications_empty';
  info: {
    displayName: 'Pages / Applications / Empty';
    icon: 'apps';
  };
  attributes: {
    noApplications: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesApplicationsFilters
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_applications_filters';
  info: {
    displayName: 'Pages / Applications / Filters';
    icon: 'apps';
  };
  attributes: {
    all: Schema.Attribute.String;
    approved: Schema.Attribute.String;
    interview: Schema.Attribute.String;
    pending: Schema.Attribute.String;
    rejected: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesApplicationsStatuses
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_applications_statuses';
  info: {
    displayName: 'Pages / Applications / Statuses';
    icon: 'apps';
  };
  attributes: {
    approved: Schema.Attribute.String;
    interview: Schema.Attribute.String;
    pending: Schema.Attribute.String;
    rejected: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAppointments extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_appointments';
  info: {
    displayName: 'Pages / Appointments';
    icon: 'apps';
  };
  attributes: {
    actions: Schema.Attribute.Component<
      'dashboard-page.pages-appointments-actions',
      false
    >;
    description: Schema.Attribute.String;
    empty: Schema.Attribute.Component<
      'dashboard-page.pages-appointments-empty',
      false
    >;
    filters: Schema.Attribute.Component<
      'dashboard-page.pages-appointments-filters',
      false
    >;
    locations: Schema.Attribute.Component<
      'dashboard-page.pages-appointments-locations',
      false
    >;
    note: Schema.Attribute.String;
    title: Schema.Attribute.String;
    types: Schema.Attribute.Component<
      'dashboard-page.pages-appointments-types',
      false
    >;
  };
}

export interface DashboardPagePagesAppointmentsActions
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_appointments_actions';
  info: {
    displayName: 'Pages / Appointments / Actions';
    icon: 'apps';
  };
  attributes: {
    joinMeeting: Schema.Attribute.String;
    linkActiveBefore: Schema.Attribute.String;
    timeExpired: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAppointmentsEmpty
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_appointments_empty';
  info: {
    displayName: 'Pages / Appointments / Empty';
    icon: 'apps';
  };
  attributes: {
    cancelled: Schema.Attribute.String;
    past: Schema.Attribute.String;
    upcoming: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAppointmentsFilters
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_appointments_filters';
  info: {
    displayName: 'Pages / Appointments / Filters';
    icon: 'apps';
  };
  attributes: {
    all: Schema.Attribute.String;
    cancelled: Schema.Attribute.String;
    past: Schema.Attribute.String;
    upcoming: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAppointmentsLocations
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_appointments_locations';
  info: {
    displayName: 'Pages / Appointments / Locations';
    icon: 'apps';
  };
  attributes: {
    faceToFace: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesAppointmentsTypes
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_appointments_types';
  info: {
    displayName: 'Pages / Appointments / Types';
    icon: 'apps';
  };
  attributes: {
    application: Schema.Attribute.String;
    consultation: Schema.Attribute.String;
    languageCourse: Schema.Attribute.String;
    visa: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesCourses extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_courses';
  info: {
    displayName: 'Pages / Courses';
    icon: 'apps';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'dashboard-page.pages-courses-card',
      false
    >;
    description: Schema.Attribute.String;
    empty: Schema.Attribute.String;
    statuses: Schema.Attribute.Component<
      'dashboard-page.pages-courses-statuses',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesCoursesCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_courses_card';
  info: {
    displayName: 'Pages / Courses / Card';
    icon: 'apps';
  };
  attributes: {
    active: Schema.Attribute.String;
    certificate: Schema.Attribute.String;
    completed: Schema.Attribute.String;
    completedCount: Schema.Attribute.String;
    instructor: Schema.Attribute.String;
    progress: Schema.Attribute.String;
    schedule: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesCoursesStatuses
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_courses_statuses';
  info: {
    displayName: 'Pages / Courses / Statuses';
    icon: 'apps';
  };
  attributes: {
    active: Schema.Attribute.String;
    completed: Schema.Attribute.String;
    pending: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesDocuments extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_documents';
  info: {
    displayName: 'Pages / Documents';
    icon: 'apps';
  };
  attributes: {
    actions: Schema.Attribute.Component<
      'dashboard-page.pages-documents-actions',
      false
    >;
    allAssigned: Schema.Attribute.String;
    assignButton: Schema.Attribute.String;
    assignNotePlaceholder: Schema.Attribute.String;
    assignTitle: Schema.Attribute.String;
    cancel: Schema.Attribute.String;
    categories: Schema.Attribute.Component<
      'dashboard-page.pages-documents-categories',
      false
    >;
    description: Schema.Attribute.String;
    emptyDesc: Schema.Attribute.String;
    emptyList: Schema.Attribute.String;
    groups: Schema.Attribute.Component<'dashboard-page.groups', false>;
    noSearchResults: Schema.Attribute.String;
    progressCompleted: Schema.Attribute.String;
    progressSuffix: Schema.Attribute.String;
    progressTitle: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    selectedCount: Schema.Attribute.String;
    statuses: Schema.Attribute.Component<
      'dashboard-page.pages-documents-statuses',
      false
    >;
    subgroups: Schema.Attribute.JSON;
    templates: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    upload: Schema.Attribute.Component<
      'dashboard-page.pages-documents-upload',
      false
    >;
  };
}

export interface DashboardPagePagesDocumentsActions
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_documents_actions';
  info: {
    displayName: 'Pages / Documents / Actions';
    icon: 'apps';
  };
  attributes: {
    download: Schema.Attribute.String;
    upload: Schema.Attribute.String;
    view: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesDocumentsCategories
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_documents_categories';
  info: {
    displayName: 'Pages / Documents / Categories';
    icon: 'apps';
  };
  attributes: {
    academic: Schema.Attribute.String;
    all: Schema.Attribute.String;
    identity: Schema.Attribute.String;
    language: Schema.Attribute.String;
    other: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesDocumentsStatuses
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_documents_statuses';
  info: {
    displayName: 'Pages / Documents / Statuses';
    icon: 'apps';
  };
  attributes: {
    approved: Schema.Attribute.String;
    notUploaded: Schema.Attribute.String;
    reviewing: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesDocumentsUpload
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_documents_upload';
  info: {
    displayName: 'Pages / Documents / Upload';
    icon: 'apps';
  };
  attributes: {
    loading: Schema.Attribute.String;
    notYetUploaded: Schema.Attribute.String;
    uploadDate: Schema.Attribute.String;
    uploadFailed: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesKassenbuch extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_kassenbuch';
  info: {
    displayName: 'Pages / Kassenbuch';
    icon: 'apps';
  };
  attributes: {
    addEntry: Schema.Attribute.String;
    allPeriod: Schema.Attribute.String;
    allYear: Schema.Attribute.String;
    amount: Schema.Attribute.String;
    amountPlaceholder: Schema.Attribute.String;
    balance: Schema.Attribute.String;
    cancel: Schema.Attribute.String;
    currency: Schema.Attribute.String;
    date: Schema.Attribute.String;
    datePlaceholder: Schema.Attribute.String;
    delete: Schema.Attribute.String;
    description: Schema.Attribute.String;
    descriptionField: Schema.Attribute.String;
    descriptionPlaceholder: Schema.Attribute.String;
    downloadReport: Schema.Attribute.String;
    edit: Schema.Attribute.String;
    expense: Schema.Attribute.String;
    file: Schema.Attribute.String;
    fileAccept: Schema.Attribute.String;
    income: Schema.Attribute.String;
    invoiceFile: Schema.Attribute.String;
    modalTitle: Schema.Attribute.String;
    monthly: Schema.Attribute.String;
    newEntry: Schema.Attribute.String;
    noEntries: Schema.Attribute.String;
    noEntriesDesc: Schema.Attribute.String;
    period: Schema.Attribute.String;
    save: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleField: Schema.Attribute.String;
    titlePlaceholder: Schema.Attribute.String;
    totalExpense: Schema.Attribute.String;
    totalIncome: Schema.Attribute.String;
    type: Schema.Attribute.String;
    typePlaceholder: Schema.Attribute.String;
    yearly: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesMessages extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_messages';
  info: {
    displayName: 'Pages / Messages';
    icon: 'apps';
  };
  attributes: {
    advisor: Schema.Attribute.String;
    description: Schema.Attribute.String;
    inbox: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    new: Schema.Attribute.String;
    noActiveChatDesc: Schema.Attribute.String;
    noActiveChatTitle: Schema.Attribute.String;
    noChats: Schema.Attribute.String;
    offline: Schema.Attribute.String;
    online: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesOverview extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_overview';
  info: {
    displayName: 'Pages / Overview';
    icon: 'apps';
  };
  attributes: {
    advisor: Schema.Attribute.Component<
      'dashboard-page.pages-overview-advisor',
      false
    >;
  };
}

export interface DashboardPagePagesOverviewAdvisor
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_overview_advisor';
  info: {
    displayName: 'Pages / Overview / Advisor';
    icon: 'apps';
  };
  attributes: {
    assignedDate: Schema.Attribute.String;
    notAssignedDesc: Schema.Attribute.String;
    notAssignedTitle: Schema.Attribute.String;
    sendMessage: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPayments extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_payments';
  info: {
    displayName: 'Pages / Payments';
    icon: 'apps';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'dashboard-page.pages-payments-card',
      false
    >;
    description: Schema.Attribute.String;
    empty: Schema.Attribute.String;
    filters: Schema.Attribute.Component<
      'dashboard-page.pages-payments-filters',
      false
    >;
    modal: Schema.Attribute.Component<
      'dashboard-page.pages-payments-modal',
      false
    >;
    statuses: Schema.Attribute.Component<
      'dashboard-page.pages-payments-statuses',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPaymentsCard extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_payments_card';
  info: {
    displayName: 'Pages / Payments / Card';
    icon: 'apps';
  };
  attributes: {
    amount: Schema.Attribute.String;
    date: Schema.Attribute.String;
    invoice: Schema.Attribute.String;
    pendingAmount: Schema.Attribute.String;
    totalPaid: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPaymentsFilters
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_payments_filters';
  info: {
    displayName: 'Pages / Payments / Filters';
    icon: 'apps';
  };
  attributes: {
    all: Schema.Attribute.String;
    failed: Schema.Attribute.String;
    paid: Schema.Attribute.String;
    pending: Schema.Attribute.String;
    refunded: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPaymentsModal
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_payments_modal';
  info: {
    displayName: 'Pages / Payments / Modal';
    icon: 'apps';
  };
  attributes: {
    accountHolder: Schema.Attribute.String;
    amountLabel: Schema.Attribute.String;
    bank: Schema.Attribute.String;
    bankInfo: Schema.Attribute.String;
    bic: Schema.Attribute.String;
    close: Schema.Attribute.String;
    copyCode: Schema.Attribute.String;
    copyIban: Schema.Attribute.String;
    iban: Schema.Attribute.String;
    instruction: Schema.Attribute.String;
    title: Schema.Attribute.String;
    warning: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPaymentsStatuses
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_payments_statuses';
  info: {
    displayName: 'Pages / Payments / Statuses';
    icon: 'apps';
  };
  attributes: {
    failed: Schema.Attribute.String;
    paid: Schema.Attribute.String;
    pending: Schema.Attribute.String;
    refunded: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterview extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview';
  info: {
    displayName: 'Pages / Pre Interview';
    icon: 'apps';
  };
  attributes: {
    educationOptions: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview-education-options',
      false
    >;
    errors: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview-errors',
      false
    >;
    fields: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview-fields',
      false
    >;
    fundingOptions: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview-funding-options',
      false
    >;
    steps: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview-steps',
      false
    >;
    submit: Schema.Attribute.String;
    submitting: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    success: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview-success',
      false
    >;
    targetEducationOptions: Schema.Attribute.Component<
      'dashboard-page.pages-pre-interview-target-education-options',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterviewEducationOptions
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview_educa_2n1es6';
  info: {
    displayName: 'Pages / Pre Interview / Education Options';
    icon: 'apps';
  };
  attributes: {
    lise_mezunu: Schema.Attribute.String;
    lise_ogrencisi: Schema.Attribute.String;
    universite_mezunu: Schema.Attribute.String;
    universite_ogrencisi: Schema.Attribute.String;
    yuksek_lisans: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterviewErrors
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview_errors';
  info: {
    displayName: 'Pages / Pre Interview / Errors';
    icon: 'apps';
  };
  attributes: {
    consentRequired: Schema.Attribute.String;
    requiredFields: Schema.Attribute.String;
    submitFailed: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterviewFields
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview_fields';
  info: {
    displayName: 'Pages / Pre Interview / Fields';
    icon: 'apps';
  };
  attributes: {
    birthDate: Schema.Attribute.String;
    certificates: Schema.Attribute.String;
    certificatesPlaceholder: Schema.Attribute.String;
    city: Schema.Attribute.String;
    consentText: Schema.Attribute.String;
    country: Schema.Attribute.String;
    currentVisaProcess: Schema.Attribute.String;
    department: Schema.Attribute.String;
    educationStatus: Schema.Attribute.String;
    email: Schema.Attribute.String;
    englishLevel: Schema.Attribute.String;
    expectations: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    fundingSource: Schema.Attribute.String;
    germanLevel: Schema.Attribute.String;
    gpa: Schema.Attribute.String;
    graduationYear: Schema.Attribute.String;
    hasGreenPassport: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    monthlyBudget: Schema.Attribute.String;
    nationality: Schema.Attribute.String;
    notes: Schema.Attribute.String;
    passportValidity: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    previousAbroadExperience: Schema.Attribute.String;
    previousVisaApplication: Schema.Attribute.String;
    schengen90DaysUsed: Schema.Attribute.String;
    schengenEntry: Schema.Attribute.String;
    school: Schema.Attribute.String;
    targetCountry: Schema.Attribute.String;
    targetEducationType: Schema.Attribute.String;
    targetField: Schema.Attribute.String;
    targetStartDate: Schema.Attribute.String;
    visaRejectionReason: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterviewFundingOptions
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview_fundi_1ec87xn';
  info: {
    displayName: 'Pages / Pre Interview / Funding Options';
    icon: 'apps';
  };
  attributes: {
    aile_destegi: Schema.Attribute.String;
    burs: Schema.Attribute.String;
    kredi: Schema.Attribute.String;
    sponsorluk: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterviewSteps
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview_steps';
  info: {
    displayName: 'Pages / Pre Interview / Steps';
    icon: 'apps';
  };
  attributes: {
    additional: Schema.Attribute.String;
    education: Schema.Attribute.String;
    financeVisa: Schema.Attribute.String;
    language: Schema.Attribute.String;
    passport: Schema.Attribute.String;
    personal: Schema.Attribute.String;
    review: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterviewSuccess
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview_success';
  info: {
    displayName: 'Pages / Pre Interview / Success';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesPreInterviewTargetEducationOptions
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_pre_interview_targe_1oy5mne';
  info: {
    displayName: 'Pages / Pre Interview / Target Education Options';
    icon: 'apps';
  };
  attributes: {
    berufskolleg_ausbildung: Schema.Attribute.String;
    dil_egitimi: Schema.Attribute.String;
    kolej_foundation: Schema.Attribute.String;
    lisans: Schema.Attribute.String;
    sommer_winter_school: Schema.Attribute.String;
    yuksek_lisans: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfile extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile';
  info: {
    displayName: 'Pages / Profile';
    icon: 'apps';
  };
  attributes: {
    biometricPhoto: Schema.Attribute.Component<
      'dashboard-page.pages-profile-biometric-photo',
      false
    >;
    buttons: Schema.Attribute.Component<
      'dashboard-page.pages-profile-buttons',
      false
    >;
    cv: Schema.Attribute.Component<'dashboard-page.pages-profile-cv', false>;
    description: Schema.Attribute.String;
    fields: Schema.Attribute.Component<
      'dashboard-page.pages-profile-fields',
      false
    >;
    options: Schema.Attribute.Component<
      'dashboard-page.pages-profile-options',
      false
    >;
    placeholders: Schema.Attribute.Component<
      'dashboard-page.pages-profile-placeholders',
      false
    >;
    sections: Schema.Attribute.Component<
      'dashboard-page.pages-profile-sections',
      false
    >;
    tabs: Schema.Attribute.Component<
      'dashboard-page.pages-profile-tabs',
      false
    >;
    title: Schema.Attribute.String;
    validation: Schema.Attribute.Component<
      'dashboard-page.pages-profile-validation',
      false
    >;
  };
}

export interface DashboardPagePagesProfileBiometricPhoto
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_biometric_photo';
  info: {
    displayName: 'Pages / Profile / Biometric Photo';
    icon: 'apps';
  };
  attributes: {
    change: Schema.Attribute.String;
    instruction: Schema.Attribute.String;
    label: Schema.Attribute.String;
    noPhoto: Schema.Attribute.String;
    purpose: Schema.Attribute.String;
    sizeError: Schema.Attribute.String;
    specs: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfileButtons
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_buttons';
  info: {
    displayName: 'Pages / Profile / Buttons';
    icon: 'apps';
  };
  attributes: {
    add: Schema.Attribute.String;
    change: Schema.Attribute.String;
    downloadPdf: Schema.Attribute.String;
    save: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfileCv extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_cv';
  info: {
    displayName: 'Pages / Profile / CV';
    icon: 'apps';
  };
  attributes: {
    birth: Schema.Attribute.String;
    certificates: Schema.Attribute.String;
    contact: Schema.Attribute.String;
    education: Schema.Attribute.String;
    experience: Schema.Attribute.String;
    languages: Schema.Attribute.String;
    maritalStatus: Schema.Attribute.String;
    nationality: Schema.Attribute.String;
    ongoing: Schema.Attribute.String;
    personalInfo: Schema.Attribute.String;
    skills: Schema.Attribute.String;
    summary: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfileFields
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_fields';
  info: {
    displayName: 'Pages / Profile / Fields';
    icon: 'apps';
  };
  attributes: {
    address: Schema.Attribute.String;
    birthDate: Schema.Attribute.String;
    birthPlace: Schema.Attribute.String;
    certificateName: Schema.Attribute.String;
    company: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    department: Schema.Attribute.String;
    description: Schema.Attribute.String;
    driversLicense: Schema.Attribute.String;
    email: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    github: Schema.Attribute.String;
    gpa: Schema.Attribute.String;
    issuingOrganization: Schema.Attribute.String;
    languageName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    level: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    location: Schema.Attribute.String;
    maritalStatus: Schema.Attribute.String;
    nationality: Schema.Attribute.String;
    ongoing: Schema.Attribute.String;
    organization: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    position: Schema.Attribute.String;
    professionalSummary: Schema.Attribute.String;
    referenceName: Schema.Attribute.String;
    responsibilities: Schema.Attribute.String;
    school: Schema.Attribute.String;
    scoreDate: Schema.Attribute.String;
    skillName: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfileOptions
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_options';
  info: {
    displayName: 'Pages / Profile / Options';
    icon: 'apps';
  };
  attributes: {
    degreeAssociates: Schema.Attribute.String;
    degreeBachelors: Schema.Attribute.String;
    degreeHighSchool: Schema.Attribute.String;
    degreeMasters: Schema.Attribute.String;
    degreePhd: Schema.Attribute.String;
    languageA1: Schema.Attribute.String;
    languageA2: Schema.Attribute.String;
    languageB1: Schema.Attribute.String;
    languageB2: Schema.Attribute.String;
    languageC1: Schema.Attribute.String;
    languageC2: Schema.Attribute.String;
    maritalStatusMarried: Schema.Attribute.String;
    maritalStatusSingle: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfilePlaceholders
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_placeholders';
  info: {
    displayName: 'Pages / Profile / Placeholders';
    icon: 'apps';
  };
  attributes: {
    certificateName: Schema.Attribute.String;
    company: Schema.Attribute.String;
    department: Schema.Attribute.String;
    gpa: Schema.Attribute.String;
    languageName: Schema.Attribute.String;
    location: Schema.Attribute.String;
    position: Schema.Attribute.String;
    referenceName: Schema.Attribute.String;
    responsibilities: Schema.Attribute.String;
    school: Schema.Attribute.String;
    scoreDate: Schema.Attribute.String;
    skillName: Schema.Attribute.String;
    summary: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfileSections
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_sections';
  info: {
    displayName: 'Pages / Profile / Sections';
    icon: 'apps';
  };
  attributes: {
    certificates: Schema.Attribute.String;
    education: Schema.Attribute.String;
    experience: Schema.Attribute.String;
    languages: Schema.Attribute.String;
    personalInfo: Schema.Attribute.String;
    references: Schema.Attribute.String;
    skills: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfileTabs extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_tabs';
  info: {
    displayName: 'Pages / Profile / Tabs';
    icon: 'apps';
  };
  attributes: {
    certificates: Schema.Attribute.String;
    education: Schema.Attribute.String;
    experience: Schema.Attribute.String;
    languages: Schema.Attribute.String;
    personal: Schema.Attribute.String;
    preview: Schema.Attribute.String;
    references: Schema.Attribute.String;
    skills: Schema.Attribute.String;
  };
}

export interface DashboardPagePagesProfileValidation
  extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_pages_profile_validation';
  info: {
    displayName: 'Pages / Profile / Validation';
    icon: 'apps';
  };
  attributes: {
    pdfError: Schema.Attribute.String;
    pdfUnknownError: Schema.Attribute.String;
    photoSizeError: Schema.Attribute.String;
    saveSuccess: Schema.Attribute.String;
  };
}

export interface DashboardPageRoutes extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_routes';
  info: {
    displayName: 'Routes';
    icon: 'apps';
  };
  attributes: {
    basvurularim: Schema.Attribute.String;
    belgelerim: Schema.Attribute.String;
    dashboard: Schema.Attribute.String;
    kurslarim: Schema.Attribute.String;
    mesajlarim: Schema.Attribute.String;
    odemelerim: Schema.Attribute.String;
    profilim: Schema.Attribute.String;
    randevularim: Schema.Attribute.String;
  };
}

export interface DashboardPageSidebar extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_page_sidebar';
  info: {
    displayName: 'Sidebar';
    icon: 'apps';
  };
  attributes: {
    adminAdvisors: Schema.Attribute.String;
    adminAssignments: Schema.Attribute.String;
    adminCourses: Schema.Attribute.String;
    adminDashboard: Schema.Attribute.String;
    adminPayments: Schema.Attribute.String;
    adminStudents: Schema.Attribute.String;
    advisorAppointments: Schema.Attribute.String;
    advisorCourses: Schema.Attribute.String;
    advisorDashboard: Schema.Attribute.String;
    advisorMessages: Schema.Attribute.String;
    advisorStudents: Schema.Attribute.String;
    basvurularim: Schema.Attribute.String;
    belgelerim: Schema.Attribute.String;
    dashboard: Schema.Attribute.String;
    kassenbuch: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Kassenbuch'>;
    kurslarim: Schema.Attribute.String;
    logout: Schema.Attribute.String;
    mesajlarim: Schema.Attribute.String;
    odemelerim: Schema.Attribute.String;
    profilim: Schema.Attribute.String;
    randevularim: Schema.Attribute.String;
    switchToAdmin: Schema.Attribute.String;
    switchToAdvisor: Schema.Attribute.String;
    switchToStudent: Schema.Attribute.String;
  };
}

export interface DatenschutzHeader extends Struct.ComponentSchema {
  collectionName: 'components_datenschutz_headers';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DatenschutzSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_datenschutz_section_items';
  info: {
    displayName: 'Section Item';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ErrorsPageNotFound extends Struct.ComponentSchema {
  collectionName: 'components_errors_page_not_found';
  info: {
    displayName: 'Not Found';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    homeLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErrorsPageRuntime extends Struct.ComponentSchema {
  collectionName: 'components_errors_page_runtime';
  info: {
    displayName: 'Runtime';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    retry: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterCta extends Struct.ComponentSchema {
  collectionName: 'components_footer_cta';
  info: {
    displayName: 'Cta';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    primaryBtnIcon: Schema.Attribute.String;
    primaryBtnText: Schema.Attribute.String;
    secondaryBtn: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links';
  info: {
    displayName: 'Quick Links';
    icon: 'apps';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HeaderBottomNav extends Struct.ComponentSchema {
  collectionName: 'components_header_bottom_nav';
  info: {
    displayName: 'Bottom Nav';
    icon: 'apps';
  };
  attributes: {
    appointment: Schema.Attribute.String;
    explore: Schema.Attribute.String;
    home: Schema.Attribute.String;
    pricing: Schema.Attribute.String;
    profile: Schema.Attribute.String;
  };
}

export interface HeaderNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_nav_links';
  info: {
    displayName: 'Nav Links';
    icon: 'apps';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HomepageAccommodation extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation';
  info: {
    displayName: 'Accommodation';
    icon: 'apps';
  };
  attributes: {
    detailBtnLabel: Schema.Attribute.String;
    details: Schema.Attribute.Component<
      'homepage.accommodation-details',
      false
    >;
    items: Schema.Attribute.Component<'homepage.accommodation-items', true>;
    popup: Schema.Attribute.Component<'homepage.accommodation-popup', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAccommodationDetails extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation_details';
  info: {
    displayName: 'Accommodation / Details';
    icon: 'apps';
  };
  attributes: {
    doppelzimmer: Schema.Attribute.Component<
      'homepage.accommodation-details-doppelzimmer',
      false
    >;
    einzelzimmer: Schema.Attribute.Component<
      'homepage.accommodation-details-einzelzimmer',
      false
    >;
    wg: Schema.Attribute.Component<'homepage.accommodation-details-wg', false>;
    wohnheim: Schema.Attribute.Component<
      'homepage.accommodation-details-wohnheim',
      false
    >;
  };
}

export interface HomepageAccommodationDetailsDoppelzimmer
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation_details_doppelzimmer';
  info: {
    displayName: 'Accommodation / Details / Doppelzimmer';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAccommodationDetailsEinzelzimmer
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation_details_einzelzimmer';
  info: {
    displayName: 'Accommodation / Details / Einzelzimmer';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAccommodationDetailsWg extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation_details_wg';
  info: {
    displayName: 'Accommodation / Details / Wg';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAccommodationDetailsWohnheim
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation_details_wohnheim';
  info: {
    displayName: 'Accommodation / Details / Wohnheim';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAccommodationItems extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation_items';
  info: {
    displayName: 'Accommodation / Items';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    itemId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAccommodationPopup extends Struct.ComponentSchema {
  collectionName: 'components_homepage_accommodation_popup';
  info: {
    displayName: 'Accommodation / Popup';
    icon: 'apps';
  };
  attributes: {
    infoBtn: Schema.Attribute.String;
    infoPrefix: Schema.Attribute.String;
    infoSuffix: Schema.Attribute.String;
  };
}

export interface HomepageComments extends Struct.ComponentSchema {
  collectionName: 'components_homepage_comments';
  info: {
    displayName: 'Comments';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'homepage.comments-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCommentsItems extends Struct.ComponentSchema {
  collectionName: 'components_homepage_comments_items';
  info: {
    displayName: 'Comments / Items';
    icon: 'apps';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    stars: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HomepageDestinations extends Struct.ComponentSchema {
  collectionName: 'components_homepage_destinations';
  info: {
    displayName: 'Destinations';
    icon: 'earth';
  };
  attributes: {
    items: Schema.Attribute.Component<'homepage.destinations-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageDestinationsItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_destinations_items';
  info: {
    displayName: 'Destinations Item';
    icon: 'earth';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    caption: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    flag: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero';
  info: {
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaPrimary: Schema.Attribute.String;
    ctaSecondary: Schema.Attribute.String;
    descriptionEmphasis: Schema.Attribute.String;
    descriptionEnd: Schema.Attribute.String;
    descriptionStart: Schema.Attribute.String;
    floatingCards: Schema.Attribute.Component<
      'homepage.hero-floating-cards',
      true
    >;
    imageAlt: Schema.Attribute.String;
    scrollLabel: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'homepage.hero-stats', true>;
    titleEnd: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
    trustBadges: Schema.Attribute.Component<'i18n-shared.value-item', true>;
  };
}

export interface HomepageHeroFloatingCards extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_floating_cards';
  info: {
    displayName: 'Hero / Floating Cards';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HomepageHeroStats extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_stats';
  info: {
    displayName: 'Hero / Stats';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    target: Schema.Attribute.Decimal;
  };
}

export interface HomepageHowToWork extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_to_work';
  info: {
    displayName: 'How To Work';
    icon: 'apps';
  };
  attributes: {
    steps: Schema.Attribute.Component<'homepage.how-to-work-steps', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHowToWorkSteps extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_to_work_steps';
  info: {
    displayName: 'How To Work / Steps';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOnlineCourses extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses';
  info: {
    displayName: 'Online Courses';
    icon: 'apps';
  };
  attributes: {
    detailBtnLabel: Schema.Attribute.String;
    details: Schema.Attribute.Component<
      'homepage.online-courses-details',
      false
    >;
    items: Schema.Attribute.Component<'homepage.online-courses-items', true>;
    popup: Schema.Attribute.Component<'homepage.online-courses-popup', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOnlineCoursesDetails extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses_details';
  info: {
    displayName: 'Online Courses / Details';
    icon: 'apps';
  };
  attributes: {
    english: Schema.Attribute.Component<
      'homepage.online-courses-details-english',
      false
    >;
    german: Schema.Attribute.Component<
      'homepage.online-courses-details-german',
      false
    >;
  };
}

export interface HomepageOnlineCoursesDetailsEnglish
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses_details_english';
  info: {
    displayName: 'Online Courses / Details / English';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    levels: Schema.Attribute.Component<
      'homepage.online-courses-details-english-levels',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOnlineCoursesDetailsEnglishLevels
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses_details_english_levels';
  info: {
    displayName: 'Online Courses / Details / English / Levels';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    level: Schema.Attribute.String;
  };
}

export interface HomepageOnlineCoursesDetailsGerman
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses_details_german';
  info: {
    displayName: 'Online Courses / Details / German';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    levels: Schema.Attribute.Component<
      'homepage.online-courses-details-german-levels',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOnlineCoursesDetailsGermanLevels
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses_details_german_levels';
  info: {
    displayName: 'Online Courses / Details / German / Levels';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    level: Schema.Attribute.String;
  };
}

export interface HomepageOnlineCoursesItems extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses_items';
  info: {
    displayName: 'Online Courses / Items';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    itemId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOnlineCoursesPopup extends Struct.ComponentSchema {
  collectionName: 'components_homepage_online_courses_popup';
  info: {
    displayName: 'Online Courses / Popup';
    icon: 'apps';
  };
  attributes: {
    infoBtn: Schema.Attribute.String;
    infoPrefix: Schema.Attribute.String;
    infoSuffix: Schema.Attribute.String;
  };
}

export interface HomepageServices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_services';
  info: {
    displayName: 'Services';
    icon: 'apps';
  };
  attributes: {
    detailLinkLabel: Schema.Attribute.String;
    items: Schema.Attribute.Component<'homepage.services-items', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewAllLabel: Schema.Attribute.String;
  };
}

export interface HomepageServicesItems extends Struct.ComponentSchema {
  collectionName: 'components_homepage_services_items';
  info: {
    displayName: 'Services / Items';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageStatistics extends Struct.ComponentSchema {
  collectionName: 'components_homepage_statistics';
  info: {
    displayName: 'Statistics';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'homepage.statistics-items', true>;
  };
}

export interface HomepageStatisticsItems extends Struct.ComponentSchema {
  collectionName: 'components_homepage_statistics_items';
  info: {
    displayName: 'Statistics / Items';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    target: Schema.Attribute.Decimal;
  };
}

export interface I18NSharedValueItem extends Struct.ComponentSchema {
  collectionName: 'components_i18n_shared_value_items';
  info: {
    displayName: 'Value Item';
    icon: 'bulletList';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface ImpressumHeader extends Struct.ComponentSchema {
  collectionName: 'components_impressum_headers';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ImpressumSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_impressum_section_items';
  info: {
    displayName: 'Section Item';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface MetadataAbout extends Struct.ComponentSchema {
  collectionName: 'components_metadata_about';
  info: {
    displayName: 'About';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataAgb extends Struct.ComponentSchema {
  collectionName: 'components_metadata_agbs';
  info: {
    displayName: 'AGB';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataBlog extends Struct.ComponentSchema {
  collectionName: 'components_metadata_blog';
  info: {
    displayName: 'Blog';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_metadata_blog_post';
  info: {
    displayName: 'Blog Post';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataContact extends Struct.ComponentSchema {
  collectionName: 'components_metadata_contact';
  info: {
    displayName: 'Contact';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataDatenschutz extends Struct.ComponentSchema {
  collectionName: 'components_metadata_datenschutzes';
  info: {
    displayName: 'Datenschutz';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataHizmetler extends Struct.ComponentSchema {
  collectionName: 'components_metadata_hizmetler';
  info: {
    displayName: 'Hizmetler';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataHome extends Struct.ComponentSchema {
  collectionName: 'components_metadata_home';
  info: {
    displayName: 'Home';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataImpressum extends Struct.ComponentSchema {
  collectionName: 'components_metadata_impressums';
  info: {
    displayName: 'Impressum';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface MetadataPricing extends Struct.ComponentSchema {
  collectionName: 'components_metadata_pricing';
  info: {
    displayName: 'Pricing';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataServices extends Struct.ComponentSchema {
  collectionName: 'components_metadata_services';
  info: {
    displayName: 'Services';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetadataSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_metadata_success_stories';
  info: {
    displayName: 'Success Stories';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingPageBasic extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_basic';
  info: {
    displayName: 'Basic';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.String;
    description: Schema.Attribute.String;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    name: Schema.Attribute.String;
    period: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface PricingPagePackage extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_package';
  info: {
    displayName: 'Package';
    icon: 'apps';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ba\u015Fvuru Yap'>;
    color: Schema.Attribute.String;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    icon: Schema.Attribute.String;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface PricingPagePremium extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_premium';
  info: {
    displayName: 'Premium';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    description: Schema.Attribute.String;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    name: Schema.Attribute.String;
    period: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface PricingPageStandard extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_standard';
  info: {
    displayName: 'Standard';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    description: Schema.Attribute.String;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    name: Schema.Attribute.String;
    period: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface PricingPageVip extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_vip';
  info: {
    displayName: 'VIP';
    icon: 'star';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ba\u015Fvuru Yap'>;
    color: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingPageWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_why_us';
  info: {
    displayName: 'Why Us';
    icon: 'question';
  };
  attributes: {
    items: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface RoutingPageCommon extends Struct.ComponentSchema {
  collectionName: 'components_routing_page_common';
  info: {
    displayName: 'Common';
    icon: 'apps';
  };
  attributes: {
    back: Schema.Attribute.String;
    changeUrlLabel: Schema.Attribute.String;
    fileLabel: Schema.Attribute.String;
    next: Schema.Attribute.String;
    no: Schema.Attribute.String;
    tryLabel: Schema.Attribute.String;
    urlLabel: Schema.Attribute.String;
    yes: Schema.Attribute.String;
  };
}

export interface RoutingPageDokumanlar extends Struct.ComponentSchema {
  collectionName: 'components_routing_page_dokumanlar';
  info: {
    displayName: 'Dokumanlar';
    icon: 'apps';
  };
  attributes: {
    file: Schema.Attribute.String;
    paramsLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    urlPrefix: Schema.Attribute.String;
  };
}

export interface RoutingPageKullaniciId extends Struct.ComponentSchema {
  collectionName: 'components_routing_page_kullanici_id';
  info: {
    displayName: 'Kullanici Id';
    icon: 'apps';
  };
  attributes: {
    file: Schema.Attribute.String;
    paramsLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    urlPrefix: Schema.Attribute.String;
  };
}

export interface RoutingPageKullaniciPost extends Struct.ComponentSchema {
  collectionName: 'components_routing_page_kullanici_post';
  info: {
    displayName: 'Kullanici Post';
    icon: 'apps';
  };
  attributes: {
    file: Schema.Attribute.String;
    title: Schema.Attribute.String;
    urlPrefix: Schema.Attribute.String;
  };
}

export interface RoutingPageMagaza extends Struct.ComponentSchema {
  collectionName: 'components_routing_page_magaza';
  info: {
    displayName: 'Magaza';
    icon: 'apps';
  };
  attributes: {
    categoryPathPrefix: Schema.Attribute.String;
    file: Schema.Attribute.String;
    homeFallback: Schema.Attribute.String;
    paramsLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RoutingPageRouteGroup extends Struct.ComponentSchema {
  collectionName: 'components_routing_page_route_group';
  info: {
    displayName: 'Route Group';
    icon: 'apps';
  };
  attributes: {
    fileBody: Schema.Attribute.String;
    note: Schema.Attribute.String;
    title: Schema.Attribute.String;
    urlBody: Schema.Attribute.String;
  };
}

export interface ServicesPageCards extends Struct.ComponentSchema {
  collectionName: 'components_services_page_cards';
  info: {
    displayName: 'Cards';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    itemId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageDetails extends Struct.ComponentSchema {
  collectionName: 'components_services_page_details';
  info: {
    displayName: 'Details';
    icon: 'apps';
  };
  attributes: {
    arbeit: Schema.Attribute.Component<'services-page.details-arbeit', false>;
    ausbildung: Schema.Attribute.Component<
      'services-page.details-ausbildung',
      false
    >;
    bachelor: Schema.Attribute.Component<
      'services-page.details-bachelor',
      false
    >;
    master: Schema.Attribute.Component<'services-page.details-master', false>;
    promotion: Schema.Attribute.Component<
      'services-page.details-promotion',
      false
    >;
  };
}

export interface ServicesPageDetailsArbeit extends Struct.ComponentSchema {
  collectionName: 'components_services_page_details_arbeit';
  info: {
    displayName: 'Details / Arbeit';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageDetailsAusbildung extends Struct.ComponentSchema {
  collectionName: 'components_services_page_details_ausbildung';
  info: {
    displayName: 'Details / Ausbildung';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageDetailsBachelor extends Struct.ComponentSchema {
  collectionName: 'components_services_page_details_bachelor';
  info: {
    displayName: 'Details / Bachelor';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageDetailsMaster extends Struct.ComponentSchema {
  collectionName: 'components_services_page_details_master';
  info: {
    displayName: 'Details / Master';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageDetailsPromotion extends Struct.ComponentSchema {
  collectionName: 'components_services_page_details_promotion';
  info: {
    displayName: 'Details / Promotion';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'i18n-shared.value-item', true>;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_services_page_header';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPagePopup extends Struct.ComponentSchema {
  collectionName: 'components_services_page_popup';
  info: {
    displayName: 'Popup';
    icon: 'apps';
  };
  attributes: {
    infoBtn: Schema.Attribute.String;
    infoRequestAlertPrefix: Schema.Attribute.String;
    infoRequestAlertSuffix: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SuccessStoriesPageCta extends Struct.ComponentSchema {
  collectionName: 'components_success_stories_page_cta';
  info: {
    displayName: 'Cta';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SuccessStoriesPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_success_stories_page_header';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SuccessStoriesPageStats extends Struct.ComponentSchema {
  collectionName: 'components_success_stories_page_stats';
  info: {
    displayName: 'Stats';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SuccessStoriesPageStories extends Struct.ComponentSchema {
  collectionName: 'components_success_stories_page_stories';
  info: {
    displayName: 'Stories';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    country: Schema.Attribute.String;
    name: Schema.Attribute.String;
    program: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    university: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.cta': AboutPageCta;
      'about-page.header': AboutPageHeader;
      'about-page.mission': AboutPageMission;
      'about-page.stats': AboutPageStats;
      'about-page.team': AboutPageTeam;
      'about-page.team-items': AboutPageTeamItems;
      'about-page.values': AboutPageValues;
      'about-page.values-items': AboutPageValuesItems;
      'about-page.vision': AboutPageVision;
      'agb.header': AgbHeader;
      'agb.section-item': AgbSectionItem;
      'auth-page.forgot-password': AuthPageForgotPassword;
      'auth-page.forgot-password-validation': AuthPageForgotPasswordValidation;
      'auth-page.login': AuthPageLogin;
      'auth-page.login-validation': AuthPageLoginValidation;
      'auth-page.register': AuthPageRegister;
      'auth-page.register-validation': AuthPageRegisterValidation;
      'auth-page.reset-password': AuthPageResetPassword;
      'auth-page.reset-password-validation': AuthPageResetPasswordValidation;
      'blog-page.header': BlogPageHeader;
      'blog-page.header-categories': BlogPageHeaderCategories;
      'blog-page.page': BlogPagePage;
      'blog-page.page-category-labels': BlogPagePageCategoryLabels;
      'blog-page.page-posts': BlogPagePagePosts;
      'contact-page.cards': ContactPageCards;
      'contact-page.faq': ContactPageFaq;
      'contact-page.faq-items': ContactPageFaqItems;
      'contact-page.form': ContactPageForm;
      'contact-page.form-fields': ContactPageFormFields;
      'contact-page.form-fields-email': ContactPageFormFieldsEmail;
      'contact-page.form-fields-fullname': ContactPageFormFieldsFullname;
      'contact-page.form-fields-interest': ContactPageFormFieldsInterest;
      'contact-page.form-fields-interest-options': ContactPageFormFieldsInterestOptions;
      'contact-page.form-fields-message': ContactPageFormFieldsMessage;
      'contact-page.form-fields-phone': ContactPageFormFieldsPhone;
      'contact-page.header': ContactPageHeader;
      'contact-page.info': ContactPageInfo;
      'contact-page.info-hours': ContactPageInfoHours;
      'contact-page.info-hours-items': ContactPageInfoHoursItems;
      'contact-page.info-office': ContactPageInfoOffice;
      'contact-page.info-social': ContactPageInfoSocial;
      'contact-page.map': ContactPageMap;
      'dashboard-page.groups': DashboardPageGroups;
      'dashboard-page.pages': DashboardPagePages;
      'dashboard-page.pages-admin-advisors': DashboardPagePagesAdminAdvisors;
      'dashboard-page.pages-admin-advisors-create': DashboardPagePagesAdminAdvisorsCreate;
      'dashboard-page.pages-admin-assignments': DashboardPagePagesAdminAssignments;
      'dashboard-page.pages-admin-assignments-table': DashboardPagePagesAdminAssignmentsTable;
      'dashboard-page.pages-admin-overview': DashboardPagePagesAdminOverview;
      'dashboard-page.pages-admin-payments': DashboardPagePagesAdminPayments;
      'dashboard-page.pages-admin-payments-statuses': DashboardPagePagesAdminPaymentsStatuses;
      'dashboard-page.pages-admin-payments-success': DashboardPagePagesAdminPaymentsSuccess;
      'dashboard-page.pages-admin-students': DashboardPagePagesAdminStudents;
      'dashboard-page.pages-admin-students-table': DashboardPagePagesAdminStudentsTable;
      'dashboard-page.pages-advisor-appointments': DashboardPagePagesAdvisorAppointments;
      'dashboard-page.pages-advisor-messages': DashboardPagePagesAdvisorMessages;
      'dashboard-page.pages-advisor-overview': DashboardPagePagesAdvisorOverview;
      'dashboard-page.pages-advisor-overview-application-status-labels': DashboardPagePagesAdvisorOverviewApplicationStatusLabels;
      'dashboard-page.pages-advisor-overview-appointment-types': DashboardPagePagesAdvisorOverviewAppointmentTypes;
      'dashboard-page.pages-advisor-overview-status-labels': DashboardPagePagesAdvisorOverviewStatusLabels;
      'dashboard-page.pages-advisor-student-detail': DashboardPagePagesAdvisorStudentDetail;
      'dashboard-page.pages-advisor-student-detail-actions': DashboardPagePagesAdvisorStudentDetailActions;
      'dashboard-page.pages-advisor-student-detail-appointment-statuses': DashboardPagePagesAdvisorStudentDetailAppointmentStatuses;
      'dashboard-page.pages-advisor-student-detail-booleans': DashboardPagePagesAdvisorStudentDetailBooleans;
      'dashboard-page.pages-advisor-student-detail-doc-status-labels': DashboardPagePagesAdvisorStudentDetailDocStatusLabels;
      'dashboard-page.pages-advisor-student-detail-empty': DashboardPagePagesAdvisorStudentDetailEmpty;
      'dashboard-page.pages-advisor-student-detail-fields': DashboardPagePagesAdvisorStudentDetailFields;
      'dashboard-page.pages-advisor-student-detail-notes': DashboardPagePagesAdvisorStudentDetailNotes;
      'dashboard-page.pages-advisor-student-detail-payment-categories': DashboardPagePagesAdvisorStudentDetailPaymentCategories;
      'dashboard-page.pages-advisor-student-detail-payment-statuses': DashboardPagePagesAdvisorStudentDetailPaymentStatuses;
      'dashboard-page.pages-advisor-student-detail-sections': DashboardPagePagesAdvisorStudentDetailSections;
      'dashboard-page.pages-advisor-student-detail-status-labels': DashboardPagePagesAdvisorStudentDetailStatusLabels;
      'dashboard-page.pages-advisor-student-detail-table-headers': DashboardPagePagesAdvisorStudentDetailTableHeaders;
      'dashboard-page.pages-advisor-student-detail-tabs': DashboardPagePagesAdvisorStudentDetailTabs;
      'dashboard-page.pages-advisor-student-detail-translation-status': DashboardPagePagesAdvisorStudentDetailTranslationStatus;
      'dashboard-page.pages-advisor-students': DashboardPagePagesAdvisorStudents;
      'dashboard-page.pages-applications': DashboardPagePagesApplications;
      'dashboard-page.pages-applications-card': DashboardPagePagesApplicationsCard;
      'dashboard-page.pages-applications-empty': DashboardPagePagesApplicationsEmpty;
      'dashboard-page.pages-applications-filters': DashboardPagePagesApplicationsFilters;
      'dashboard-page.pages-applications-statuses': DashboardPagePagesApplicationsStatuses;
      'dashboard-page.pages-appointments': DashboardPagePagesAppointments;
      'dashboard-page.pages-appointments-actions': DashboardPagePagesAppointmentsActions;
      'dashboard-page.pages-appointments-empty': DashboardPagePagesAppointmentsEmpty;
      'dashboard-page.pages-appointments-filters': DashboardPagePagesAppointmentsFilters;
      'dashboard-page.pages-appointments-locations': DashboardPagePagesAppointmentsLocations;
      'dashboard-page.pages-appointments-types': DashboardPagePagesAppointmentsTypes;
      'dashboard-page.pages-courses': DashboardPagePagesCourses;
      'dashboard-page.pages-courses-card': DashboardPagePagesCoursesCard;
      'dashboard-page.pages-courses-statuses': DashboardPagePagesCoursesStatuses;
      'dashboard-page.pages-documents': DashboardPagePagesDocuments;
      'dashboard-page.pages-documents-actions': DashboardPagePagesDocumentsActions;
      'dashboard-page.pages-documents-categories': DashboardPagePagesDocumentsCategories;
      'dashboard-page.pages-documents-statuses': DashboardPagePagesDocumentsStatuses;
      'dashboard-page.pages-documents-upload': DashboardPagePagesDocumentsUpload;
      'dashboard-page.pages-kassenbuch': DashboardPagePagesKassenbuch;
      'dashboard-page.pages-messages': DashboardPagePagesMessages;
      'dashboard-page.pages-overview': DashboardPagePagesOverview;
      'dashboard-page.pages-overview-advisor': DashboardPagePagesOverviewAdvisor;
      'dashboard-page.pages-payments': DashboardPagePagesPayments;
      'dashboard-page.pages-payments-card': DashboardPagePagesPaymentsCard;
      'dashboard-page.pages-payments-filters': DashboardPagePagesPaymentsFilters;
      'dashboard-page.pages-payments-modal': DashboardPagePagesPaymentsModal;
      'dashboard-page.pages-payments-statuses': DashboardPagePagesPaymentsStatuses;
      'dashboard-page.pages-pre-interview': DashboardPagePagesPreInterview;
      'dashboard-page.pages-pre-interview-education-options': DashboardPagePagesPreInterviewEducationOptions;
      'dashboard-page.pages-pre-interview-errors': DashboardPagePagesPreInterviewErrors;
      'dashboard-page.pages-pre-interview-fields': DashboardPagePagesPreInterviewFields;
      'dashboard-page.pages-pre-interview-funding-options': DashboardPagePagesPreInterviewFundingOptions;
      'dashboard-page.pages-pre-interview-steps': DashboardPagePagesPreInterviewSteps;
      'dashboard-page.pages-pre-interview-success': DashboardPagePagesPreInterviewSuccess;
      'dashboard-page.pages-pre-interview-target-education-options': DashboardPagePagesPreInterviewTargetEducationOptions;
      'dashboard-page.pages-profile': DashboardPagePagesProfile;
      'dashboard-page.pages-profile-biometric-photo': DashboardPagePagesProfileBiometricPhoto;
      'dashboard-page.pages-profile-buttons': DashboardPagePagesProfileButtons;
      'dashboard-page.pages-profile-cv': DashboardPagePagesProfileCv;
      'dashboard-page.pages-profile-fields': DashboardPagePagesProfileFields;
      'dashboard-page.pages-profile-options': DashboardPagePagesProfileOptions;
      'dashboard-page.pages-profile-placeholders': DashboardPagePagesProfilePlaceholders;
      'dashboard-page.pages-profile-sections': DashboardPagePagesProfileSections;
      'dashboard-page.pages-profile-tabs': DashboardPagePagesProfileTabs;
      'dashboard-page.pages-profile-validation': DashboardPagePagesProfileValidation;
      'dashboard-page.routes': DashboardPageRoutes;
      'dashboard-page.sidebar': DashboardPageSidebar;
      'datenschutz.header': DatenschutzHeader;
      'datenschutz.section-item': DatenschutzSectionItem;
      'errors-page.not-found': ErrorsPageNotFound;
      'errors-page.runtime': ErrorsPageRuntime;
      'footer.cta': FooterCta;
      'footer.quick-links': FooterQuickLinks;
      'header.bottom-nav': HeaderBottomNav;
      'header.nav-links': HeaderNavLinks;
      'homepage.accommodation': HomepageAccommodation;
      'homepage.accommodation-details': HomepageAccommodationDetails;
      'homepage.accommodation-details-doppelzimmer': HomepageAccommodationDetailsDoppelzimmer;
      'homepage.accommodation-details-einzelzimmer': HomepageAccommodationDetailsEinzelzimmer;
      'homepage.accommodation-details-wg': HomepageAccommodationDetailsWg;
      'homepage.accommodation-details-wohnheim': HomepageAccommodationDetailsWohnheim;
      'homepage.accommodation-items': HomepageAccommodationItems;
      'homepage.accommodation-popup': HomepageAccommodationPopup;
      'homepage.comments': HomepageComments;
      'homepage.comments-items': HomepageCommentsItems;
      'homepage.destinations': HomepageDestinations;
      'homepage.destinations-item': HomepageDestinationsItem;
      'homepage.hero': HomepageHero;
      'homepage.hero-floating-cards': HomepageHeroFloatingCards;
      'homepage.hero-stats': HomepageHeroStats;
      'homepage.how-to-work': HomepageHowToWork;
      'homepage.how-to-work-steps': HomepageHowToWorkSteps;
      'homepage.online-courses': HomepageOnlineCourses;
      'homepage.online-courses-details': HomepageOnlineCoursesDetails;
      'homepage.online-courses-details-english': HomepageOnlineCoursesDetailsEnglish;
      'homepage.online-courses-details-english-levels': HomepageOnlineCoursesDetailsEnglishLevels;
      'homepage.online-courses-details-german': HomepageOnlineCoursesDetailsGerman;
      'homepage.online-courses-details-german-levels': HomepageOnlineCoursesDetailsGermanLevels;
      'homepage.online-courses-items': HomepageOnlineCoursesItems;
      'homepage.online-courses-popup': HomepageOnlineCoursesPopup;
      'homepage.services': HomepageServices;
      'homepage.services-items': HomepageServicesItems;
      'homepage.statistics': HomepageStatistics;
      'homepage.statistics-items': HomepageStatisticsItems;
      'i18n-shared.value-item': I18NSharedValueItem;
      'impressum.header': ImpressumHeader;
      'impressum.section-item': ImpressumSectionItem;
      'metadata.about': MetadataAbout;
      'metadata.agb': MetadataAgb;
      'metadata.blog': MetadataBlog;
      'metadata.blog-post': MetadataBlogPost;
      'metadata.contact': MetadataContact;
      'metadata.datenschutz': MetadataDatenschutz;
      'metadata.hizmetler': MetadataHizmetler;
      'metadata.home': MetadataHome;
      'metadata.impressum': MetadataImpressum;
      'metadata.pricing': MetadataPricing;
      'metadata.services': MetadataServices;
      'metadata.success-stories': MetadataSuccessStories;
      'pricing-page.basic': PricingPageBasic;
      'pricing-page.package': PricingPagePackage;
      'pricing-page.premium': PricingPagePremium;
      'pricing-page.standard': PricingPageStandard;
      'pricing-page.vip': PricingPageVip;
      'pricing-page.why-us': PricingPageWhyUs;
      'routing-page.common': RoutingPageCommon;
      'routing-page.dokumanlar': RoutingPageDokumanlar;
      'routing-page.kullanici-id': RoutingPageKullaniciId;
      'routing-page.kullanici-post': RoutingPageKullaniciPost;
      'routing-page.magaza': RoutingPageMagaza;
      'routing-page.route-group': RoutingPageRouteGroup;
      'services-page.cards': ServicesPageCards;
      'services-page.details': ServicesPageDetails;
      'services-page.details-arbeit': ServicesPageDetailsArbeit;
      'services-page.details-ausbildung': ServicesPageDetailsAusbildung;
      'services-page.details-bachelor': ServicesPageDetailsBachelor;
      'services-page.details-master': ServicesPageDetailsMaster;
      'services-page.details-promotion': ServicesPageDetailsPromotion;
      'services-page.header': ServicesPageHeader;
      'services-page.popup': ServicesPagePopup;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'success-stories-page.cta': SuccessStoriesPageCta;
      'success-stories-page.header': SuccessStoriesPageHeader;
      'success-stories-page.stats': SuccessStoriesPageStats;
      'success-stories-page.stories': SuccessStoriesPageStories;
    }
  }
}
