let pw = "Cre!ghton2021"
let results = ""
let req = ""
let state = ""
CustomerSelect.onshow=function(){
txtState_contents.style.height = "200px"
query = "SELECT name FROM customer2;"
req = Ajax(""https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
  if (req.status == 200){
   results = JSON.parse(req.responseText)
   console.log(results)
   console.log(typeof(results))
   for (i = 0; i <= results.length - 1; i++){
            drpCustomers.addItem(results[i])
              }
        }
}
drpCustomers.onclick=function(s){
    if (typeof(s) == "object"){  // means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpCustomers.value = s   // make dropdown show the choice the user made
    query = "Select state From customer2 Where name ="+'"' + drpCustomers.value + '"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
    state = JSON.parse(req.responseText)
    
    query = "Select name From customer2 Where state = "+'"' +state[0] + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
    results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txt.value = message

