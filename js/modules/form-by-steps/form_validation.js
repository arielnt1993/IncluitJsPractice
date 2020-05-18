export default class Form_Validation {

    constructor() {
        this.validate();
    }
    // Crear métodos para validar aqui.
    // Mirar documentación de Bootstrap si es necesario:
    // https://getbootstrap.com/docs/4.0/components/forms/#validation
    validate(){
        window.addEventListener('load', function(){
            let forms = document.getElementsByClassName('needs-validation');
            let validation = Array.prototype.filter.call(forms, function(form){
                form.addEventListener('input',function(event){
                    if (form.checkValidity()===false){
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                },false);
            });
        },false);
        
    }
}


