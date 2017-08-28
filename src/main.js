// a simple funtion that checks if an array is arithmetic, geometric, neither and empty

const isArithmetic = (array) => {
	if (array.length > 1) {
		const diff = array[1] - array[0];
		for(let i=0; i < array.length-1; i++) {
			if (diff !== array[i+1] - array[i])
				return false;
		}
		return true;
	} else 
		return false;	
}


const isGeometric = (array) => {
	if (array.length > 1) {
		const ratio = array[1] / array[0];
		for(let i=0; i < array.length-1; i++) {
			if (ratio !== array[i+1] / array[i])
				return false;
		}
		return true;
	} else 
		return false;
}


const isArrayEmpty = (array) => Array.isArray(array) && array.length == 0 ;


export default function aritGeo(array) {
	if ( isArithmetic(array) )
		return "Arithmetic"

	if ( isGeometric(array) )
		return "Geometric"

	if ( isArrayEmpty(array) )
		return 0;

	return -1;
}
