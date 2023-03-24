import ProfileCard from './ui/ProfileCard/ProfileCard';

export { ProfileSchema, Profile } from './model/types/profile';

export { profileActions, profileReducer, initialState } from './model/slice/ProfileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { ProfileCard };
