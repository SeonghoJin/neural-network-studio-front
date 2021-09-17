/*체크박스 전체선택해제*/
function allCheckFunc(obj) {
		$("[name=ck]").prop("checked", $(obj).prop("checked") );
}

/* 체크박스 체크시 전체선택 체크 여부 */
function oneCheckFunc(obj)
{
	var allObj = $("[name=all_ck]");
	var objName = $(obj).attr("name");

	if( $(obj).prop("checked") )
	{
		checkBoxLength = $("[name="+ objName +"]").length;
		checkedLength = $("[name="+ objName +"]:checked").length;

		if( checkBoxLength == checkedLength ) {
			allObj.prop("checked", true);
		} else {
			allObj.prop("checked", false);
		}
	}
	else
	{
		allObj.prop("checked", false);
	}
}

$(function(){
	$("[name=all_ck]").click(function(){
		allCheckFunc( this );
	});
	$("[name=ck]").each(function(){
		$(this).click(function(){
			oneCheckFunc( $(this) );
		});
	});
});


/*햄버거 메뉴 ON 상태에서 PC사이즈로 돌아올시*/
$(window).resize(function (){
  // width값을 가져오기
  var width_size = window.outerWidth;
	
  if (width_size > 768) {
	$(".m-gnb, .m-gnb-bg").hide();
  }
})


$(function(){
	/*햄버거 메뉴*/
    $(".js-hamburger").click(function () {
        $(".m-gnb").animate({'right': 0}, 500, "easeOutExpo");
        $(".m-gnb, .m-gnb-bg").show();
    });
    $(".js-hamburger-close").click(function () {
        $(".m-gnb").animate({'right': "-100%"}, 500, "easeOutExpo");
        $(".m-gnb, .m-gnb-bg").hide();
    });
	
	
	/*탭*/
    $(".tab-content").hide();
	$(".tab-content:first").show();
    
    $(".click").click(function() {
        $(".click").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").stop().hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
	
	
	/*모달창*/
    $(".js-modal-open").click(function() {
        $(".js-modal").show();
    });
    $(".js-modal-close").click(function() {
        $(".js-modal").hide();
    });
	
	
   /*하위 메뉴*/
    $(".js-depth").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle("active");
    });
	
	
	$(".js-view").click(function() {
        $(this).toggleClass("active");
    });
	
	
	$(".js-more").click(function() {
        $(this).toggleClass("active");
        $(this).next().toggleClass("active");
    });
});