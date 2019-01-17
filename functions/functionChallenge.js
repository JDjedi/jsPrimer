
let finalGrade = function(studentScore, possibleScore) {
    let finalScore = (studentScore / possibleScore) * 100

    if (finalScore >= 90) {
        return `You got a ${finalScore}, which is an A`
    } else if (finalScore >= 80 && finalScore <= 89) {
        return `You got a ${finalScore}, which is a B`
    } else if (finalScore >= 70 && finalScore <= 79) {
        return `You got a ${finalScore}, which is a C`
    } else if (finalScore >= 60 && finalScore <= 69) {
        return `You got a ${finalScore}, which is a D`
    } else {
        return `You got a ${finalScore}, which is a F `
    }
}

let reportCard = finalGrade(11, 20)
console.log(reportCard)


