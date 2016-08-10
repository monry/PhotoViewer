
class ReactiveProperty {

  constructor(initialValue) {
    this._value = initialValue;
    this.subject = new Rx.Subject();
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (this._value != value) {
      this._value = value;
      this.subject.onNext(value);
    }
  }

  asObservable() {
    return this.subject.distinctUntilChanged().asObservable();
  }

}

Rx.ReactiveProperty = ReactiveProperty;
export default Rx.ReactiveProperty;
