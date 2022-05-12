/* add your code here */

function loadPage() {

    //Hide the details <section>
    document.getElementById("singleStock").style.display = "none";

    //Load the users data
    loadUsers(readJson(userContent));

    addUserClick();
    addDetailsClick();
    
}

//Function to read json data and returns the json object
function readJson(jsonData)
{
    const jsonObject = JSON.parse(jsonData);
    return jsonObject;
}

//Function to load the user data to the user list
function loadUsers(userData)
{
    let main = document.querySelector('.UserList');
    let ul = main.querySelector('ul');

    for ( let user of userData)
    {
        var myUser = new User(user).makeElement();
        ul.appendChild(myUser);
    }
}

//User Function constructor
function User(obj)
{
    this.id = obj.id;
    this.firstName = obj.user.firstname;
    this.lastName = obj.user.lastname;
}

User.prototype.makeElement = function()
{
    let li = document.createElement('li'); 
    li.innerText = this.firstName + " " + this.lastName;
    li.setAttribute('id', this.id);
    return li;
}

//Function for addUserClick
function addUserClick()
{
    let main = document.querySelector('main');
    main.addEventListener('click',function(e){
        if(e.target && e.target.nodeName == "LI")
        {
            document.getElementById("singleStock").style.display = "block";

            const userData = readJson(userContent);

            var fname = document.getElementById('firstname').value = userData[e.target.id-1].user.firstname;
            var lname = document.getElementById('lastname').value = userData[e.target.id-1].user.lastname;
            var address = document.getElementById('address').value = userData[e.target.id-1].user.address;
            var city = document.getElementById('city').value = userData[e.target.id-1].user.city;
            var email = document.getElementById('email').value = userData[e.target.id-1].user.email;

            //Cleanup stocks from previous selected user
            let myportfolio = document.getElementById('listPortfolio');
            while (myportfolio.firstChild)
            {
                myportfolio.removeChild(myportfolio.firstChild);
            }
            let sym = document.createElement('h3');
            let sh = document.createElement('h3');
            let act = document.createElement('h3');
            sym.innerText = "Symbol";
            sh.innerText = "# Shares";
            act.innerText = "Actions";
            myportfolio.appendChild(sym);
            myportfolio.appendChild(sh);
            myportfolio.appendChild(act);
            document.getElementById("stockName").innerHTML = "";
            document.getElementById("stockSector").innerHTML = "";
            document.getElementById("stockIndustry").innerHTML = "";
            document.getElementById("stockAddress").innerHTML = "";

            //Display stocks from selected user
            for (stock of userData[e.target.id-1].portfolio)
            {
                let myh3Stocks = document.createElement('h3');
                let myh3Shares = document.createElement('h3');
                let myh3Details = document.createElement("BUTTON");
                myh3Stocks.innerText = stock.symbol;
                myh3Shares.innerText = stock.owned;
                myh3Details.innerText = "View Details";
                myh3Details.setAttribute('id', stock.symbol);
                myportfolio.appendChild(myh3Stocks);
                myportfolio.appendChild(myh3Shares);
                myportfolio.appendChild(myh3Details);
            }
        }
    })
}

//Function to get stock details from stock-complete.json
function getStockDetails(symbol)
{
    const stockData = readJson(stockContent);

    for(stock of stockData)
    {
        if (stock.symbol == symbol)
        {
            return stock;
        }
    }

}

//Function to add stock details to the details section 
function addDetailsClick()
{
    let main = document.querySelector('main');
    main.addEventListener('click',function(e){
        if(e.target && e.target.nodeName == "BUTTON")
        {
            mystockDetails = getStockDetails(e.target.id);
            document.getElementById("stockName").innerHTML = mystockDetails.name;
            document.getElementById("stockSector").innerHTML = mystockDetails.sector;
            document.getElementById("stockIndustry").innerHTML = mystockDetails.subIndustry;
            document.getElementById("stockAddress").innerHTML = mystockDetails.address;
        }
    })
}


if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadPage);
} else {  // `DOMContentLoaded` already fired
    loadPage();
}


