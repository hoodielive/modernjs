let cake = {}; 

console.log(cake); 

Object.defineProperty(cake, "ingredients", {
	value: ["sugar", "all things nice"], 
	enumerable: true, 
	configuraable: true, 
	writable: true, 
}); 

console.log(cake); 

