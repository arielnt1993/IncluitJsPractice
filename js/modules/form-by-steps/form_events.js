
export default class Form_Events {
    
    constructor() {
        this.initPrevNextButtons();
    }
    
    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        let $finishButton =$('.js-finish');
        
        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
        $finishButton.click(this.preventDefaultAction);
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
        
    }

    getStepNumberToGo(currentStep,direction){
        let stepToGo = 2;
        if ('2'=== currentStep){
            stepToGo = ('prev' == direction) ? '1':'3';    
        }
        return stepToGo;
    }

    goToStep(step, direction = 'next') {
        // 2) Simplifica esta función para que sean menos líneas.
        let currentStep = step.replace(/^step\-/, '');
        return '.step-' +this.getStepNumberToGo(currentStep,direction);
    }

    preventDefaultAction(evt){
        evt.preventDefault();
    }
    
    action(evt){
        this.preventDefaultAction(evt);
        let $current =$(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        return $formStep.addClass('d-none');
    }

    previousAction(evt) {
        let $num = parseInt($('.progress-bar').html().replace(/[^0-9]/g,''),10);
        this.progressBar($num-33)
        let $paso = this.action(evt);
        let $prevStep = $(this.goToStep($paso[0].classList[1], 'prev'));
        $prevStep.removeClass('d-none');
    }

    nextAction(evt) {
        // 3) ¿Se puede evitar repetir mismas líneas que en previousAction?
        /* mi solucion fue sacar las lineas de codigo a lo factor comun y hacer
        una funcion de ese pequeño sript, igual seguro hay algo mas eficiente (buscar) */
        let $num = parseInt($('.progress-bar').html().replace(/[^0-9]/g,''),10);
        this.progressBar($num+33)
        let $paso = this.action(evt);
        let $nextStep = $(this.goToStep($paso[0].classList[1]));
        $nextStep.removeClass('d-none');
    }

    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progressBar = $('.progress-bar');
        $progressBar
            .css('width',percent+'%')
            .html(percent+'%');
    }
    
}
