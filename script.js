//your JS code here. If required.
function mapLetters(word) {
let obj = {};
	for(let i = 0; i<=word.length; i++){
		if(obj[word[i]]){
			obj[word[i].push(i)];
		}else{
			obj[word[i]] = [i];
		}
	}
	return obj;
}