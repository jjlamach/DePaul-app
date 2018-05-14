export class Quarter {

	 classes : Array<string> = [];

        constructor(public term : string) { }

        addCourse(course : string) : void {
                this.classes.push(course);
        }

        containsCourse(course : string) : boolean {
                for(let i in this.classes){
                        if(i == course){
                                return true;
                        }
                }
                return false;
        }

    printCourses() : void {
        for(var i = 0; i < this.classes.length; i++){
            console.log(this.classes[i]);
        }
    }

}
