const string  = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// console.log(string[2]);

// "push" is to add end of arrays
string.push('e');  // O(1) 

// "pop" is to remove item the end of arrays
string.pop('e');  // O(1) 

// in this case, splice is to add item 
// index 2 の位置 (3番目の要素の前) から 0 個の要素を削除して "alien" を挿入する
// first argument is index, 
// second argument means that ,
// it remove the items from the first argument of index to the second argument
string.splice(2, 1, 'alien');  // O(n/2) => O(n) 
// ['a', 'b', 'c', 'd']
//   0    1    2    3
// ['a', 'b', 'alien', 'd']
//   0    1     2       3

console.log(string)



