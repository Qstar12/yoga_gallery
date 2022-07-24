const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    alert('Hello World!');
})

window.onload = () => {
    setTimeout(() => {
        alert('Thanks for viewing this page! To get started, click the "Get Started" button.');
    }, 1000);
}