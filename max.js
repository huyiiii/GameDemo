function login() {
  var users = document.getElementById("user").value;
  var passWord = document.getElementById("pass").value;

  if (users === "admin" && passWord === "admin") {
    alert("bạn đã đăng nhập thành công");
    window.location = "page1.html";
  } else {
    alert("Đăng nhập thất bại");
  }
}
function sigin() {

  alert("Bạn đã đăng kí thành công!");
  window.location = "page.html";


}