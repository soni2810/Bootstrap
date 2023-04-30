// script for verticle navigation
// $(document).ready(function() {
//     var header_height = $('header').outerHeight();
//     $('.banner-top').css('padding-top', header_height)


//     $(function() {
//         var mastHeight = $('header').outerHeight();
//         var banner_nav_height = $('.sticky-navigation').outerHeight();
//         var link = $('.sticky-navigation a');

//         link.on('click', function(e) {
//             var target = $($(this).attr('href'));
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 500);
//             $(this).addClass('active');
//             e.preventDefault();
//         });

//         $(window).on('scroll', function() {
//             scrNav();
//         });

//         function scrNav() {
//             var sTop = $(window).scrollTop();
//             $('section').each(function() {
//                 var id = $(this).attr('id'),
//                     offset = $(this).offset().top - banner_nav_height,
//                     height = $(this).height();
//                 if (sTop >= offset && sTop < offset + height) {
//                     if (link.attr('data-scroll') !== undefined) {
//                         link.removeClass('active');
//                     }
//                     $('.sticky-navigation').find('[data-scroll="' + id + '"]').addClass('active');
//                 }
//             });
//         }
//         scrNav();
//     });

// script for verticle navigation end

// script for horizontal navigation

//     $(function() {
//         var mastHeight = $('header').outerHeight();
//         var banner_nav_height = $('.sticky-navigation').outerHeight();
//         var link = $('.verticle-navgation a');

//         link.on('click', function(e) {
//             var target = $($(this).attr('href'));
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 500);
//             $(this).addClass('active');
//             e.preventDefault();
//         });

//         $(window).on('scroll', function() {
//             scrVer();
//         });

//         function scrVer() {
//             var sTop = $(window).scrollTop();
//             $('section').each(function() {
//                 var id = $(this).attr('id'),
//                     offset = $(this).offset().top - banner_nav_height,
//                     height = $(this).height();
//                 if (sTop >= offset && sTop < offset + height) {
//                     if (link.attr('data-index') !== undefined) {
//                         link.removeClass('active');
//                     }
//                     $('.verticle-navgation').find('[data-index="' + id + '"]').addClass('active');
//                 }
//             });
//         }
//         scrVer();
//     });


// })


// $(document).ready(function() {
//     var length_sec = $('section:not(.sticky-navigation)').length;
//     var section_num = 1;
//     var nav_num = 1;
//     var nav_href = 1;
//     for (var i = 0; i < length_sec; i++) {
//         $('.verticle-navgation > ul').append('<li><a href="#" data-index=""></a></li>')
//     }

//     $('section:not(.sticky-navigation)').each(function() {
//         $(this).attr('id', 'section' + section_num++)
//     })

//     $('.verticle-navgation > ul > li').each(function() {
//         $(this).find('a').attr('data-index', 'section' + nav_num++)
//         $(this).find('a').attr('href', '#' + 'section' + nav_href++)
//     })

// })


$(document).ready(function() {

    $(' .lorem-sec__accordion .accordion__item').each(function() {
      if (!$(this).find('button').hasClass("collapsed")) {
          $(this).addClass('active-accordion')
      }
  });
  
  $(' .lorem-sec__accordion .accordion__item .accordion_header button').click(function() {
      $(this).parents().eq(1).toggleClass('active-accordion')
      $(this).parents().eq(1).siblings().removeClass('active-accordion')
  });
  })
// script for horizontal navigation end