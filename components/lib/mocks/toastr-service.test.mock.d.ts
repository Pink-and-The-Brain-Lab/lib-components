import { IndividualConfig } from 'ngx-toastr';
declare const TOASTR_SERVICE_MOCK: {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => void;
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => void;
};
export default TOASTR_SERVICE_MOCK;
