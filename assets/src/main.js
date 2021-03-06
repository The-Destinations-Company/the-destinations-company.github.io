// const swup = new Swup(); // only this line when included with script tag


$(function () {
    console.log("document ready")

    //Observer for starting and stopping use case ucvideos when they come into and goe out of view
    const observer = new IntersectionObserver(callback, {threshold: 0.8});

    //Get all videos on a page
    const videos = document.getElementsByTagName("video")

    for (let item of videos) {
        observer.observe(item)
    }


    //console.log($(".use-case-figure-group").find(">:first-child"))

    if ($(".use-case-container").css("display") !== "none") {
        try {
            const firstFigure = $(".use-case-figure-group").find(">:first-child")

            firstFigure.addClass("active")
            firstFigure.children().addClass("active")

            const video = firstFigure.find(">:first-child").get(0).play()
            const firstSelector = $(".use-case-selector-group").find(">:first-child")
            firstSelector.addClass("active")

        } catch (e) {
            console.log("no use case")
        }
    } else {
        console.log("use case hidden")
    }


    // console.log("test")
    // video.load()
    //
    // video.getAttribute("src")
    //
    // fetchVideoAndPlay(video, video.getAttribute("src"))
    //
    //

// TODO: add active to all use cases


    $(".use-case-selector").on("click", function () {

        if (!$(this).hasClass("active")) {
            $(this).addClass("active")

            $(this).siblings().removeClass("active")

            const index = $(this).index();
            // console.log(index)

            const figGroup = $(this).parent().parent().find(".use-case-figure-group")
            //console.log(figGroup)

            //activeFig is the current selected figure
            const activeFig = $(figGroup).children().get(index)
            // console.log(activeFig)


            $(activeFig).addClass("active")
            $(activeFig).siblings().removeClass("active")


            $(activeFig).children().addClass("active")
            $(activeFig).siblings().children().removeClass("active")

            $(activeFig).find(">:first-child").get(0).currentTime = 0
            $(activeFig).find(">:first-child").get(0).play()
            $(activeFig).siblings().find(">:first-child").get(0).pause()


        }
    })

    $('.use-case-video').on('ended', function () {
        const index = $(this).parent().index();
        console.log(index);
        //console.log($(this).parent());

        const figGroup = $(this).parent().parent()
        // console.log(figGroup)

        const length = figGroup.children().length;
        // console.log(length);

        //activeFig is the next figure to play
        const activeFig = $(figGroup).children().get(mod(index + 1, length))
        // console.log(activeFig)


        $(activeFig).addClass("active")
        $(activeFig).siblings().removeClass("active")


        $(activeFig).children().addClass("active")
        $(activeFig).siblings().children().removeClass("active")

        $(activeFig).find(">:first-child").get(0).currentTime = 0
        $(activeFig).find(">:first-child").get(0).play()
        $(activeFig).siblings().find(">:first-child").get(0).pause()


        const selectorGroup = $(figGroup).parent().find(".use-case-selector-group")

        // console.log(selectorGroup)
        // console.log($(selectorGroup).children())
        // console.log(mod(index + 1, length))


        $(selectorGroup).children().removeClass("active")
        $(selectorGroup).children().eq(mod(index + 1, length)).addClass("active")


    });


    //Wrap tabNum to support loop
    function mod(_ucIndex, ucLength) {
        // console.log(_tabNum % 5)
        return _ucIndex % ucLength
    }


    function findRootFromClick(_elem) {

    }

    function findRootFromEnd(_elem) {

    }

    function updateUseCase(_index) {

    }


    function callback(entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0.8) {
                entry.target.play()
            } else if (entry.intersectionRatio < 0.8) {
                entry.target.pause()
            }
        })
    }

    function fetchVideoAndPlay(video, videoURL) {
        console.log(video)
        console.log(videoURL)

        fetch(videoURL)
            .then(response => response.blob())
            .then(blob => {
                video.srcObject = blob;
                return video.play();
            })
            .then(_ => {
                // Video playback started ;)
            })
            .catch(e => {
                // Video playback failed ;(
            })
    }

})

function decode(a) {
    // ROT13 : a Caesar cipher
    // letter -> letter' such that code(letter') = (code(letter) + 13) modulo 26
    return a.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
};

function openMailer(element) {
    console.log(element.getAttribute("data-address").toString())
    var y = decode(element.getAttribute("data-address"));
    element.setAttribute("href", "mailto:" + y);
    element.setAttribute("onclick", "");
};

