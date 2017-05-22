window.onload=function () {
    var _header=document.querySelector(".header");
    var _nav=document.querySelector(".nav");
    var _backdrop=document.querySelector(".backdrop");
    var _navUl=document.querySelector(".nav>div>ul");
    var contentWarp=document.querySelector(".content-warp");
    var _AboutMe=document.querySelector(".AboutMe");
    var AboutMeContent=document.querySelector(".AboutMe-content");
    var _close=document.querySelector(".close");
    _backdrop.style.width=getComputedStyle(_navUl.children[0]).width;
    _backdrop.style.height=getComputedStyle(_navUl.children[0]).height;
    var _personalHeadShot=document.querySelector(".personal-headShot");
    var _personFunctioningUl=document.querySelector(".person-functioning>ul");
    var _personFunctioningUlH=_personFunctioningUl.offsetHeight-1;
    _personFunctioningUl.style.height=_personFunctioningUlH+"px";
    var personalHeadShotWarp=document.querySelector(".personal-headShot-warp");
    var articleRight=document.querySelector(".article-right");
    var scrollTopT=_header.offsetHeight+_nav.offsetHeight+10;
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(t>=scrollTopT){
        personalHeadShotWarp.style.top=t-90+"px";
        articleRight.style.top=t-90+"px"
    }
    var _navUlIndex=0;
    var _personalHeadShotKg=true;
    document.onscroll=function () {
        var t = document.documentElement.scrollTop||document.body.scrollTop;
        if(t>=scrollTopT){
            personalHeadShotWarp.style.top=t-(scrollTopT-20)+"px";
            articleRight.style.top=t-(scrollTopT-20)+"px"
        }else {
            personalHeadShotWarp.style.top=10+"px";
            articleRight.style.top=10+"px"
        }
    };
    onresize=function () {
        _backdrop.style.transition="";
        _backdrop.style.width=getComputedStyle(_navUl.children[0]).width;
        _backdrop.style.height=getComputedStyle(_navUl.children[0]).height;
    };
    for (var i=0;i<_navUl.children.length;i++){
        (function (i) {//导航
            _navUl.children[i].onmouseover=function () {
                _backdrop.style.transition="1s";
                for (var ii=0;ii<_navUl.children.length;ii++){
                    _navUl.children[ii].style.color="#000";
                }
                this.style.color="#FFF";
                _backdrop.style.left=(parseFloat(getComputedStyle(_navUl.children[0]).width)*i+i+1)+"px"
            };
            _navUl.children[i].onclick=function () {
                _navUlIndex=i;
            };
            _navUl.children[i].onmouseout=function () {
                if(_navUlIndex){
                    _backdrop.style.left=(parseFloat(getComputedStyle(_navUl.children[0]).width)*_navUlIndex+_navUlIndex+1)+"px";

                }else {
                    _backdrop.style.left="";
                }
                for (var ii=0;ii<_navUl.children.length;ii++){
                    if(ii==_navUlIndex){
                        _navUl.children[_navUlIndex].style.color="#FFF";
                        continue
                    }
                    _navUl.children[ii].style.color="#000";
                }
            }
        })(i)
    }
    _personalHeadShot.onclick=function () {//头像
        if(_personalHeadShotKg){
            _personalHeadShotKg=false;
            if (_personFunctioningUl.style.height=="0px"){
                _personFunctioningUl.style.display="block";
                setTimeout(function () {
                    _personFunctioningUl.style.height=_personFunctioningUlH+"px"
                },10);
            }else {
                _personFunctioningUl.style.height="0px";
                setTimeout(function () {
                    _personFunctioningUl.style.display="none";
                },1000);
            }
            setTimeout(function () {
                _personalHeadShotKg=true;
            },1000);
        }
    };
    _AboutMe.onclick=function () {//个人资料
        contentWarp.style.display="block";
        setTimeout(function () {
            AboutMeContent.style.width="600px";
            AboutMeContent.style.height="500px";
            AboutMeContent.style.left="calc(50% - 300px)";
            AboutMeContent.style.top="calc(50% - 250px)";
        },10);
    };
    _close.onclick=function () {
        AboutMeContent.style.width="";
        AboutMeContent.style.height="";
        AboutMeContent.style.left="";
        AboutMeContent.style.top="";
        setTimeout(function () {
            contentWarp.style.display="none";
        },1000)
    }
};