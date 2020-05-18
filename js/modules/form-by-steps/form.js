import FormEvents from './form_events.js';
import FormValidation from './form_validation.js';

export default class Form {

    constructor() {
        this.formEvents = new FormEvents();
        this.initSendFormAction();
        this.formValidation = new FormValidation();
    }

    initSendFormAction() {
        this.formEvents.initSendFormEvent(this.sendForm.bind(this));
    }

    sendForm() {
        console.log('Sending form data...');
        let formData = {};
        $('.form').serializeArray().forEach(element => formData[element.name]=element.value);
        fetch('https://reqres.in/api/users',{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json().then(data => console.log(data)));
        
    }

    

}
