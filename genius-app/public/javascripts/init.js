$(document)
    .ready(function() {
        let nav = container.navigoRouter;
        nav.init();

        $("#search-btn").on("click", function() {
            let searchVal = $("#search-field").val();
            if (searchVal) {
                let redirectUrl = "#/listing/name=" + searchVal;
                window.location = redirectUrl;
            }
        });
    });

$body = $("body");

$(document).on({
    ajaxStart: () => {
        $body.addClass("loading");
    },
    ajaxStop: () => {
        $body.removeClass("loading");
    }
})