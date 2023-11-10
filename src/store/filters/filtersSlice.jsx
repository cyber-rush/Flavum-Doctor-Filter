import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        city: '',
        locality: '',
        speciality: '',
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
            state.locality = '';
            state.speciality = '';
        },
        setLocality: (state, action) => {
            state.locality = action.payload;
        },
        setSpeciality: (state, action) => {
            state.speciality = action.payload;
        },
    },
});

export const { setCity, setLocality, setSpeciality } = filtersSlice.actions;
export const selectFilters = (state) => state.filters;
export default filtersSlice.reducer;
