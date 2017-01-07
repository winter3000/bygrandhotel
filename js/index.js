/**
 * Created by hxsd on 2016/12/16.
 */
//自适应
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
//解析url
var url=window.location.search;
var id=url.substr(url.indexOf("=")+1);
var rDate=null;
//预订弹窗
function telComfirm(){
    $('.order').on('click',function(){
        $('.comfirm').show();
        $('.comfirm span').click(function(){$('.comfirm').hide();})
    })
}
//加载
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
    var swiper = new Swiper('.main .swiper-container', {
        pagination: '.main .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    //预订弹窗
    telComfirm()
});