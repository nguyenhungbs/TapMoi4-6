export class AppConstants {
    public static get baseURL(): string { return "http://localhost:50225/"; }

    //Department
    public static get departmentSearch(): string { return "api/department/search"; }
    public static get departmentGetById(): string { return "api/department/"; }
    public static get departmentSave(): string { return "api/department/save"; }
    public static get departmentDeleteOne(): string { return "api/department/delete"; }

    //User
    public static get userSearch(): string { return "api/user/search"; }
    public static get userGetById(): string { return "api/user/"; }
    public static get userSave(): string { return "api/user/save"; }
    public static get userDeleteOne(): string { return "api/user/delete"; }

    //Patient
    public static get patientSearch(): string { return "api/patient/search"; }
    public static get patientGetById(): string { return "api/patient/"; }
    public static get patientAdd(): string { return "api/patient/add"; }
    public static get patientUpdate(): string { return "api/patient/update"; }
    public static get patientDeleteOne(): string { return "api/patient/delete"; }
}