let odu = ["Osa", 10, "West", false];

let [fname, number, direction, orientation] = odu;

if (fname === "Osa") 
{
  console.log("It is baba.");
}

let tmp = getSomeRecords();

let first = tmp[0];
let second = tmp[1];

let firstname = first.name;
let email = first.email !== undefined ? first.email : "nobodybaby.tld";
