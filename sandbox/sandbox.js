const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];



studentReport.forEach(function (number) {
    if (number > LIMIT) {
        console.log(number);
    }
})

let count = 0;
while (count < studentReport.length) {
    if (studentReport[count] > LIMIT) {
        console.log(studentReport[count]);
    }
    count++;
}

for (let i = 0; i < studentReport.length; i++) {
    const number = studentReport[i];
    if (number > LIMIT) {
        console.log(number)
    }
}
