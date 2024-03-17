let isShowAgaint = false;

var inst = $("[data-remodal-id=modal]").remodal();
if (Cookies.get("confirm") !== "YES") {
  inst.open();
}

$(".JJ_option").on("click", () => {
  Cookies.set("confirm", "YES");
});

$(".option_deny input[type='checkbox']").change(function () {
  if ($(this).is(":checked")) {
    isShowAgaint = true;
  }
});

$(document).on("closed", ".remodal", function () {
  if (isShowAgaint) {
    Cookies.set("confirm", "YES");
  } else {
    Cookies.set("confirm", "YES", { expires: 600 });
  }
});
