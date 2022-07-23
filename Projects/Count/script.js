let count = 0;
let countEl = document.getElementById('count-el');
function increaseCount() {
   count += 1;
   countEl.textContent = count;
};

function decreaseCount() {
   count -= 1;
   countEl.textContent = count;
}

let prevEntries = document.getElementById('entries');
function showEntries() {
   console.log(count);
   prevEntries.textContent +=  count + " - ";
   // count = 0;
}