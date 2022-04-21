
export type UIEventHandler<T> = ((state : T | undefined) => void);

export class UIEvent<T> {
	protected subscribers : UIEventHandler<T>[];
	
	constructor() {
		this.subscribers = [];
	}
	
	Invoke(state : T | undefined = undefined) : void {
		this.subscribers.forEach(sub => sub(state));
	}
	
	Subscribe(subscriber : UIEventHandler<T>) : void {
		this.subscribers.push(subscriber);
	}
	
	Unsubscribe(subscriber : UIEventHandler<T>) : void {
		const index = this.subscribers.indexOf(subscriber);
		
		if(index == -1) { return; }
		
		this.subscribers.splice(index, 1);
	}
	
	UnsubscribeAll() : void {
		this.subscribers.splice(0, this.subscribers.length);
	}
}

export class UIAction extends UIEvent<object> {}
