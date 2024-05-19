let expenses = [];
let totalAmount = 0;


const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');

const totalAmountcell = document.querySelector('.total-amount'); //for the total amount

let inputbu1 = document.querySelector('.inputbu'); //for the budget setting
const budgetamount = document.querySelector('.budgetamount'); //for the budget amount

const expensesTableBody = document.getElementById('expense-table-body');

const expenselistview2 = document.getElementById('expenselistview2'); //for the expense list view

const expensedtview2 = document.getElementById('expensedtview2'); //for the expense details view


// for the add button
addBtn.addEventListener('click', function () {

    let category = categorySelect.value; //forthe category
    const amount = Number(amountInput.value); //for the amount
    const date = dateInput.value; //for the date

    //  for checking the value if it's emppyt or not
    if (category == "") {
        alert('please select a category');
        return;
    }
    if (isNaN(amount) || amount == "" || amount <= 0) {
        alert('please enter a value greater then zero');
        return;
    }
    if (date == "") {
        alert('please enter a date');
        return;
    }
    //  for checking the value if it's emppyt or not ends

//to check if the expense amount is equal to budget amount 

    if(totalAmountcell.value == budgetamount.value){
        alert("you,ve reach budget limit");
        return;
    }

//to check if the expense amount is equal to budget amount  ends


    expenses.push({ category, amount, date }); //to colect their value

    totalAmount += amount; //to continuesely add the amount value

    totalAmountcell.value = totalAmount; //to display the value when the user click

    //for the category
    const trall = document.createElement('tr');
    const pain = document.createElement('input');
    pain.value = categorySelect.value;
    pain.setAttribute('readOnly', 'readOnly');
    pain.classList.add('pain');
    // for the category ends

    // for the amount
    const pain1 = document.createElement('input');
    pain1.value = "$: " + amountInput.value;
    pain1.setAttribute('readOnly', 'readOnly');
    pain1.classList.add('pain');
    // for the amount ends

    // for date amount
    const pain2 = document.createElement('input');
    pain2.type = "date";
    pain2.value = dateInput.value;
    pain2.setAttribute('readOnly', 'readOnly');
    pain2.classList.add('pain');
    // for the date ends

    //for the expense list view
        const elv = document.createElement('div')
        const elv1 =document.createElement('input');
        elv1.value=categorySelect.value;
        elv1.classList.add('exlinput');
        elv1.setAttribute('readOnly', 'readOnly');
        elv.appendChild(elv1);
    //for the expense list view ends


//for the expense list view
    const edv = document.createElement('div')
    edv.classList.add('edv');
    const edv1 =document.createElement('input');
    edv1.value=categorySelect.value;
    edv1.classList.add('exdinput');
    edv1.setAttribute('readOnly', 'readOnly');
    edv.appendChild(edv1);

    const edv2 =document.createElement('input');
    edv.classList.add('edv');
    edv2.value="$: "+ amountInput.value;
    edv2.classList.add('exdinput');
    edv2.setAttribute('readOnly', 'readOnly');
    edv.appendChild(edv2);

    const edv3 =document.createElement('input');
    edv.classList.add('edv');
    edv3.value=dateInput.value;
    edv3.classList.add('exdinput');
    edv3.setAttribute('readOnly', 'readOnly');
    edv.appendChild(edv3);
//for the expense list view ends

    const butt = document.createElement('button');
    butt.textContent = "Del";
    butt.classList.add('delete');

    const butt2 = document.createElement('button');
    butt2.textContent = "Edi";
    butt2.classList.add('edit');

    const td1 = trall.appendChild(document.createElement('td'));
    const td2 = trall.appendChild(document.createElement('td'));
    const td3 = trall.appendChild(document.createElement('td'));
    const td4 = trall.appendChild(document.createElement('td'));

    td1.appendChild(pain);
    td2.appendChild(pain1);

    td3.appendChild(pain2)

    td4.appendChild(butt2);
    td4.appendChild(butt);

    expensesTableBody.appendChild(trall);

//for the expenselistview2

    expenselistview2.appendChild(elv);
    expensedtview2.appendChild(edv)

//for the expenselistview2 ends

//for the expenselistview2

expenselistview2.appendChild(elv);

//for the expenselistview2 ends

    butt.addEventListener('click', () => {

        expenses.splice(expenses.indexOf(expenses), 1);

        expensesTableBody.removeChild(trall);
        expenselistview2.removeChild(elv);
        expensedtview2.removeChild(edv)
        totalAmount -= amount;
        totalAmountcell.value = totalAmount;

    });


    butt2.addEventListener('click', () => {
        if (butt2.textContent.toLowerCase() == "edi") {
            butt2.textContent = "Sav";
            butt2.classList.add('sav');
            butt2.style.backgroundColor = "green";

            pain.removeAttribute('readOnly', 'readOnly');
            pain.focus()
            pain.style.color = "red";

            pain1.removeAttribute('readOnly', 'readOnly');
            pain1.focus()
            pain1.style.color = "red";

            pain2.removeAttribute('readOnly', 'readOnly');
            pain2.focus()
            pain2.style.color = "red";

            elv1.removeAttribute('readOnly', 'readOnly');

            // totalAmount -= amount;
            // totalAmount += amount;
            // totalAmountcell.value = totalAmount;

        } else {
            butt2.textContent = "Edi";
            butt2.style.backgroundColor = "rgb(1, 1, 110)";
            butt2.classList.add('edit');

            pain.setAttribute('readOnly', 'readOnly');
            pain.style.color = "black";

            pain1.setAttribute('readOnly', 'readOnly');
            pain1.style.color = "black";

            pain2.setAttribute('readOnly', 'readOnly');
            pain2.style.color = "black";


            elv1.setAttribute('readOnly', 'readOnly');

            totalAmountcell.value = totalAmount;

            // totalAmount -= amount;
            // totalAmount += amount;
            // totalAmountcell.value = totalAmount;
        }
    })

});


    // for the expense list view
    let expenselist_view = document.querySelector('.popupcon1');
    let popupcon = document.querySelector('.expenselistview');
    let popupclose = document.querySelector('.exlvclose');


    expenselist_view.addEventListener('click', (e)=>{
        popupcon.classList.add('elvbotton');
    })
    popupclose.addEventListener('click', (e)=>{
        popupcon.classList.remove('elvbotton');
    })
    // for the expense list view ends

    // for the expense detials view
    let expensedet_view = document.querySelector('.popupcon2');
    let popupcon1 = document.querySelector('.expensedtview');
    let popupclose1 = document.querySelector('.exdtclose');

    expensedet_view.addEventListener('click', (e)=>{
        popupcon1.classList.add('edvdisplay');
    })
    popupclose1 .addEventListener('click', (e)=>{
        popupcon1.classList.remove('edvdisplay');
    })
    // for the expense detials view ends

    // for the budget setting
    let budget_view = document.querySelector('.popupcon3');
    let budget1 = document.querySelector('.budgetsetting');
    let budgetclose1 = document.querySelector('.bsclose');
    // let inputbu = document.querySelector('.inputbu');

    budget_view.addEventListener('click', (e)=>{
        budget1.classList.add('bsdisplay');
    })
    budgetclose1.addEventListener('click', (e)=>{
        budget1.classList.remove('bsdisplay');
    })

// for the budget setting ends

//  to disable when window loads

window.addEventListener('load', ()=>{
    alert('Please click the budget button below to set budget and continue')
    categorySelect.disabled=true;
    amountInput.disabled=true;
    dateInput.disabled=true;
    addBtn.disabled=true;
    expensedet_view.disabled=true;
    expenselist_view.disabled=true;
    budgetamount.value="";
    totalAmountcell.value="";
    inputbu1.value="";
    // inputbu1.focus();

})

//  to disable when window loads ends

// for the popup budget amount

let savebu = document.querySelector('.savebu');

savebu.addEventListener('click', (e)=>{
    let inputbu = document.querySelector('.inputbu').value;
    if(isNaN(inputbu)||inputbu==""||inputbu<1){
        alert('enter value');
        document.querySelector('.inputbu').focus();
        document.querySelector('.inputbu').value="";
    }else{
        // alert("your budget is $: "+ inputbu)
        budgetamount.value=inputbu;
        categorySelect.disabled=false;
        amountInput.disabled=false;
        dateInput.disabled=false;
        addBtn.disabled=false;
        expensedet_view.disabled=false;
        expenselist_view.disabled=false;
        budget1.classList.remove('bsdisplay');
    }
})

// for the popup budget amount ends

