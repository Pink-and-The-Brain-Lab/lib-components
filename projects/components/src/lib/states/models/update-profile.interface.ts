import { Theme } from "../../utils/enums/theme";

export interface IUpdateProfile {
    email: string;
    phoneNumber: string;
    phoneNumberValidated: boolean;
    image: string;
    color: string;
    userName: string;
    profileName: string;
    profileType: string;
    profilePolicy: string;
    theme: Theme;
}
