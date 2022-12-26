$(document).ready(function(){
    //지구이미지 웹요소(노드)찾아서 저장
    var $gigu = $("#gigu");
    //버튼에 이벤트 등록
   // 5초만에 left값 480px로 설정하는 것이 곧 마치 움직이는 애니메이션 형태
    $("#btnStart").click(function(){
        $gigu.animate({
            left : "480px"
        },50000);
    })
})

