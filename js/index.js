/**
 * Created by hxsd on 2016/12/16.
 */

document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
var url=window.location.search;
var id=url.substr(url.indexOf("=")+1);
var rDate=null;

$(function(){
    //侧边总导航数据
    var slideHref=[
        {title:"首页",href:"../index.html"},
        {title:"康体娱乐",href:"../template/entertainment.html"},
        {title:"会议会展",href:"../template/meeting.html"},
        {title:"婚庆宴会",href:"../template/wedding.html"},
        {title:"舒适客房",href:"../template/guestRoom.html"},
        {title:"餐饮美食",href:"../template/food.html"},
        {title:"商务办公",href:"../template/work.html"}
    ];
    var slideTxt='';
    $.each(slideHref,function(i,ele){
        slideTxt+= '<li><a href='+ele.href+'>'+ele.title+'</a></li>'
    });
    $('.menu').html(slideTxt);
    //侧边总导航swiper
    function menuClick(){
        //总导航函数设置
        var toggleMenu=function(){
            swiper.slideNext();
            swiper.activeIndex=1;
        };
        //总导航按钮获取
        var menuButton=document.getElementsByClassName('menu-button')[0];
        var swiper=new Swiper('body>.swiper-container',{
            //总导航按钮事件监听设置
            onInit:function(){
                menuButton.addEventListener('click',toggleMenu,false);
            },
            slidesPerView: 'auto',
            onSlideChangeEnd:function(slider){
                if(slider.activeIndex==1)
                    menuButton.removeEventListener('click',toggleMenu,false);
                else
                    menuButton.addEventListener('click',toggleMenu,false);
            },
            slideToClickedSlide: true
        });
    }
    menuClick();
    //自动轮播swiper3
    var swiper3 = new Swiper('.swiper-container3', {
        pagination: '.swiper-container3 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    //预订弹窗
    function telComfirm(){
        $('.order').on('click',function(){
            $('.comfirm').show();
            $('.comfirm span').click(function(){$('.comfirm').hide();})
        })
    }
    telComfirm()
});

/*    <div class="swiper-container">
 <div class="swiper-wrapper">
 <div class="swiper-slide content">

 </div>
 <ul class="swiper-slide menu">
 <li ><a href="../index.html">首页</a></li>
 <li ><a href="../template/entertainment.html">康体娱乐</a></li>
 <li><a href="../template/meeting.html">会议会展</a></li>
 <li><a href="../template/wedding.html">婚庆宴会</a></li>
 <li><a href="../template/guestRoom.html">舒适客房</a></li>
 <li class="action"><a href="../template/food.html">餐饮美食</a></li>
 <li><a href="../template/work.html">商务办公</a></li>
 </ul>
 </div>
 </div>*/

/* <script src="../js/jquery-3.1.0.min.js"></script>
 <script src="../js/swiper-3.4.0.jquery.min.js"></script>
 <link rel="stylesheet" href="../css/swiper.css">
 <link rel="stylesheet" href="../css/style.css">
 <script src="../js/index.js"></script>*/

/*var url=window.location.search;
 var id=url.substr(url.indexOf("=")+1);
 var rDate=null;
 $.ajax({
 type:"get",
 url:"../json/guestDeluxRoom.json",
 async:true,
 success:function(data){
 rDate=data[id];
 var swiperTxt='';
 $(rDate.imgsrc).each(function(i,ele){
 swiperTxt+='<div class="swiper-slide">'+'<img src='+ele+'>'+'</div>';
 });
 $('section .swiper-wrapper').html(swiperTxt);
 $('section>h2').html(rDate.title);
 }
 });*/