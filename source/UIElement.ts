
import { UIAction } from "./UIEvent";

export class UIElement {
	public LoadEvent : UIAction;
	
	constructor() {
		this.LoadEvent = new UIAction();
	}
	
	public OnLoad() { this.LoadEvent.Invoke(); }
}
