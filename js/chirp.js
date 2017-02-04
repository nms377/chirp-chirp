function chirp(n){
  // FIX ME

  //base case
  if(n === 1){
  	console.log(n);
  	return 'chirp';	//return a string 'chirp'
  }

  console.log(n);
	return 'chirp ' + chirp(--n);	//

}

$(document).ready(function(){
  $("#result").html(chirp(3));
});