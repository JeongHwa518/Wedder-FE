/* 모달창 */
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".modal-close-btn");
    const modalOn = document.querySelector("#icon");

    modalOn.addEventListener("click", function() {
        modal.classList.add("show");
    });

    closeBtn.addEventListener("click", function() {
        modal.classList.remove("show");
    });

    /* 삭제 모달창 */
    const modalOn2 = document.querySelector(".storage-delete");
    const modal2 = document.querySelector(".modal2");
    const closeBtn2 = document.querySelector(".cancel-btn");

    modalOn2.addEventListener("click", function() {
        modal2.classList.add("show2");

    closeBtn2.addEventListener("click", function() {
        modal2.classList.remove("show2")

    }) 

    /* 외부 클릭 시 모달창 닫기 */
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
        if (event.target === modal2) {
            modal2.classList.remove("show2");
        }
    });
  });
});
