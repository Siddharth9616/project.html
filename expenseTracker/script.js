document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expenseForm");
    const expenseList = document.getElementById("expenseList");

    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const description = document.getElementById("expenseDescription").value;
        const amount = parseFloat(document.getElementById("expenseAmount").value);

        if (description && amount) {
            addExpense(description, amount);
            expenseForm.reset();
        }
    });

    function addExpense(description, amount) {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${description}</strong>: $${amount.toFixed(2)}
            <button class="deleteBtn">Delete</button>
        `;
        expenseList.appendChild(li);

        const deleteBtn = li.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
    }
});
