define(["jquery","sticky","modernizr","heroSlideshow","lazyloading","slots"],function(e){"use strict";var i=e(window);return{start:function(){var s,o,a,t,l,n,r,h,d,c,g,p,m,v,u,b,f=function(){var e=h.find("i");e.toggleClass("icon-cancel").toggleClass("toggle-caption-icon"),e.hasClass("icon-cancel")?(a.addClass("m-visible"),u.hide()):(a.removeClass("m-visible"),u.show())},C=function(){var e=i.width();r.css("visibility","visible"),e<=767?(d.css("position","").data("disableSticky",!0),e<=678?o.height(""):o.height(r.outerHeight())):(o.height(""),d.data("disableSticky",!1)),a.css("visibility","visible")},w=function(s,o){(g.size()||(g=e(".slideshow-prev > i, .slideshow-next > i"),g.size()))&&(o>s?"fixed"==d.css("position")&&(b.hasClass("thin")?g.css({top:s/2+i.scrollTop()-25}):g.css({top:s/2+i.scrollTop()-5})):g.css({top:o/2-5}))},y=null,k=function(e,i){if(n){var s="fixed",o="",a=o,l=o,h=o,c=!1;i>e&&d.css("position")==s?(o="auto",d.hasClass("stuck")&&"auto"!=d.get(0).style.top||(a=r.outerHeight()),a="%"==n.bpu?+a+e*n.bp/100-t.outerHeight()/2:+a+n.bp,l=t.parent().offset().left+32,t.hasClass("right")?(h=l,l=""):t.hasClass("center")&&(h="",l="")):(s="absolute",o="%"==n.bpu?e*(100-n.bp)/100-t.outerHeight()/2+r.outerHeight():i-n.bp-t.outerHeight());var g={position:s,top:o,right:h,bottom:a,left:l};y!==JSON.stringify(g)&&(c=!0,y=JSON.stringify(g)),c&&t.css(g)}},z=function(){window.picturefill();var s=o.find("img.lazyhero");s.lazyload({effect:"fadeIn",load:function(){o.removeClass("hero-loading"),s.removeClass("lazyhero")}}),o.heroSlideshow({onShow:function(){var s=this.imgs[this.index],o=e(s).data();o&&(m.html(o.headline?o.headline:""),o.headlinePos&&"absolute"==o.headlinePos?m.parent().addClass("homepage-hero-headline-abs"):m.parent().removeClass("homepage-hero-headline-abs"),v.empty(),o.headlineMobile?v.html(o.headlineMobile).show():v.hide()),n=l.data("settings"),n&&(t.removeClass("right").removeClass("left").removeClass("center").addClass(n.pos),h.find("i").css("background-color","rgba(0,0,0,"+n.mto+")"),n.mhide?(h.addClass("mobile-hidden"),a.addClass("mobile-hidden"),a.removeClass("m-visible")):(h.removeClass("mobile-hidden"),a.removeClass("mobile-hidden"),h.find("i").hasClass("icon-cancel")&&a.addClass("m-visible")),n.hmv?p.addClass("m-visible"):p.removeClass("m-visible")),i.trigger("scroll.homepage")}})};i.off(".homepage"),e(function(){s=e(".contents-wrapper"),o=e("div.homepage-hero-b",s),a=e(".homepage-copyright-wrapper",s),t=e(".homepage-copyright-inner",a),l=e(".homepage-copyright",t),n=l.data("settings"),p=e(".homepage-hero-headline-wrapper",o),m=e(".homepage-hero-headline",o),v=e(".homepage-hero-headline-mobile",o.parent()),r=e(".homepage-hero-bar",s),h=e(".toggle-caption",s),c=e(".logo").not(".logo-hidden"),d=e(".homepage-bar-wrapper",s),g=e(".slideshow-prev > i, .slideshow-next > i",s),u=e(".homepage-hero-paging-wrapper",s),b=e("#main-header");d.stick({verticalTopLimit:450}),h.off("click").on("click",function(e){e.preventDefault(),f()}).css("visibility","visible").addClass("mobile-hidden"),f(),u.css("visibility","visible"),i.on("resize.homepage",function(){C(),i.trigger("scroll.homepage")}).on("scroll.homepage",function(){var e,s=o.outerHeight();i.scrollTop()>s||(e=i.height()-64-window.cookieMsg,i.width()>678&&(d.hasClass("stuck")&&"auto"!=d.get(0).style.top||(e=+e-r.outerHeight()),d.hasClass("stuck")?d.css({paddingBottom:window.cookieMsg}):d.css({paddingBottom:""}),s=+s-r.outerHeight()),k(e,s),w(e,s))}).trigger("resize.homepage");var y=setInterval(function(){"complete"===document.readyState&&(z(),clearInterval(y))},10)})}}});