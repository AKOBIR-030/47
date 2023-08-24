window.addEventListener('DOMContentLoaded', ()=>{

    const promo__bg = document.querySelector('.promo__bg')
    const promo__adv = document.querySelectorAll('.promo__adv img')
    const promo__interactive_list = document.querySelector('.promo__interactive-list')
    const form = document.querySelector('.add')
    const adding__input = document.querySelector('.adding__input')
    const check = document.querySelector('#check')  



    let seriesDb = [
        {
            type:'OMAR',
            like:true
        } ,
        {
            type:'The Final Legacy',
            like:true
        } ,
        {
            type:'ERTUGRUL',
            like:true
        } ,
        {
            type:'MAGNIFICENT CENTURY',
            like:true
        } ,
        {
            type:'GREAT SELJUKS: GUARDIANS...',
            like:true
        } ,
    ];

    form.addEventListener('submit' , (e)=>{
        e.preventDefault()
       let newSeries = adding__input.value.toUpperCase();
       let checked1 = check.checked
       
       if(newSeries.trim() !==''){
        if(newSeries.length >=20){
            let newSeries = `${newSeries.substring(1,20)}...`;
        }
        seriesDb.sort();
        seriesDb = [
            ...seriesDb,
          {
               type:newSeries,
               like:checked1,
          },
          ];
        addSeries()
       }
       e.target.reset()
    });





    function addSeries(){
        promo__interactive_list.innerHTML = "";
        seriesDb.sort()
        
        seriesDb.forEach((item,index) => {

                const li = item.like
                ?`<li class="promo__interactive-item">
                    ${index + 1}.
                    ${item.type} &star; <div class="delete"></div></li>`
                :`<li class="promo__interactive-item">
                    ${index + 1}.
                    ${item.type}<div class="delete"></div></li>`;
            promo__interactive_list.innerHTML += li
        });
    }

    function Changes(){
        promo__bg.style.background = 'url("../img/1.jpg") bottom'
        promo__adv.forEach((e)=>{
            e.remove()
        })
    };

    Changes()
    addSeries()

    const promo__interactiveItem = document.querySelectorAll('.promo__interactive-item')

    promo__interactiveItem.forEach((item) =>{
        item.addEventListener('click', (e)=>{
            if(e.target.classList.contains('delete')){
                promo__interactive_list.removeChild(e.target.parentElement)
            }
        })
    })



});