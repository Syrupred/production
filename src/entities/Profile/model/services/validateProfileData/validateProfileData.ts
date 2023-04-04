import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileError[] = [];
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first, lastname, age, country,
    } = profile;

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRRECT_USER_DATA);
    }
    if (!age && !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRRECT_COUNTRY);
    }
    return errors;
};
