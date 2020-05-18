import Form from './modules/form-by-steps/form.js';

class Main extends Form {

    constructor() {
        super();
        console.log('Script init');
        this.multichoiceIndustry();
        this.initAddNumOfChildren();
        
    }
    
    // En el paso 2 al seleccionar los hijos menores de 18 años debe mostrar
    // los datos a completar de los hijos según el número de los mismos, por
    // lo tanto se deberia copiar la fila Child #1 y generar para los demás,
    // si se cambia nuevamente el número de hijos éste debe cambiar también por
    // lo que si selecciona None o al inicio no debe mostrar dicha fila Child #1
    initAddNumOfChildren(){
        let $addNumOfChilds =$('#childGroupSelectUnder18');
        $addNumOfChilds.on('change',this.createChildrow);
    }
    /*a bad method, has the html that will be created inside of <div class="form-row childrenData"> </div> that will be assigned to a variable
    four times, then it will render on the html BUT first it will check if the class .tmp exists so whenewer you change the value of the <select> parent
    the fields will be removed */
    createChildrow(){
        if ($('.tmp').length>0){
            $('.tmp').remove();
        }
        let $test = parseInt($('#childGroupSelectUnder18').val(),10);
        
        for (let i = 0; i < $test; i++) {
            for (let j = 0; j < 4; j++) {
                let $childForm = [`<div class="col-md-1 mb-3 tmp">`+
                                `<label>Child</label>`+
                                `<div class="input-group-prepend">`+
                                    `<label class="input-group-text" for="inputGroupSelect1">#${i+1}</label>`+
                                `</div>`+
                            `</div>`,
                    `<div class ="col-md-4 mb3 tmp">`+
                            `<label for ="childName${i+1}">First name</label>`+
                            `<input name="child-name${i+1}" type="text" class="form-control" placeholder="First name" value="Mark Jr." required>`+
                            `<div class="valid-feedback">Looks good</div>`+
                    `</div>`,
                    `<div class="col-md-4 mb-3 tmp">`+
                            `<label for="childLastName${i+1}">Last name</label>`+
                            `<input name="child-last-name${i+1}" type="text" class="form-control"  placeholder="Last name" value="Otto" required>`+
                            `<div class="valid-feedback">Looks good!</div>`+
                    `</div>`,
                    `<div class="col-md-3 mb-3 tmp">`+
                            `<label for="childBirthdate${i+1}">Birthdate</label>`+
                            `<input name="child-birth-date${i+1}" type="date" class="form-control"  placeholder="mm/dd/yyyy" value="" required>`+
                        `<div class="valid-feedback">Looks good!</div>`+
                    `</div>`];
                $($childForm[j]).appendTo('.childrenData');
            }
        }
        
    }
    multichoiceIndustry(){
        const industry = {
            "Agriculture":"Agriculture",
            "Apparel":"Apparel",
            "Architect":"Architect",
            "Banking":"Banking",
            "Chemicals":"Chemicals",
            "Childcare Provider":"Childcare Provider",
            "Clergy":"Clergy",
            "Communications":"Communications",
            "Construction":"Construction",
            "Consulting":"Consulting",
            "Dental":"Dental",
            "Education":"Education",
            "Electronics":"Electronics",
            "Energy":"Energy",
            "Engineering":"Engineering",
            "Entertainment":"Entertainment",
            "Environmental":"Environmental",
            "Finance":"Finance",
            "Food Company":"Food Company",
            "Food Service/Restaurant":"Food Service/Restaurant",
            "Government":"Government",
            "Health Care":"Health Care",
            "Homemaker":"Homemaker",
            "Hospitality":"Hospitality",
            "Insurance":"",
            "Law Enforcement":"Law Enforcement",
            "Lawyer":"Lawyer",
            "Machinery":"Machinery",
            "Maintenance":"Maintenance",
            "Management":"Management",
            "Manufacturing":"Manufacturing",
            "Market Research":"Market Research",
            "Media":"Media",
            "Medical":"Medical",
            "Military":"Military",
            "Not For Profit":"Not For Profit",
            "Other, please specify:":"Other, please specify",
            "Public Administration":"Public Administration",
            "Real Estate, Rental and Leasing":"Real Estate, Rental and Leasing",
            "Recreation":"Recreation",
            "Retail":"Retail",
            "Retired":"Retired",
            "Sales":"Sales",
            "Scientific":"Scientific",
            "Self Employed":"Self Employed",
            "Service Trade":"Service Trade",
            "Shipping":"Shipping",
            "Social Services":"Social Services",
            "Student":"Student",
            "Technology":"Technology",
            "Telecommunications":"Telecommunications",
            "Transportation":"Transportation",
            "Prefer not to answer":"Prefer not to answer",
            "Utilities":"Utilities",
            "Veterinarian":"Veterinarian"
        }
        let $mySelect = $('#industry');
        $.each(industry,function(key,value){
            let $option = $('<option/>',{
                value:key,
                text:value
            });
            $mySelect.append($option);
        });
    }
}

let main = new Main();
