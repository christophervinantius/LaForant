$(document).ready(function(){
    let agents = $(".agent-info");
    let current = 0;
    let first = 0;
    let last = agents.length - 1;
    agents.hide();
    agents.eq(0).show();
    $(".agent-next").on("click", function(){
        agents.eq(current).hide();
        current++;
        if(current > last){
            current = first;
        }
        agents.eq(current).slideDown(2500);
    });
    $(".agent-prev").on("click", function(){
        agents.eq(current).hide();
        current--;
        if(current < first){
            current = last;
        }
        agents.eq(current).slideDown(2500);
    });
});