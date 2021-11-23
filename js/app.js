/**
 * This cacth a credit card data 
 * and only continue if all data is rigth
 * if some data is wrogth change a input color to red... you need create a css input bg red
 *
 */
//Wait to charge all html+css
$(document).ready(function(){
        //buy via credit card
        $("#btnComprar").click(function(){
            //TODO
            //card details validation
            var cardNumber = ($("#card_number").val() + "").trim();
            var expMonth = $("#expiry_month").val();
            var expYear = $("#expiry_year").val();
            var cvv = $("#cvv").val();
            var regCardNumber = /^[0-9 ]+$/;
            var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
            var regYear = /^2022|2023|2024|2025|2026|2027|2028|2029|2030|2031|2032|2033|2034$/;
            var regCVV = /^[0-9]{3,3}$/;

            var errorsInCard = 0;


            //Validate in regular expresions
            //The card number contain stranger caracters?
            if(!regCardNumber.test(cardNumber) || cardNumber.length <= 7){
                errorsInCard = errorsInCard + 1;
                $("#card_number").removeClass('notVerifyData');
                $("#card_number").addClass('invalidData');
                //alert("Error en numero de tarjeta de credito");
            }else{
                $("#card_number").addClass('notVerifyData');
            }

            //The month format in credit card contain error?
            if(!regMonth.test(expMonth)){
                errorsInCard = errorsInCard + 1;
                $("#expiry_month").removeClass('notVerifyDataa');
                $("#expiry_month").addClass('invalidData');
                alert("Error en mes de tarjeta de credito");
            }else{
                $("#expiry_month").addClass('notVerifyData');
            }
            //The year of credit card expedition contain error?
            if(!regYear.test(expYear)){
                errorsInCard = errorsInCard + 1;
                $("#expiry_year").removeClass('notVerifyData');
                $("#expiry_year").addClass('invalidData');
                alert("Error en año de tarjeta de credito");
            }else{
                $("#expiry_year").addClass('notVerifyData');
            }
            //The format of CVV contain error?
            if(!regCVV.test(cvv)){
                errorsInCard = errorsInCard + 1;
                $("#cvv").removeClass('notVerifyData');
                $("#cvv").addClass('invalidData');
                //alert("Error en cvv de tarjeta de credito");
            }else{
                $("#cvv").addClass('notVerifyData');
            }

        
            
            if(errorsInCard == 0){
                alert("la tarjeta está bien");
                //Hacer el sutmit
            }else{
                alert("Errores en la tarjeta");
            }
            
            
        });
});