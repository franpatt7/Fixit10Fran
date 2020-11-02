customerUpdate.onshow=function(){
  drpUpdateCust.clear()
  txtUpdateCust_contents.style.height = "200px"
  query = "SELECT name FROM customer2;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
  if (req.status == 200){
   results = JSON.parse(req.responseText)
   console.log(results)
   console.log(typeof(results))
   for (i = 0; i <= results.length - 1; i++){
            drpUpdateCust.addItem(results[i])
                }
  }
}

drpCustomerUpdate.onclick=function(s){  
      if (typeof(s) == "object"){  // means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpCustomerUpdate.value = s
            }
}

btnUpdate.onclick=function(){
    query = "UPDATE customer2 SET name =" + '"' + iptUpdate.value + '"' + " WHERE name = " + '"' + drpUpdateCustomer.value + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
    console.log(req.status)
    console.log(req.responseText)
    if (req.status ==200){
      if (req.responseText == 500){
    lblUpdate.value = `You have have changed the name of ${UpdateCust.value} to ${iptUpdate.value}`
    query = "SELECT name FROM customer2;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
    results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txtUpdateCust.value = message
         }
      }
}