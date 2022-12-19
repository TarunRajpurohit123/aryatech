$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

var filterBtn = document.getElementsByClassName('filter-button');
for (let index = 0; index < filterBtn.length; index++) {
    // filterBtn[index].addEventListener('click',(e)=>{
    //     filterBtn[index].classList.add("filter-active");
    // });
    filterBtn[0].addEventListener('click',(e)=>{
        filterBtn[0].classList.add("filter-active");
        filterBtn[1].classList.remove("filter-active");
        filterBtn[2].classList.remove("filter-active");
        filterBtn[3].classList.remove("filter-active");
        filterBtn[4].classList.remove("filter-active");
        filterBtn[5].classList.remove("filter-active");
    });
    filterBtn[1].addEventListener('click',(e)=>{
        filterBtn[1].classList.add("filter-active");
        filterBtn[0].classList.remove("filter-active");
        filterBtn[2].classList.remove("filter-active");
        filterBtn[3].classList.remove("filter-active");
        filterBtn[4].classList.remove("filter-active");
        filterBtn[5].classList.remove("filter-active");
    });
    filterBtn[2].addEventListener('click',(e)=>{
        filterBtn[2].classList.add("filter-active");
        filterBtn[0].classList.remove("filter-active");
        filterBtn[1].classList.remove("filter-active");
        filterBtn[3].classList.remove("filter-active");
        filterBtn[4].classList.remove("filter-active");
        filterBtn[5].classList.remove("filter-active");
    });
    filterBtn[3].addEventListener('click',(e)=>{
        filterBtn[3].classList.add("filter-active");
        filterBtn[0].classList.remove("filter-active");
        filterBtn[1].classList.remove("filter-active");
        filterBtn[2].classList.remove("filter-active");
        filterBtn[4].classList.remove("filter-active");
        filterBtn[5].classList.remove("filter-active");
    });
    filterBtn[4].addEventListener('click',(e)=>{
        filterBtn[4].classList.add("filter-active");
        filterBtn[0].classList.remove("filter-active");
        filterBtn[1].classList.remove("filter-active");
        filterBtn[2].classList.remove("filter-active");
        filterBtn[3].classList.remove("filter-active");
        filterBtn[5].classList.remove("filter-active");
    });
    filterBtn[5].addEventListener('click',(e)=>{
        filterBtn[5].classList.add("filter-active");
        filterBtn[0].classList.remove("filter-active");
        filterBtn[1].classList.remove("filter-active");
        filterBtn[2].classList.remove("filter-active");
        filterBtn[3].classList.remove("filter-active");
        filterBtn[4].classList.remove("filter-active");
    });
    
}


let dddlll = document.getElementById("dddlll");
let dldldl = document.getElementById("dldldl");
let dddl_close = document.getElementById("dddl_close");
dddlll.addEventListener('mouseover',()=>{
    dldldl.style.opacity = "1";
    setTimeout(()=>{
        dldldl.style.opacity = "0";
    },3000)
})
dddl_close.addEventListener('click',()=>{
    dldldl.style.opacity = "0";
})

