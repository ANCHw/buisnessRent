$(document).ready( function() {

    //tabs
    $('.tab').click( function() {

        $('.tab[data-group=' + $(this).data('group') + ']').removeClass('active');
        $(this).addClass('active');
        $('.tab-content[data-group=' + $(this).data('group') + ']').addClass('d-none');
        $($(this).data('target')).removeClass('d-none');
    });

    //add favourite
    $('.space-card__add-favourite').click( function(event) {
        event.preventDefault();
        $(this).addClass('active');
    });

    //dropdown
    $('.dropdown-control').click( function(){
        $(this).addClass('active');
        $(this).children('.dropdown').show();
    });

    $(document).mouseup( function(e){ 
		let div = $('.dropdown'); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) { 
			div.hide(); 
		}

        div.parent().removeClass('active');
	});

    //clear
    $('.filter__clear').click( function() {

    });

    //slider
    if ($(window).width() > 767.9) {
        $('.slider').flickity({
            cellAlign: 'left',
            arrowShape: { 
                x0: 20,
                x1: 45, y1: 30,
                x2: 55, y2: 30,
                x3: 30
              },
            pageDots: false
          });
    }
    

    //
    // $(document).mouseup( function(e){ 
	// 	let div = $('.modal'); 
	// 	if ( !div.is(e.target) 
	// 	    && div.has(e.target).length === 0 ) { 
	// 		div.hide(); 
	// 	}
	// });

    // 
    (function(){
        const modalParent = document.querySelector('#js-board')
    
        const modalBack = modalParent.querySelector('.board__background')
        const modalChild = modalParent.querySelector('.board__wrapper')
    
        const openModalBtn = document.querySelectorAll('.js-open-popup')
        const closeModalBtn = modalParent.querySelectorAll('.js-close-popup')
    
        const body = document.querySelector('body')
    
        modalBack.addEventListener('click', closeModal)
    
        openModalBtn.forEach(el => {
            el.addEventListener('click', openModal)
        })
    
        closeModalBtn.forEach(el => {
            el.addEventListener('click', closeModal)
        })
    
        modalChild.addEventListener('click', stopPropagation)
    
        function closeModal(){
            modalParent.classList.remove('active')
            body.style.overflow = 'auto'
        }
    
        function openModal(){
            modalParent.classList.add('active')
            body.style.overflow = 'hidden'
        }
    
        function stopPropagation(e){
            e.stopPropagation()
        }
    })()

    // mobile menu
    

    function jsMenu(){
        const modalParent = document.querySelector('#js-mobile-menu')
    
        const modalBack = modalParent.querySelector('.board__background')
        const modalChild = modalParent.querySelector('.board__wrapper')
    
        const openModalBtn = document.querySelectorAll('.js-burger')
        const closeModalBtn = modalParent.querySelectorAll('.js-close-popup')
    
        const body = document.querySelector('body')
    
        modalBack.addEventListener('click', closeModal)
    
        openModalBtn.forEach(el => {
            el.addEventListener('click', openModal)
        })
    
        closeModalBtn.forEach(el => {
            el.addEventListener('click', closeModal)
        })
    
        modalChild.addEventListener('click', stopPropagation)
    
        function closeModal(){
            modalParent.classList.remove('active')
            body.style.overflow = 'auto'
        }
    
        function openModal(){
            modalParent.classList.add('active')
            body.style.overflow = 'hidden'
        }
    
        function stopPropagation(e){
            e.stopPropagation()
        }
    }
    jsMenu()

    const mobileSubMenu = document.querySelector('.mobile-menu__sublist')

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link-block')
    mobileMenuLinks.forEach(item=>{
        item.addEventListener('click', showSubMenu)
    })

    function showSubMenu(){
        mobileSubMenu.classList.add('active')
    }

    function hideSubMenu(){
        mobileSubMenu.classList.remove('active')
    }

    // mobile menu
});