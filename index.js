function superbowlWin(objArray) {
    let result = objArray.find( objArray => objArray.result === "W" )
    return !!result ? result.year : undefined
}