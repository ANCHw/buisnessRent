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
   if ($(window).width() > 767.9) {
    $('.dropdown-control').click( function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('.dropdown').hide();
        } else {
            $(this).addClass('active');
            $(this).children('.dropdown').show();
        }  
    });

    $(document).mouseup( function(e){ 
		let div = $('.dropdown'); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 && !div.parent().is(e.target)) { 
			div.hide(); 
            div.parent().removeClass('active');
		}
	});

   }
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
    
    // cities
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
            console.log('stop');
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

    // const mobileSubMenu = document.querySelector('.mobile-menu__sublist')

    // const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link-block')
    // mobileMenuLinks.forEach(item=>{
    //     item.addEventListener('click', showSubMenu)
    // })

    // function showSubMenu(){
    //     mobileSubMenu.classList.add('active')
    // }

    // function hideSubMenu(){
    //     mobileSubMenu.classList.remove('active')
    // }

    $('.mobile-menu__link-block').click( function () {
        let target = $(this).data('target')
        $(target).addClass('active')
    })

    $('#mobileMenuClose').click( function() {
        $('.mobile-menu__sublist').removeClass('active')
    })

    // mobile menu


    // mobile filter
    if ($(window).width() < 768) {
        function jsFilter(){
            const modalParent = document.querySelector('#js-filter')
        
            const modalBack = modalParent.querySelector('.board__background')
            const modalChild = modalParent.querySelector('.board__wrapper')
        
            const openModalBtn = document.querySelectorAll('.filter .dropdown-control')
            const closeModalBtn = modalParent.querySelectorAll('.js-close-popup')
        
            const body = document.querySelector('body')
            const filterItems = document.querySelectorAll('.mobile-filter__item')
        
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
                filterItems.forEach(el => {
                    el.classList.remove('active')
                })
            }
        
            function openModal(){
                modalParent.classList.add('active')
                body.style.overflow = 'hidden'
                const target = document.querySelector(this.dataset.target)
                target.classList.add('active')
            }
        
            function stopPropagation(e){
                e.stopPropagation()
            }
        }
        jsFilter()
     
    }

    // mobile sort
    if ($(window).width() < 768) {
        function jsSort(){
            const modalParent = document.querySelector('#js-sort')
        
            const modalBack = modalParent.querySelector('.board__background')
            const modalChild = modalParent.querySelector('.board__wrapper')
        
            const openModalBtn = document.querySelectorAll('.dropdown-control.sort')
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
                const target = document.querySelector(this.dataset.target)
                target.classList.add('active')
            }
        
            function stopPropagation(e){
                e.stopPropagation()
            }
        }
        jsSort()
     
    }
});