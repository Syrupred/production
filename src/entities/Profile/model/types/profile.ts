import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: string,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
    id?: string
}

export enum ValidateProfileError {
    INCORRRECT_USER_DATA = 'INCORRRECT_USER_DATA',
    INCORRRECT_AGE = 'INCORRRECT_AGE',
    INCORRRECT_COUNTRY = 'INCORRRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}
export interface ProfileSchema {
    id?: string,
    data?: Profile,
    form?: Profile,
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
