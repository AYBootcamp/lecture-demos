export const getFibNums = (index) => {
    if (index === 0) {
        return 0
    }
    if (index === 1) {
        return 1
    }
    return getFibNums(index - 1) + getFibNums(index - 2)
}
