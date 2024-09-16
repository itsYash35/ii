const noButton = document.querySelector('.no-btn');

noButton.addEventListener('mouseover', function() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noButton.getBoundingClientRect();
    
    let newTop = Math.random() * (window.innerHeight - noBtnRect.height);
    let newLeft = Math.random() * (window.innerWidth - noBtnRect.width);

    noButton.style.top = `${newTop}px`;
    noButton.style.left = `${newLeft}px`;
});
