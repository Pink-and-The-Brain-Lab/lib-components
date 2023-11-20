import { Injectable } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { countriesCode } from '../data/countries-codes';
import * as i0 from "@angular/core";
export class PhoneValidationService {
    constructor() {
        this.phoneUtil = PhoneNumberUtil.getInstance();
        this.PNF = PhoneNumberFormat;
    }
    filterCountryCode(phoneNumber) {
        let country = [];
        if (phoneNumber.length < 5)
            country = countriesCode.filter(country => country.dial_code === phoneNumber);
        return country;
    }
    validateAndFormat(phoneNumber, countryCode, dialCode) {
        const number = phoneNumber.split(dialCode).slice(-1).pop() || '';
        try {
            const rawNumber = this.phoneUtil.parseAndKeepRawInput(number, countryCode);
            const isValid = this.phoneUtil.isValidNumberForRegion(rawNumber, countryCode);
            if (!isValid)
                return { isValid };
            return {
                isValid,
                masked: this.phoneUtil.format(rawNumber, this.PNF.INTERNATIONAL)
            };
        }
        catch {
            return { isValid: false };
        }
    }
}
PhoneValidationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PhoneValidationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PhoneValidationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PhoneValidationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PhoneValidationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtdmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3Bob25lLW51bWJlci9zZXJ2aWNlL3Bob25lLXZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBT3hELE1BQU0sT0FBTyxzQkFBc0I7SUFLakM7UUFIQSxjQUFTLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLFFBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUVSLENBQUM7SUFFakIsaUJBQWlCLENBQUMsV0FBbUI7UUFDbkMsSUFBSSxPQUFPLEdBQWUsRUFBRSxDQUFDO1FBQzdCLElBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUMsQ0FBQztRQUM3RSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxXQUFtQixFQUFFLFFBQWdCO1FBQzFFLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRWpFLElBQUk7WUFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFFakMsT0FBTztnQkFDTCxPQUFPO2dCQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDakUsQ0FBQTtTQUNGO1FBQUMsTUFBTTtZQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzttSEE3QlUsc0JBQXNCO3VIQUF0QixzQkFBc0IsY0FGckIsTUFBTTsyRkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaG9uZU51bWJlckZvcm1hdCwgUGhvbmVOdW1iZXJVdGlsIH0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcclxuaW1wb3J0IHsgY291bnRyaWVzQ29kZSB9IGZyb20gJy4uL2RhdGEvY291bnRyaWVzLWNvZGVzJztcclxuaW1wb3J0IHsgSUNvdW50cnkgfSBmcm9tICcuLi9tb2RlbC9jb3VudHJ5LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElQaG9uZVZhbGlkYXRpb24gfSBmcm9tICcuLi9tb2RlbC9waG9uZS12YWxpZGF0aW9uLmludGVmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBob25lVmFsaWRhdGlvblNlcnZpY2Uge1xyXG5cclxuICBwaG9uZVV0aWwgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcclxuICBQTkYgPSBQaG9uZU51bWJlckZvcm1hdDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZmlsdGVyQ291bnRyeUNvZGUocGhvbmVOdW1iZXI6IHN0cmluZyk6IElDb3VudHJ5W10ge1xyXG4gICAgbGV0IGNvdW50cnk6IElDb3VudHJ5W10gPSBbXTtcclxuICAgIGlmKHBob25lTnVtYmVyLmxlbmd0aCA8IDUpXHJcbiAgICBjb3VudHJ5ID0gY291bnRyaWVzQ29kZS5maWx0ZXIoY291bnRyeSA9PiBjb3VudHJ5LmRpYWxfY29kZSA9PT0gcGhvbmVOdW1iZXIpO1xyXG4gICAgcmV0dXJuIGNvdW50cnk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUFuZEZvcm1hdChwaG9uZU51bWJlcjogc3RyaW5nLCBjb3VudHJ5Q29kZTogc3RyaW5nLCBkaWFsQ29kZTogc3RyaW5nKTogSVBob25lVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdCBudW1iZXIgPSBwaG9uZU51bWJlci5zcGxpdChkaWFsQ29kZSkuc2xpY2UoLTEpLnBvcCgpIHx8ICcnO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByYXdOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZUFuZEtlZXBSYXdJbnB1dChudW1iZXIsIGNvdW50cnlDb2RlKTtcclxuICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMucGhvbmVVdGlsLmlzVmFsaWROdW1iZXJGb3JSZWdpb24ocmF3TnVtYmVyLCBjb3VudHJ5Q29kZSk7XHJcbiAgICAgIGlmICghaXNWYWxpZCkgcmV0dXJuIHsgaXNWYWxpZCB9O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgIG1hc2tlZDogdGhpcy5waG9uZVV0aWwuZm9ybWF0KHJhd051bWJlciwgdGhpcy5QTkYuSU5URVJOQVRJT05BTClcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==