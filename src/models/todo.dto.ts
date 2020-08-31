export class TodoDTO  {

    title: string;
    date: string;
    content: string;

    constructor(title: string, date: string, content: string) {
        this.title = title;
        this.date = date;
        this.content = content;
    }
}
