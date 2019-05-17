/*custom*/

$(document).ready(function($){
    
orientationChange();

});

function orientationChange() {
    
if(window.addEventListener) {
        
window.addEventListener("orientationchange", function() {
            
location.reload();
        
});
    
}

}