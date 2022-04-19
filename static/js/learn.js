$(document).ready(function() {

    if (window.location.pathname != "/learn/1" && window.location.pathname != "/learn/8") {
        const canvas = document.getElementById('drawing-board');
        const ctx = canvas.getContext('2d');
        const canvasOffsetX = canvas.offsetLeft;
        const canvasOffsetY = canvas.offsetTop;
        canvas.width = 500 - canvasOffsetX;
        canvas.height = 500 - canvasOffsetY;
        let isPainting = false;
        let lineWidth = 5;

        const draw = (e) => {
            if(!isPainting) {
                return;
            }
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';

            let rect = canvas.getBoundingClientRect();
            let mouseOffsetX = rect.left-10;
            let mouseOffsetY = rect.top;
            ctx.lineTo(e.clientX - canvasOffsetX - mouseOffsetX, e.clientY - mouseOffsetY);
            ctx.stroke();
        }

        canvas.addEventListener('mousedown', (e) => {
            isPainting = true;
        });

        canvas.addEventListener('mouseup', e => {
            isPainting = false;
            ctx.stroke();
            ctx.beginPath();
        });

        canvas.addEventListener('mousemove', draw);

        $("#clear").click(function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }

    // save_current_page(window.location.pathname)
    $("#learn-intro-next-btn").click(function() {
        window.location.href = "/learn/2";
    });

    $("#learn-lesson-next-btn").click(function() {
        window.location.href = "/learn/" + (parseInt($(this).attr("data-current-id")) + 1);
    });

    $("#learn-end-practice-btn").click(function() {
        window.location.href = "/learn/1";
    });

    $("#learn-end-next-btn").click(function() {
        window.location.href = "/quiz/1";
    });
})
