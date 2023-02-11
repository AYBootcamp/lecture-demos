import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import studentReducer from './studentSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        students: studentReducer,
    },
})
