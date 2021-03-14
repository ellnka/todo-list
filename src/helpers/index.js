export default class Helpers {
    static generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    static createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        return div.firstChild; 
    }
}