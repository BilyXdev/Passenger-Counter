let count = 0
let countEl = document.getElementById("count-el")

function incrementsPassenger() {
    count += 1
    countEl.textContent = count
}

let deleteBtn = document.getElementById("delete-btn")

function deletePassenger() {
    count -= 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
    let savedPass = count + " - "
    saveEl.textContent += savedPass
    count -= count
    countEl.textContent = count

}
