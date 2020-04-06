import './styles/tabs.css';

class Tabs{
    constructor(element){
        this.element = element;
        this.tabs = element.querySelectorAll('.trigger');
        this.contents = element.querySelectorAll('.content');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }
    toggleTabs(e){
        this.tabs.forEach(tab => {tab.classList.remove('active')});
        e.target.classList.add('active');
    }
    toggleContent(e){
        this.contents.forEach(content => {content.classList.remove('active')});
        const selector = e.target.getAttribute('data-target');
        this.element.querySelector(selector).classList.add('active');
    }
}

export {Tabs as default};