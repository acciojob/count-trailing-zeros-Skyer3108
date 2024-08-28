function trailingZeros(n) {
  //your JS code here. If required.
	 let count = 0;

  // Keep dividing n by powers of 5 and update the count
  for (let i = 5; Math.floor(n / i) > 0; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
	
}


const input = prompt("Enter a number");
alert(trailingZeros(input));
