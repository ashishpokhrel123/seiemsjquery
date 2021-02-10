$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-active').addClass('btn-default');
            $item.addClass('btn-active');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-active').trigger('click');

    /* static data */

    const product = [{
        "id": 1,
        "productname":"Golden bag",
        "price":"2000"
    },
    {
    "id": 2,
    "productname":"jean pant",
    "price":"1500"
    },
    {
    "id": 3,
    "productname":"shoes",
    "price":"1000"
    }];

    $('#clickcart').click(function(e){

       
        e.preventDefault();
        var productname = "Bag";
        var productprice = "1200";
        var productstock = 4;

        $("#productname").append(productname);
        $("#productstock").append(productstock);
        $("#productprice").append(productprice);


        

        
        
        
     
       
        
     


       
       
      
        })
    });
    
