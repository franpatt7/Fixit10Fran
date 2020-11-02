customerAdd.onshow=function(){
  drpAddCust.clear()
   txtAll_contents.style.height = "200px"
  query = "SELECT name FROM customer2;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
  if (req.status == 200){
   results = JSON.parse(req.responseText)
   console.log(results)
   console.log(typeof(results))
   for (i = 0; i <= results.length - 1; i++){
            drpAddCust.addItem(results[i])
              }
        } 
        }
    
btnAddCust.onclick=function(){
  query = "Insert Ignore into `customer2` (`name`,`street`,`city`,`state`,`zipcode`) values ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', 68178);"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
  if (req.status ==200){
    if(req.responseText ==500){
    lblMessage.value = `You have successfully added Jesse Antiques to the customers. Here are the remaining customers.` 
  query = "Select name From customer2 "
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
    results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txtAll.value = message
              drpAddCust.clear()
              for (i = 0; i <= results.length - 1; i++){
            drpAddCust.addItem(results[i])
            }
    }
  }
}