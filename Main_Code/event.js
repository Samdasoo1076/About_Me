// jQuery 문법 수정
$(function () {
    // 버튼 클릭 이벤트 확인
    $("#java").click(function () {
        
        Swal.fire({
            icon: 'question',
            title: '이것을 왜 클릭해 보시는것이죠?',
            text: '다신 누르지 마십쇼.',
        });
    });

    $("#javascript").click(function () {
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "잘 찾으셨어요!",
            showConfirmButton: false,
            timer: 1500
          });
    });
});

