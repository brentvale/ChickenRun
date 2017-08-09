export default class Chicken{
	
	constructor(props){
		this.name = props.name || "Chicklet";
	}
	
	greets(target){
		if(!target){
			throw new Error("missing target");
		}
		return `${this.name} greets ${target}`;
	}
	
	lateGreets(target, cb){
		setTimeout((self) => {
			try {
				cb(null, self.greets(target));
			} catch (err) {
				cb(err);
			}
		}, 1000, this);
	}
}