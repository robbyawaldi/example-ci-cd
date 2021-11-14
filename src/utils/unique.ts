export const unique = (array: any[]) => {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index
    })
}