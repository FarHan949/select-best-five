const playersArray = [];

function display(playesDisplay){
    // console.log(playesDisplay);
    const tableBody = document.getElementById('player-display-table');
    tableBody.innerHTML = "";
    // console.log(tableBody);
    for ( let i = 0; i < playesDisplay.length; i++) {
        // console.log(playersArray[i].selectName);
        if ( playesDisplay.length > 5  ) {
            alert("You have already selected 5 players! Please reload and select not more than 5 Players...")
            return;
        };
        const name = playersArray[i].selectName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <tr>
                    <th scope="row">${i+1}</th>
                    <th scope="row">${name}</th>
                  </tr>

        `;
        tableBody.appendChild(tr);
    }
};

function getBtnById(element) {
    // bonus: disable mode added
    element.setAttribute('disabled', 'disabled');
    const selectName = element.parentNode.children[0].innerText;
    // console.log(selectName);

    const playerObj = {
        selectName: selectName,
    };
    // console.log(playerObj);
    playersArray.push(playerObj);
    // console.log(playersArray);
    
    // console.log(playersArray.length);
    setElementById('total-player-count', playersArray.length);

    display(playersArray);

};

