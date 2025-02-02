export interface IProfile {
    id: string;
    userId: string;
    email: string;
    color: string;
    image: string;
    chosenName: string;
    profileName: string;
    profileVisibility: string;
    profileTheme: string;
    logoutTime: string;
    dateFormat: string;
    validated: boolean;
    selected: boolean;
    language: string;
    createdAt: number;
}
