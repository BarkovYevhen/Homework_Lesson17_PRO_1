$(document).ready(function () {
  const modal = $("#modal");
  const button = $("#modalButton");
  const close = $(".close");

  button.click(function () {
    modal.show();
  });

  close.click(function () {
    modal.hide();
  });

  $(window).click(function (event) {
    if (event.target == modal[0]) {
      modal.hide();
    }
  });
});
