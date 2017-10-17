const Rx = require('rx');

function rxTest1() {
	const obs = Rx.Observable.of(42);
  	obs.forEach(x => console.log(x));

	const tick$ = Rx.Observable.interval(1000);
	const subject = new Rx.Subject();
	
	let obs1 = Rx.Observer.create(
		x => {
			console.log('onNext: '+x);

			if (x > 3) {
				this.unsubscribe();
			}
		},
		e => console.log('onError: '+e),
		() => console.log('onCompleted')
	);

	subject.subscribe(obs1);
	
	tick$.subscribe(subject);
}

exports.rxTest1 = rxTest1;