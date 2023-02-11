/*
 Simulate data fetching using timeout functions.
 After 3 seconds return array [0,1,2,...,19]
 */
const fakeFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Array.from(Array(20).keys()))
        }, '3000')
    })
}
export default fakeFetch
