let students = []

function add() {
    let full_name = document.getElementById('full_name').value
    let age = document.getElementById('age').value
    let sex = document.getElementById('sex').value
    let phone = document.getElementById('phone').value

    let student = {
        full_name: full_name,
        age: age,
        sex: sex,
        phone: phone
    }

    students.push(student)

    localStorage.setItem('students',students)

    console.log(students);
}