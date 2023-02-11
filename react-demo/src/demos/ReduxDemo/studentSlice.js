import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import fakeFetch from '../../helpers/fakeFetch'

export const fetchStudentIds = createAsyncThunk(
    'students/fetchStudentIds',
    async () => {
        const response = await fakeFetch()
        return response
    },
    {
        condition: (args, { getState, extra }) => {
            const { fetchStatus } = getState().students
            if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
                return false // do not fire fetch request if already loaded or loading
            }
        },
    }
)

export const studentSlice = createSlice({
    name: 'students',
    initialState: {
        fetchStatus: 'initial',
        studentIds: [],
        selectedStudentId: null,
    },
    reducers: {
        addStudent: (state, id) => {
            state.studentIds.push(id)
        },
        removeStudent: (state, id) => {
            state.studentIds.splice(state.studentIds.indexOf(id), 1)
        },
        selectStudent: (state, id) => {
            state.selectedStudentId = id
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudentIds.pending, (state, action) => {
            state.fetchStatus = 'loading'
        })
        builder.addCase(fetchStudentIds.fulfilled, (state, action) => {
            state.fetchStatus = 'fulfilled'
            state.studentIds = action.payload
        })
        builder.addCase(fetchStudentIds.rejected, (state, action) => {
            state.fetchStatus = 'failed'
            state.studentIds = []
        })
    },
})

// Action creators are generated for each case reducer function
export const { addStudent, removeStudent, selectStudent } = studentSlice.actions

export default studentSlice.reducer
