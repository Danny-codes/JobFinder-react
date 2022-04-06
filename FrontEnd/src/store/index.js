import { configureStore } from "@reduxjs/toolkit";

import jobsReducer from './jobs-slice'

const store = configureStore({
    reducer: {jobs: jobsReducer}
})

export default store