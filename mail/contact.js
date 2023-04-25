$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            // Message sending
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var subject = document.getElementById("subject").value;
            var message = document.getElementById("message").value;

            // Construire l'URL du lien de messagerie pré-rempli
            var mailtoLink = "mailto:abelfrancoistech@gmail.com"
                           + "?subject=" + encodeURIComponent(subject)
                           + "&body=" + encodeURIComponent("Nom : " + name + "\n"+ message);
            // Ouvrir le lien de messagerie dans une nouvelle fenêtre
            window.open(mailtoLink);
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    // Valider automatiquement les champs du formulaire sur l'événement 'keyup'
    $("#name, #email, #subject, #message").on("keyup", function() {
        $("#contactForm input, #contactForm textarea").jqBootstrapValidation("validate");
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
