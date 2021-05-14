function sendMAil(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value
    };
    emailjs.send('service_fdy19tv', 'template_lpnhd71', tempParams).then(function (res) {
        console.log("succes", res.status);
        alert("Thank you for contacting me, I´ll repond ASAP")
    })
}