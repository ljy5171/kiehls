const $gnb = $('header > nav > .gnb > li > a');
const $lnb = $('header > nav > .gnb  .lnb ');
const $lnb_img = $('header > nav > .gnb  .lnb_img ');
const $tnb = $('header > .tnb > li');
const $logo = $('header > h1');
const $lnb_bg = $('header > .lnb_bg');

$(window).on('load',function(){
    new WOW().init();
});

// $lnb_bg.on('mouseenter',function(){
//     $tnb.css({
//         filter : 'invert(0%)'
//     })
//     $logo.css({
//         filter : 'invert(100%)'
//     })
//     $gnb.css({
//         color : '#222'
//     })
// });
// $lnb_bg.on('mouseleave',function(){
//     $tnb.css({
//         filter : 'invert(100%)'
//     })
//     $logo.css({
//         filter : 'invert(0%)'
//     })
//     $gnb.css({
//         color : '#fff'
//     })
// });

{
// $gnb.on('mouseenter',function(){
//     nowIdx = $gnb.index(this);
//     $lnb_bg.stop().slideDown(100);
//     $tnb.css({
//         filter : 'invert(0%)'
//     })
//     $logo.css({
//         filter : 'invert(100%)'
//     })
//     $gnb.css({
//         color : '#222'
//     })
//     $lnb.eq(nowIdx).css({
//         display : 'block'
//     })
//     $lnb_img.eq(nowIdx).css({
//         display : 'block'
//     })
// });
// }
// {
    
//     $lnb.on('mouseleave',function(evt,idx){
//         nowIdx = $lnb.index(this);

//         $lnb_bg.stop().slideUp(200);
//         $tnb.css({
//             filter : 'invert(100%)'
//         })
//         $logo.css({
//             filter : 'invert(0%)'
//         })
//         $gnb.css({
//             color : '#fff'
//         })
//         $lnb.eq(nowIdx).css({
//             display : 'none'
//         })
       
//         $lnb_img.eq(nowIdx).css({
//             display : 'none'
//         })
//     });
//     $gnb.on('mouseleave',function(){
        
//     nowIdx = $gnb.index(this);
//     $lnb.eq(nowIdx).css({
//         display : 'none'
//     })
//     $lnb_img.eq(nowIdx).css({
//         display : 'none'
//     })
// });
    
}