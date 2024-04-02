function copyText(id) {
    if (id === 'mail')
        var text = "mr.amirmohammad.mokhtari@gmail.com";
    else if (id === 'phone')
        var text = "09934344245";

    navigator.clipboard.writeText(text).then(function () {
        alert("متن با موفقیت کپی شد")
    });
}