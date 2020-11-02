customerDelete.onshow=function(){
    drpDeleteCust.clear()
    txtStates_contents.style.height = "200px"
  query = "SELECT name FROM customer2;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
  if (req.status == 200){
   results = JSON.parse(req.responseText)
   console.log(results)
   console.log(typeof(results))
   for (i = 0; i <= results.length - 1; i++){
            drpDeleteCust.addItem(results[i])
    }
  }
}



drpDeleteCust.onclick=function(s){
      if (typeof(s) == "object"){  // means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpDeleteCust.value = s
    let found = false
    for (i = 0; i <= drpDeleteCust.length - 1; i++) {
      console.log(results[i])
        if (drpDeleteCust.value == results[i]){
            found = true
            break
            }
            }
     if (found == true){    
    query = "Delete  From customer2 Where name ="+'"' + drpDeleteCust.value + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
    console.log(req.status)
    if (req.status ==200){
      if (req.responseText == 500){
    lblHead.value = `You have successfully deleted ${s}, the remaining customers are:`
    query = "SELECT name FROM customer2;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ffp71253&pass=" + pw + "&database=ffp71253&query=" + query)
    results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txtCust.value = message
              }
              }
            else{
              lblHead.value = `${s} is not in the database`
          }
          }
    }
}