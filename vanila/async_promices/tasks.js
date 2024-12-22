function updateProfile (person) {
	person = {
		name: 'Peter'
	};
}

function process () {
	let person = { name: 'Mike' };
	updateProfile(person) ;
	console.log(person) ;
}
// process();

// function makeGroup () {
// 	let people = [];
// 	let i = 0;
// 	while (i < 5) {
// 		let man = function () {
// 			alert(i);
// 		};
// 		people.push(man); i++;
// 	}
// 	return people;
// }
// let group = makeGroup();
// group[0](); 
// group[5]();

(function question() {
	const p = Promise.reject();
	p.then(() => console.log('5'))
	.catch(() => console.log('6'))
	.then(() => console.log('7'));
	p.catch(() => console.log('10'))
	.then(() => console. log('11'))
	.catch(() => console.log('12'));
  })()