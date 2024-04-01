function copyText(id) {
    var text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text).then(function () {
        alert("متن با موفقیت کپی شد")
    });
}