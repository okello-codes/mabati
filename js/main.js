window.addEventListener('load', AOS.refresh);

$(document).ready(function() {

    var productLinks = document.querySelectorAll('.mrm-product-link a');

    productLinks.forEach(productLink => {
        productLink.href = `${productLink.href}#product`;
    });


    AOS.init({
        duration: 400,
        disable: 'mobile',
    });

    function changeDisplayFlex(element) {
        element.style.display = element.style.display === 'flex' ? 'none' : 'flex';
    }

    function changeDisplayBlock(element) {
        element.style.display = element.style.display === 'block' ? 'none' : 'block';
    }

    function changeVisibility(element) {
        element.style.visibility = element.style.visibility === 'visible' ? 'hidden' : 'visible';
    }

    function changeHeight(element) {
        element.style.height = element.style.height === 'auto' ? 'auto' : 'auto';
    }

    function changeTranslateY(element) {
        element.style.transform = element.style.transform === 'scale(1)' ? 'scale(0)' : 'scale(1)';
    }

    function changeOpacity(element) {
        element.style.opacity = element.style.opacity === '1' ? '0' : '1';
    }

    var needHelpSlip = document.querySelector('.header-noti-wrapper');
    var menuListItem = document.querySelectorAll('.primary-menu > li');
    var mobileMenuListItem = document.querySelectorAll('.first-level-with-child');
    var menuListSubItem = document.querySelectorAll('.second-level-with-child');
    var menu = document.querySelector('.mobile-menu');
    var nav = document.querySelector('.primary-menu');
    var mobileSearch = document.querySelector('.mobile-search-icon');
    var mobileSearchForm = document.querySelector('.search-mobile');

    menuListItem.forEach(listItem => {
        listItem.onmouseover = function(e) {
            needHelpSlip.style.filter = 'blur(2px)';
        }
        listItem.onmouseout = function(e) {
            needHelpSlip.style.filter = 'none';
        }
    });

    menu.onclick = function(e) {
        changeDisplayFlex(nav);
        menuListItem.forEach(menuListItem => {
            changeDisplayBlock(menuListItem);
        });
    }

    mobileSearch.onclick = function(e) {
        $('.search-mobile').slideToggle('slow');
        //        mobileSearchForm.classList.toggle("display-hidden");
        //        mobileSearchForm.classList.toggle("height-zero");
        //        mobileSearchForm.classList.toggle("visibility-hidden");
    }

    /*Menu on mobile*/
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        menuListItem.forEach(listItem => {
            listItem.onmouseover = function(e) {
                needHelpSlip.style.filter = 'none';
            }
            listItem.onmouseout = function(e) {
                needHelpSlip.style.filter = 'none';
            }
        });

        //        mobileMenuListItem.forEach(mobilelistItem => {
        //            mobilelistItem.onclick = function (e) {
        //                changeHeight(e.target.childNodes[3]);
        //                changeDisplayBlock(e.target.childNodes[3]);
        //                changeVisibility(e.target.childNodes[3]);
        //                setTimeout(console.log(e.target.childNodes[3]), 5000);
        //                //console.log(this);
        //            }
        //        });
    }

    $("body").on("click", ".smooth-scroll", function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    if ($(".cost-calculator").length > 0) {
        var mixer = mixitup('.costEstimatorsWrapper');
        mixer.filter('.simplegableroof');


        Math.radians = function(degrees) {
            return degrees * Math.PI / 180;
        };
        var gableForm = document.querySelector('#gableForm');
        var roofAreaValue = document.querySelector('.gableForm-roof-area-value');
        var costPerSqmValue = document.querySelector('.gableForm-cost-per-sqm-value');
        var estimatorAmountValue = document.querySelector('.gableForm-estimator-amount-value');

        gableForm.onsubmit = function(e) {
            e.preventDefault();
            var gableFormInputs = document.querySelectorAll('.cost-calculator #gableForm .form-control');
            var profile = gableFormInputs[0].value;
            var gauge = gableFormInputs[1].value;
            var profLength = gableFormInputs[2].value;
            var profWidth = gableFormInputs[3].value;
            var profEaves = gableFormInputs[4].value;
            var profGable = gableFormInputs[5].value;
            var profPitch = gableFormInputs[6].value;
            var floorArea = (parseFloat(profLength) + parseFloat(2) * parseFloat(profGable)) * (parseFloat(profWidth) + parseFloat(2) * parseFloat(profEaves));
            var pitchRadians = Math.round(Math.radians(parseFloat(profPitch)) * 100) / 100;
            var roofAreaOne = floorArea / parseFloat(Math.cos(pitchRadians));
            var roofArea = Math.round(roofAreaOne * 100) / 100;
            var costPerSquare;
            if (profile == 'ResincotNC110') {
                costPerSquare = parseFloat(649.60);
            } else if (profile == 'CovermaxCX780') {
                costPerSquare = parseFloat(634.60);
            } else if (profile == 'MaxcoverMX1015') {
                costPerSquare = parseFloat(560.60);
            } else if (profile == 'VersatileVT1015') {
                costPerSquare = parseFloat(709.40);
            } else if (profile == 'ElegantileET1050') {
                costPerSquare = parseFloat(797.10);
            } else if (profile == 'OrientileOT1050') {
                costPerSquare = parseFloat(797.10);
            } else if (profile == 'ZentileZT1000') {
                costPerSquare = parseFloat(800.00);
            } else {
                costPerSquare = 0;
            }

            var totalAmount = parseFloat(costPerSquare) * parseFloat(roofArea);
            var allAmount = Math.round(totalAmount * 100) / 100;

            if (isNaN(roofArea)) {
                roofAreaValue.innerHTML = 0;
            } else {
                roofAreaValue.innerHTML = roofArea;
            }

            if (isNaN(allAmount)) {
                estimatorAmountValue.innerHTML = 0;
            } else {
                estimatorAmountValue.innerHTML = allAmount.toLocaleString();
            }
            costPerSqmValue.innerHTML = costPerSquare.toLocaleString();
        }

        /*Hip Form Calculator*/
        var hipForm = document.querySelector('#hipForm');
        var hiproofAreaValue = document.querySelector('.hip-roof-area-value');
        var hipcostPerSqmValue = document.querySelector('.hip-cost-per-sqm-value');
        var hipestimatorAmountValue = document.querySelector('.hip-estimator-amount-value');

        hipForm.onsubmit = function(e) {
            e.preventDefault();
            var gableFormInputs = document.querySelectorAll('.cost-calculator #hipForm .form-control');
            var profile = gableFormInputs[0].value;
            var gauge = gableFormInputs[1].value;
            var profLength = gableFormInputs[2].value;
            var profWidth = gableFormInputs[3].value;
            var profEaves = gableFormInputs[4].value;
            var profPitch = gableFormInputs[5].value;
            var floorArea = (parseFloat(profLength) + parseFloat(2) * parseFloat(profEaves)) * (parseFloat(profWidth) + parseFloat(2) * parseFloat(profEaves));
            var pitchRadians = Math.round(Math.radians(parseFloat(profPitch)) * 100) / 100;
            var roofAreaOne = floorArea / parseFloat(Math.cos(pitchRadians));
            var roofArea = Math.round(roofAreaOne * 100) / 100;
            var costPerSquare;
            if (profile == 'ResincotNC110') {
                costPerSquare = parseFloat(649.60);
            } else if (profile == 'CovermaxCX780') {
                costPerSquare = parseFloat(634.60);
            } else if (profile == 'MaxcoverMX1015') {
                costPerSquare = parseFloat(560.60);
            } else if (profile == 'VersatileVT1015') {
                costPerSquare = parseFloat(709.40);
            } else if (profile == 'ElegantileET1050') {
                costPerSquare = parseFloat(797.10);
            } else if (profile == 'OrientileOT1050') {
                costPerSquare = parseFloat(797.10);
            } else if (profile == 'ZentileZT1000') {
                costPerSquare = parseFloat(800.00);
            } else {
                costPerSquare = 0;
            }

            var totalAmount = parseFloat(costPerSquare) * parseFloat(roofArea);
            var allAmount = Math.round(totalAmount * 100) / 100;

            if (isNaN(roofArea)) {
                hiproofAreaValue.innerHTML = 0;
            } else {
                hiproofAreaValue.innerHTML = roofArea;
            }

            if (isNaN(allAmount)) {
                hipestimatorAmountValue.innerHTML = 0;
            } else {
                hipestimatorAmountValue.innerHTML = allAmount.toLocaleString();
            }
            hipcostPerSqmValue.innerHTML = costPerSquare.toLocaleString();
        }
    }

    if ($(".contact-page").length > 0) {
        var contactForm = document.querySelector('#gform_1');
        var contactFormList = document.querySelectorAll('.form-list');
        var inputListLength = contactFormList.length;
        var contactFormButton = document.querySelector('#gform_submit_button_1');



        var lastList = contactFormList[inputListLength - 1];
        var lastInput = lastList.querySelector(`.form-control`);

        contactForm.onsubmit = function(e) {
            e.preventDefault();
        }


        contactFormButton.onclick = function(e) {
            e.preventDefault();
            var inputListFirst = document.querySelector('#gform_1 .display-flex');
            var activeInput = document.querySelector('#gform_1 .display-flex .form-control');
            activeInput.onkeyup = function(e) {
                e.target.classList.remove('invalid-input');
            }
            if (!activeInput.checkValidity()) {
                activeInput.placeholder = "Field is invalid";
                activeInput.classList.add('invalid-input');
                return false;
            } else {
                try {
                    if (lastInput.value !== '') {
                        contactForm.submit();
                    }
                    var grandParentNextSibling = inputListFirst.nextSibling;
                    inputListFirst.classList.toggle("display-none");
                    inputListFirst.classList.toggle("display-flex");
                    grandParentNextSibling.classList.toggle("display-none");
                    grandParentNextSibling.classList.toggle("display-flex");
                    console.log(lastInput);


                } catch (err) {
                    console.log(err);
                }
            }
        }

        //        var contactNextButtons = document.querySelectorAll('.next-button');
        //        var contactFormSubmit = document.querySelector('.contact-submit');
        //        var formWrapper = document.querySelector('.gform_body');
        //
        //        contactNextButtons.forEach(contactButton => {
        //            contactButton.onclick = function (e) {
        //                var parentInputGroup = e.target.parentNode;
        //                var grandParentInputGroup = parentInputGroup.parentNode;
        //                var grandParentNextSibling = grandParentInputGroup.nextSibling;
        //                grandParentInputGroup.classList.toggle("display-none");
        //                grandParentInputGroup.classList.toggle("display-flex");
        //
        //
        //                try {
        //                    grandParentNextSibling.classList.toggle("display-none");
        //                    grandParentNextSibling.classList.toggle("display-flex");
        //                } catch (err) {
        //                    console.log(err);
        //                    formWrapper.classList.toggle("display-none");
        //                    contactFormSubmit.classList.toggle("display-flex");
        //                    contactFormSubmit.classList.toggle("display-none");
        //                }
        //            }
        //        });
    }

    if ($(".gallery-page").length > 0) {
        var mixer = mixitup('.galleryContainer');
        //mixer.filter('.IdeastoInspire');

        (function($) {
            //$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

            $('.controls a').click(function(j) {
                j.preventDefault();
            });
        })(jQuery);

        $('[data-fancybox]').fancybox();
    }

    if ($(".trade-partner-service-centers").length > 0) {
        var mixer = mixitup('.tradePartnerContainer');

        AOS.init({
            disable: true,
        });

    }

    if ($(".faqs-page").length > 0) {
        $(".set > a").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".content")
                    .slideUp(200);
                $(".set > a i")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
            } else {
                $(".set > a i")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
                $(this)
                    .find("i")
                    .removeClass("fa-plus")
                    .addClass("fa-minus");
                $(".set > a").removeClass("active");
                $(this).addClass("active");
                $(".content").slideUp(200);
                $(this)
                    .siblings(".content")
                    .slideDown(200);
            }
        });
    }

    /* Configure Home Page Swiper */
    if ($("#home-main-swiper").length > 0) {

        var swiper = new Swiper('.home-swiper', {
            direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.home-slider-swiper-button-next',
                prevEl: '.home-slider-swiper-button-prev',
            },
            breakpoints: {
                // when window width is <= 320px
                320: {
                    direction: 'horizontal',
                },
                // when window width is <= 480px
                480: {
                    direction: 'horizontal',
                },
                // when window width is <= 640px
                640: {
                    direction: 'horizontal',
                },
                800: {
                    direction: 'horizontal',
                }
            },
        });

        /*Testimonials swiper*/
        var swiper = new Swiper('.testimonials-swiper-container', {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.testimonials-swiper-button-next',
                prevEl: '.testimonials-swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                800: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            },
        });

        /*Roofing products Slider*/
        var roofingSwiper = new Swiper('.roofing-designs-swiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-roofing-button-next',
                prevEl: '.swiper-roofing-button-prev',
            },
        });

        //        $("#counter-total").html(roofingSwiper.slides.length);
        //        $("#counter-current").html('1');
        //
        //        roofingSwiper.on('slideChange', function () {
        //            $("#counter-current").html(roofingSwiper.activeIndex + 1);
        //        });

        /*Quiz Swiper*/
        var quizSwiper = new Swiper('.quiz-swiper', {
            loop: true,
            pagination: {
                el: '.swiper-quiz-inner-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-quiz-inner-button-next',
                prevEl: '.swiper-quiz-inner-button-prev',
            },
        });

        /*Quiz Inner Swipper*/
        var quizInnerSwiper = new Swiper('.quiz-swiper-inner', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-quiz-inner-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-quiz-inner-button-next',
                prevEl: '.swiper-quiz-inner-button-prev',
            },
        });


    }

    if ($(".our-community-page").length > 0) {
        var focusGalleries = document.querySelectorAll('.focus-area-gallery-swiper-container');
        focusGalleries.forEach(focusGallery => {
            var swiperFocusGallery = new Swiper(focusGallery, {
                loop: true,
                effect: 'fade',
                speed: 1500,
                observer: true,
                observeParents: true,
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: '.focus-area-gallery-swiper-button-next',
                    prevEl: '.focus-area-gallery-swiper-button-prev',
                },
            });
        });




        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                var focusGalleries = document.querySelectorAll('.focus-area-gallery-swiper-container');
                focusGalleries.forEach(focusGallery => {
                    var swiperFocusGallery = new Swiper(focusGallery, {
                        loop: true,
                        effect: 'fade',
                        speed: 1500,
                        observer: true,
                        observeParents: true,
                        fadeEffect: {
                            crossFade: true
                        },
                        navigation: {
                            nextEl: '.focus-area-gallery-swiper-button-next',
                            prevEl: '.focus-area-gallery-swiper-button-prev',
                        },
                    });
                });
            }
        });
    }

    if ($(".our-people-page").length > 0) {
        var swiper = new Swiper('.focus-area-gallery-swiper-container', {
            loop: true,
            effect: 'fade',
            speed: 1500,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.focus-area-gallery-swiper-button-next',
                prevEl: '.focus-area-gallery-swiper-button-prev',
            },
        });


        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);
            }
        });
    }

    if ($(".trussing-page").length > 0) {
        var swiper = new Swiper('.focus-area-gallery-swiper-container', {
            loop: true,
            effect: 'fade',
            speed: 1500,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.focus-area-gallery-swiper-button-next',
                prevEl: '.focus-area-gallery-swiper-button-prev',
            },
        });
    }

    if ($(".pre-engineered-page").length > 0) {
        var swiper = new Swiper('.focus-area-gallery-swiper-container', {
            loop: true,
            effect: 'fade',
            speed: 1500,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.focus-area-gallery-swiper-button-next',
                prevEl: '.focus-area-gallery-swiper-button-prev',
            },
        });
    }

    if ($(".roof-designs-page").length > 0) {

        AOS.init({
            disable: true,
        });

        var focusGalleries = document.querySelectorAll('.focus-area-gallery-swiper-container');
        var roofingSwiper = new Swiper('.roof-desings-swiper-container', {
            loop: false,
            slidesPerView: 4,
            speed: 900,
            navigation: {
                nextEl: '.roof-desings-swiper-button-next',
                prevEl: '.roof-desings-swiper-button-prev',
            },
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                800: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            },
        });

        var roofDesignsSwiper = new Swiper('.focus-area-gallery-swiper-container', {
            loop: true,
            effect: 'fade',
            speed: 1500,
            observer: true,
            observeParents: true,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.focus-area-gallery-swiper-button-next',
                prevEl: '.focus-area-gallery-swiper-button-prev',
            },
        });


        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                var focusGalleries = document.querySelectorAll('.focus-area-gallery-swiper-container');
                focusGalleries.forEach(focusGallery => {
                    var roofDesignsSwiper = new Swiper('.focus-area-gallery-swiper-container', {
                        loop: true,
                        effect: 'fade',
                        speed: 1500,
                        observer: true,
                        observeParents: true,
                        fadeEffect: {
                            crossFade: true
                        },
                        navigation: {
                            nextEl: '.focus-area-gallery-swiper-button-next',
                            prevEl: '.focus-area-gallery-swiper-button-prev',
                        },
                    });
                });
            }
        });
    }

    if ($(".color-plus-page").length > 0) {
        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }

    if ($(".insulation-page").length > 0) {
        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }

    if ($(".flashings-page").length > 0) {
        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }

    if ($(".ventilations-page").length > 0) {
        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }

    if ($(".industrial-commercial-roofing-solutions-page").length > 0) {
        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }

    if ($(".residential-stone-coated-page").length > 0) {
        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }


    if ($(".residential-steel-roofing-tiles-page").length > 0) {

        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }


    if ($(".residential-roofing-sheets-page").length > 0) {
        var roofingSwiper = new Swiper('.roof-desings-swiper-container', {
            loop: true,
            slidesPerView: 6,
            speed: 1500,
            navigation: {
                nextEl: '.roof-desings-swiper-button-next',
                prevEl: '.roof-desings-swiper-button-prev',
            },
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                800: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            },
        });

        var directorsLinks = document.querySelectorAll('.directors-link');
        var directorCopyArea = document.querySelector('#directors-copy-area');

        directorsLinks.forEach(directorsLink => {
            directorsLink.onclick = function(e) {

                //Add title to each quick link
                directorsLinks.forEach(directorsLink => {
                    directorsLink.innerHTML = directorsLink.dataset.role;
                });

                //Remove title for target quick link
                e.target.innerHTML = '';

                //Remove the active quick link
                var activeQuickLink = document.querySelector('.active-quick-link');
                activeQuickLink.classList.remove('active-quick-link');

                //Add active quick link to the target
                var directorParent = e.target.parentElement;
                directorParent.classList.add('active-quick-link');

                //Get copy of target quick link
                var directorCopy = directorParent.querySelector('#members-copy-inner');
                directorCopy.classList.add('active-member-link');

                //Remove previous copy of in the copy area
                while (directorCopyArea.firstChild) {
                    directorCopyArea.firstChild.remove();
                }

                //Add new copy to the copy area
                directorCopyArea.insertAdjacentHTML('afterbegin', `${directorCopy.outerHTML}`);

                initiateAccordion();
            }
        });
    }

    if ($(".about-us-page").length > 0) {
        var aboutUsSwiper = new Swiper('.history-swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 3,
            loop: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.history-swiper-pagination',
                dynamicBullets: true,
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: false,
                    speed: 400
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: false,
                    speed: 400
                },
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: false,
                    speed: 400
                },
                800: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: false,
                    speed: 400
                },
            },
        });

        var swiper = new Swiper('.about-us-video-swiper-container', {
            loop: true,
            effect: 'fade',
            speed: 1500,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.about-us-video-swiper-button-next',
                prevEl: '.about-us-video-swiper-button-prev',
            },
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                800: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
            },
        });

        var countryElements = document.getElementById('countries').childNodes;
        var countryCount = countryElements.length;
        for (var i = 0; i < countryCount; i++) {
            countryElements[i].onclick = function() {
                alert('You clicked on ' + this.id);
            }
        }

        $('[data-fancybox]').fancybox({
            youtube: {
                showinfo: 0
            },
        });

    }

    if ($(".news-and-media-page").length > 0) {
        $('[data-fancybox]').fancybox({
            youtube: {
                showinfo: 0
            },
        });
    }

    if ($(".rain-water-harvesting-page").length > 0) {

        $('[data-fancybox]').fancybox({
            youtube: {
                showinfo: 0
            },
        });

    }

    if ($(".sub-menu-wrapper").length > 0) {
        var acc = document.getElementsByClassName("accordion");
        var accs = document.querySelectorAll(".accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                accs.forEach(function(accord) {
                    var panelOne = accord.nextElementSibling;
                    var fa = accord.children[0];
                    if (panelOne.style.maxHeight) {
                        panelOne.style.maxHeight = null;
                        accord.classList.add("accordion-border-bottom");
                        $(accord).children('i').addClass("fa-plus");
                        $(accord).children('i').removeClass("fa-minus");
                    } else {
                        panelOne.style.maxHeight = "auto";
                    }
                });
                this.classList.toggle("accordion-border-bottom");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    $(this).children('i').addClass("fa-plus");
                    $(this).children('i').removeClass("fa-minus");
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    $(this).children('i').addClass("fa-minus");
                    $(this).children('i').removeClass("fa-plus");
                }
            });
        }
    }

    function initiateAccordion() {
        if ($(".mrm-faqs").length > 0) {
            (function($) {

                $('.accordion .accordion-title').click(function(j) {
                    var dropDown = $(this).closest('li').find('.black-small-text');
                    var fa = $(this).find('.fa');
                    var accordTitle = $(this).find('.accordion-title');
                    fa.toggleClass('translateNinetyDeg');
                    accordTitle.toggleClass('borderColorLightGrey');
                    $(this).closest('.accordion').find('.black-small-text').not(dropDown).slideUp();

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).closest('.accordion').find('a.active .translateNinetyDeg').removeClass('translateNinetyDeg');
                        $(this).closest('.accordion').find('a.active').removeClass('active');

                        $(this).addClass('active');
                    }

                    dropDown.stop(false, true).slideToggle();

                    j.preventDefault();
                });
            })(jQuery);
        }

        if ($(".mrm-accordion").length > 0) {
            (function($) {
                //$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

                $('.accordion .accordion-title').click(function(j) {
                    var dropDown = $(this).closest('li').find('.virtual-roof-visualiser-single__color-families');
                    var fa = $(this).find('.fa');
                    var accordTitle = $(this).find('.accordion-title');
                    fa.toggleClass('translateNinetyDeg');
                    accordTitle.toggleClass('borderColorLightGrey');
                    $(this).closest('.accordion').find('.virtual-roof-visualiser-single__color-families').not(dropDown).slideUp();

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');

                    } else {
                        $(this).closest('.accordion').find('a.active').removeClass('active');
                        $(this).addClass('active');
                        //$(this).closest('.accordion').find('.virtual-roof-visualiser-single__color-families').css( "display", "flex" );
                    }

                    dropDown.stop(false, true).slideToggle();

                    j.preventDefault();
                });
            })(jQuery);
        }
    }

    if ($(".mrm-faqs").length > 0) {
        (function($) {

            $('.accordion .accordion-title').click(function(j) {
                var dropDown = $(this).closest('li').find('.black-small-text');
                var fa = $(this).find('.fa');
                var accordTitle = $(this).find('.accordion-title');
                fa.toggleClass('translateNinetyDeg');
                accordTitle.toggleClass('borderColorLightGrey');
                $(this).closest('.accordion').find('.black-small-text').not(dropDown).slideUp();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.accordion').find('a.active .translateNinetyDeg').removeClass('translateNinetyDeg');
                    $(this).closest('.accordion').find('a.active').removeClass('active');

                    $(this).addClass('active');
                }

                dropDown.stop(false, true).slideToggle();

                j.preventDefault();
            });
        })(jQuery);
    }

    if ($(".mrm-accordion").length > 0) {
        (function($) {
            //$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

            $('.accordion .accordion-title').click(function(j) {
                var dropDown = $(this).closest('li').find('.virtual-roof-visualiser-single__color-families');
                var fa = $(this).find('.fa');
                var accordTitle = $(this).find('.accordion-title');
                fa.toggleClass('translateNinetyDeg');
                accordTitle.toggleClass('borderColorLightGrey');
                $(this).closest('.accordion').find('.virtual-roof-visualiser-single__color-families').not(dropDown).slideUp();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');

                } else {
                    $(this).closest('.accordion').find('a.active').removeClass('active');
                    $(this).addClass('active');
                    //$(this).closest('.accordion').find('.virtual-roof-visualiser-single__color-families').css( "display", "flex" );
                }

                dropDown.stop(false, true).slideToggle();

                j.preventDefault();
            });
        })(jQuery);
    }
});