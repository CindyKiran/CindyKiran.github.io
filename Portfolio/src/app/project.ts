export class Project {
    constructor(
        public title: string,
        public time: number,
        public desc: string,
        public tools: Array<string>,
        public image: string,
        public link: string,
        public hover: string,
        public status: string
    ){}
}