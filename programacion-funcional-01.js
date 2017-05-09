l1 = [1,2,3,5,6];
l2 = [2,3,4,5,7];
function intersecion(l1, l2){
	var l3 = [];
	for(var i = 0; i < l1.length; i++){
		for(var j = 0; j < l2.length ; j++){
			if(l1[i] == l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	console.log(l3);
	return l3;	
}

function intersectionSet2(){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1;
	});
}



