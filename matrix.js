const canvas = document.getElementById("neo");
const ctx = canvas.getContext("2d");
const w = canvas.width = document.body.offsetHeight;
const h = canvas.height = document.body.offsetHeight;
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const pos_y = Array(cols).fill(0);

function matrix () {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#0f0";
    ctx.font = "15pt monospace";
    
    pos_y.forEach((y,ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) pos_y[ind] = 0;
        else pos_y[ind] = y + 25;
    });
}
setInterval(matrix, 50);