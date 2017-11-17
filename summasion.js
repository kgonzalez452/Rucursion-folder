function sumOneToN(n) {
	if(n === 1) {
		return 1;
}

return n + sumOneToN(n - 1);
}