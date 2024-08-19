document.getElementById('btn-calculation').addEventListener('click',()=>{
    const perPlayerSalary = getInputById('per-player');
    const totalPlayerSelected = getElementById('total-player-count')
    const playerExpenses = totalPlayerSelected * perPlayerSalary;
    // console.log(playerExpenses);

    if ( playerExpenses < 1 || totalPlayerSelected > 5) {
        alert("Please select 1 minimun player not more than 5 or check the salary Amount!");
        return;
    }
    else if (isNaN(playerExpenses)) {
        alert("Please input a number of amount!");
        return;
    }

    const previousPlayerExpense = getElementById('player-expenses');
    const newPlayerExpense = previousPlayerExpense + playerExpenses;
    // console.log(newPlayerExpense);

    setElementById('player-expenses', newPlayerExpense);

});

document.getElementById('btn-total').addEventListener('click',()=>{
    const manager = getInputById('manager-salary');
    const coach = getInputById('coach-salary');
    
    const perPlayer = getElementById('player-expenses');

    if( manager < 0 || coach < 0 ){
        alert("Please input a manager and coach salary!")
        return;       
    }
    else if (isNaN(manager) || isNaN(coach)) {
        alert("Please input a number of amount!");
        return;
    }

    const total = manager + coach + perPlayer;

    setElementById('total-expense', total);
    
});