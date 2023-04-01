export default class Event {
  private _listener: Record<string, Array<(e: Event) => void>>;

  constructor() {
    this._listener = {};
  }

  addEventListener(event: string, callback: (e: Event) => void) {
    console.log('addEventListener', event, callback);
  }
  removeEventListener(event: string, callback: (e: Event) => void) {
    console.log('removeEventListener', event, callback);
  }
  triggerEventListener(event: string, callback: (e: Event) => void) {
    console.log('triggerEventListener', event, callback);
  }
}
