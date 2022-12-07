function sortAlphabetically(arrayToSort) {
    const sortedByName = [...arrayToSort.data]
    sortedByName.sort((a, b) => {
        return Object.values(a)[1].localeCompare(Object.values(b)[1])
    })
    return sortedByName
}

export default sortAlphabetically