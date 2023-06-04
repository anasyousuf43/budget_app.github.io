function budgetFunction()
{
    var budgetValue=document.getElementById('budget').value;

    if(budgetValue!="")

    {   
        document.getElementById('error').innerHTML="";
        document.getElementById('budgetDisplay').innerHTML='$ '+budgetValue;
        console.log(budgetValue);
    }
    else
    {
        document.getElementById('error').innerHTML="Please enter any value"
        // alert("Please Enter any Amount");
    }

}

var count=2;

function addExpense()
{
    console.log("Called");

    var divElement =document.getElementById('added-expense');
    // Create a new div element
    var newDivElement = document.createElement('div');

    newDivElement.id ="card_exp"+count;
    // Set the innerHTML of the new div element
    newDivElement.innerHTML = `
                                <div class="card border-info mb-3 mt-1"">
                                        <div class="card-header bg-info border-info text-white">
                                            <div class="row">
                                                <div class=" col-md-4">
                                                </div>
                                                <div class=" col-md-4">
                                                    Total Budget / Expense 
                                                </div>
                                                <div class=" col-md-4 text-right">
                                                    <a href="javascript:void(0);" onclick="deleteExpense(`+count+`)" class="text-danger">
                                                        <i class="fa-solid fa-xmark fa-lg" style="color: #ff0000;"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="card-body text-success">
                                        <div class="row">
                                            <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Due Date</label>
                                                <input type="Date" class="form-control" name="due-date[]" id="due-date">
                                            </div>
                                            </div>
                                            <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Payment Date</label>
                                                <input type="date" class="form-control" name="pay-date[]" id="pay-date">
                                            </div>
                                            </div>
                                            <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Total Amount</label>
                                                <input type="number" class="form-control" name="T-amount[]" id="T-amount" placeholder="Enter Total Amount">
                                            </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Category:</label>
                                                <select class="form-select form-control" name="Category[]" aria-label="Disabled select example">
                                                    <option selected>Cost of Services Provided</option>
                                                    <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                                                    <option value="Clothes & Shopping">Clothes & Shopping</option>
                                                    <option value="Credit & loans">Credit & loans</option>
                                                    <option value="Gifts Card">Gifts Card</option>
                                                </select>
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Description</label>
                                                <textarea class="form-control" name="description[]"></textarea>
                                            </div>
                                            </div>
                                        
                                        </div>
                                        
                                        </div>
                                    </div>`;

    // Append the new div element to the target div
    divElement.appendChild(newDivElement);
    count++;

}


function deleteExpense(num)
{
    element=document.getElementById('card_exp'+num);
    element.remove();
}


function submitform()
{
    var budgetValue=document.getElementById('budget').value;

    if(budgetValue!="")

    {   
        document.getElementById('error').innerHTML="";
        document.getElementById('budgetDisplay').innerHTML='$ '+budgetValue;
        console.log(budgetValue);
    }
    else
    {
        document.getElementById('error').innerHTML="Please enter any value";
        // alert("Please Enter any Amount");
        return 0 ;
    }

    const dueDate = document.querySelectorAll('input[name="due-date[]"]');
    const dueDates = Array.from(dueDate).map(input => input.value);

    const payDate = document.querySelectorAll('input[name="pay-date[]"]');
    const payDates = Array.from(payDate).map(input => input.value);

    const amount = document.querySelectorAll('input[name="T-amount[]"]');
    const amounts = Array.from(amount).map(input => input.value);

    const category = document.querySelectorAll('select[name="Category[]"]');
    const categories = Array.from(category).map(input => input.value);
    
    const description = document.querySelectorAll('textarea[name="description[]"]');
    const descriptions = Array.from(description).map(input => input.value);
    console.log(dueDates.length);
    var icon;
    document.getElementById('list').innerHTML=""
    for (var i=0 ; i<dueDates.length; i++)
    {
        var totalexpense= 0
        
        var totalexpense= totalexpense+parseInt(amounts[i]);

        htmll=document.getElementById('list').innerHTML;

       if(categories[i]=="Credit & loans")
       {
         icon= 'fa-credit-card';
       }
       else if(categories[i]=="Gifts Card")
       {
        icon='fa-gift';
       }
       else if(categories[i]=="Clothes & Shopping")
       {
        icon="fa-bag-shopping"
       }
       else if(categories[i]=="Restaurant & Cafe")
       {
        icon="fa-mug-saucer"
       }

      
        document.getElementById('list').innerHTML=htmll+ `
        <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <h6 class="mb-1"><i class="fa-solid `+icon+` fa-lg" style="color:rgb(0, 119, 255)"></i> `+categories[i]+`</h6>
            <small>-$ `+amounts[i]+`</small>
            <small class="text-muted">duedate: `+dueDates[i]+`</small>
            <small class="text-muted">paydate: `+payDates[i]+`</small>
            </div>
        </a>
        `;
    }
    var Balance= parseInt(budgetValue)-totalexpense;
        
    document.getElementById('Overview').innerHTML=`<div class="text-center mt-3">
    <table class="table table-black">
      <thead>
        <tr>
          <th scope="col">Total Amount</th>
          <th scope="col">Expense</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$`+budgetValue+`</td>
          <td>$`+totalexpense+`</td>
          <td>$`+Balance+`</td>
        </tr>
    
      </tbody>
  </table>
  </div>`       

    console.log(dueDates);
    console.log(payDates);
    console.log(amounts);
    console.log(categories);
    console.log(descriptions);
}