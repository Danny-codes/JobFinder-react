import { configureStore } from '@reduxjs/toolkit'
import jobSlice from './job-slice'
const store = configureStore({
    reducer: {jobs: jobSlice.reducer}
})

export default store