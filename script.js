
const camera = document.getElementById("camera");

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        camera.srcObject = stream;
    })
    .catch(() => {
        alert("Não foi possível acessar a câmera.");
    });

function filtro(efeito) {
    camera.style.filter = efeito;
}
