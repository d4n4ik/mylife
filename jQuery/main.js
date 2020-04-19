$(document).ready(function() {

// function of scrolling down after pressing on button
    function slowScroll(param) {
        let offset = 0;
        $('html, body').animate({
            scrollTop: $(param).offset().top - offset
        }, 500);
        return false;
    }

// Changing <p> and <a> styles in the class .main
    $("#par1,#par2").css({"fontFamily": "Impact,sans-serif", "fontStyle": "italic"});
    $("#fsttsk1,#fsttsk2").css({"fontWeight": "bold", "textDecoration": "none", "color": "darkcyan"});
    console.log('Main\'s links and paragraphs was changed with jQuery');

// Switch all elements to state 'disabled'
    $("form *").prop("disabled", true);

// adding emoji to start of links
    $("a").prepend("↖");
// changing attribute in order to open links in new blank
    $("a").attr("target", "_blank")
// adding function which change http protocol (to https protocol)
    $("a").each(function () {
        $(this).attr("href", function (index, value) {
            let protocol = value.substring(0, value.indexOf(':'));
            if (protocol === 'http') {
                let href = value.substring(value.indexOf(':'), value.length);
                return protocol + 's' + href;
            }
        });
    });

// adding button (right-up place at site) which cancel changes
// P1 (prepend emoji) and P2 (attr)
    $('body').append('<button id = "cancel">Cancel</button>');
    $("#cancel").click(function () {
        $("a").each(function () {
            $(this).text(function (index, text) {
                if (text.substr(0, 1) === '↖') {
                    return text.substring(1, text.length);
                }
            });
        });

        $("form *").prop("disabled", false); // all elements of form are disabled
    });

    // ЭФФЕКТЫ JQUERY
    $("#fadeOut").click(() => {
        $("#fadeOut").parent().siblings().children().fadeOut();
    });

    $("#fadeIn").click(() => {
        $("#fadeIn").parent().siblings().children().fadeIn();
    });

    $("#fadeTo").click(() => {
        $("#fadeTo").parent().siblings().children().fadeTo(1000, 0.4, "linear", () => alert('Fade To succeded!'));
    });

    $("#slideDown").click(() => {
        $("#slideDown").parent().siblings().children().slideDown();
    });

    $("#slideToggle").click(() => {
        $("#slideToggle").parent().siblings().children().slideToggle();
    });

    $("#toggle").click(() => {
        $("#toggle").parent().siblings().children().toggle();
    });
});

// AJAX Запросы в JQUERY
$("#ajax").click(() => {
    $.ajax({
        url: "https://inxaoc.github.io/example/ajax-1.html"
    }).done((e) => {
        let pageContent = document.createElement("div");
        pageContent.innerHTML = e;
        $("body").append(pageContent);
    });
});

$.ajax({
    url: "https://inxaoc.github.io/example/ajax.json"
}).done((e) => {
    let req = Object.assign({}, e);
    console.log(req);
    $("body").append(createList(req));
});


/*
1. Вызываем цикл
2. Если value - объект, то выводим key
	и далее начинаем перебирать его вложенные члены
3. Если value - не объект, то выводим value
*/

function createList(element) {
    let ul = document.createElement('ul');
    for (const props in element) {
        let li = document.createElement('li');
        if (typeof (element[props]) !== 'object') {
            li.innerText = element[props];
        } else {
            li.innerText = props;
            // добавляет вложенный список в li
            li.append(createList(element[props]));
        }
        ul.append(li);
    }
    return ul;
}