// function hide(elem) {
//     // console.log(elem)
//     elem.classList.toggle("hidden")
//     if (localStorage.getItem("devBoxHidden") === "true") {
//         localStorage.setItem("devBoxHidden", "false")
//     } else {
//         localStorage.setItem("devBoxHidden", "true")
//     }
//
//     console.log("toggled")
// }
//
// function setup(elem) {
//     console.log("setup")
//     if (localStorage.getItem("devBoxHidden") === "true") {
//         document.getElementById("dev-box").classList.add("hidden")
//     }
// }

function toggleChat() {
    document.getElementById("popup").classList.toggle("show")
    document.getElementsByTagName("body")[0].classList.toggle("popup-open")
    document.getElementById("popup-bg").classList.toggle("showbg")
}

function closeChat() {
    document.getElementById("popup").classList.remove("show")
    document.getElementById("submit").disabled = true
    document.getElementById("privacy-check").checked = false
    document.getElementsByTagName("body")[0].classList.remove("popup-open")
    document.getElementById("popup-bg").classList.remove("showbg")
    document.getElementById("response-wrapper").classList.remove("response")
}

function privacyCheck(e) {
    console.log(e.checked)
    document.getElementById("submit").disabled = !e.checked;
}

let popupObserver
let mql = window.matchMedia('(max-width: 850px)');
//TODO: disable to permanently show popup
if (!mql.matches) {
    popupObserver = new IntersectionObserver(handleObserver, {threshold: 0.5});

const popup = document.getElementById("popup")

if (popup) {
    console.log(popup)
    popupObserver.observe(document.getElementById("popup"))
}

function handleObserver() {
    if (window.innerWidth > 850) {
        closeChat()
    }
}
}

// window.addEventListener('resize', (e) => {
//     console.log(e)
//     if (e.currentTarget.innerWidth > 850) {
//         console.log("resize")
//         popupObserver.disable()
//     }
// });

function handleScroll(entry) {
    console.log("test")
    closeChat()
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    switch (event.code) {
        case "Escape":
            let popupOpen = document.getElementById("popup").classList.contains("show")
            if (!popupOpen) {
                break;
            } else {
                closeChat()
            }
            break;
    }
})

const popupBg = document.getElementById("popup-bg")

if (popupBg) {
    popupBg.addEventListener("click", () => {
        closeChat()
    })
}


// HAMBURGER
let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    } else {
        hamburger.classList.add('open');
        nav.classList.add('open');
    }
});

let message = null;

function submitForm() {
    handleLoadingSpinner()

    data = $('#message-form').serialize();
    console.log(data)
    $.ajax({
        url: "php/message-send.php",
        type: 'POST',
        data: data,
        async: true,
        dataType: 'html',
        success: (e) => {
            window.setTimeout(() => {
                sendSuccess(e)
            }, 1500)
        },
        error: (e) => {
            window.setTimeout(() => {
                sendFail(e)
            }, 1500)
        }
    });
}

function handleLoadingSpinner() {
    document.getElementById("submit").classList.toggle("show-load")

}

function sendSuccess(msg) {
    console.log("message sent")
    console.log(msg.statusText)
    document.getElementById("submit").classList.toggle("spinner-fade-out")
    document.getElementById("submit").classList.toggle("send-success")
    // $('#response-field').html(msg)
    closeChat()
    window.setTimeout(() => {
        showSuccessNotification()
    }, 800)

}

function sendFail(msg) {
    console.log("message fail")
    console.log(msg.statusText)
    document.getElementById("submit").classList.toggle("spinner-fade-out")
    document.getElementById("submit").classList.toggle("send-fail")
    // $('#response-field').html("Something went wrong");
    document.getElementById("response-wrapper").classList.add("response")

    let fail = true
    window.setTimeout(() => {
        removeSpinner(fail)
    }, 500)
}

function removeSpinner(fail) {
    document.getElementById("submit").classList.remove("show-load")
    document.getElementById("submit").classList.remove("spinner-fade-out")
    // document.getElementById("response-wrapper").classList.remove("response")
    if (fail) {
        document.getElementById("submit").classList.remove("send-fail")
    } else {
        document.getElementById("submit").classList.remove("send-success")
    }
}

function closeErrorMessage() {
    document.getElementById("response-wrapper").classList.remove("response")
}

function showSuccessNotification() {
    document.getElementById("popup-success-notification").classList.toggle("popup-success-notification-show")
    window.setTimeout(() => {
        document.getElementById("popup-success-notification").classList.toggle("popup-success-notification-show")
    }, 2500)
}
