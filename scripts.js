document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navHeight = document.querySelector('.navigation').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        
        let weItemShow;
let weImageNumber;
let screenWidth = window.innerWidth;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.we-item').forEach(function(item) {
        let imgSrc = item.getAttribute('data-img-src');
        item.style.backgroundImage = `url(${imgSrc})`;
    });

    if (screenWidth > 768) {
        weImageNumber = document.querySelectorAll('.we-item').length;
        weItemShow = 100 / weImageNumber;
        document.querySelectorAll('.we-item').forEach(function(item) {
            item.style.width = `${weItemShow}%`;
        });
    }
});

if (screenWidth > 768) {
    document.querySelectorAll('.we-item').forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            let weSmallImgWidth = 50 / (weImageNumber - 1);
            let weIsHovered = true;

            item.style.width = '50%';
            document.querySelectorAll('.we-item').forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.style.width = `${weSmallImgWidth}%`;
                }
            });

            setTimeout(() => {
                if (weIsHovered) {
                    item.querySelectorAll('.we-image-item-header, .we-image-item-text, .we-button').forEach(function(child) {
                        child.style.display = 'block';
                        child.style.opacity = 0;
                        child.style.marginLeft = '-50px';
                        child.style.width = '80%';
                        child.style.textAlign = 'center';

                        child.animate([
                            { opacity: 0, marginLeft: '-50px' },
                            { opacity: 1, marginLeft: '0' }
                        ], { duration: 600, fill: 'forwards' });
                    });
                }
            }, 300);

            item.addEventListener('mouseleave', function() {
                weIsHovered = false;
            });
        });

        item.addEventListener('mouseleave', function() {
            document.querySelectorAll('.we-item').forEach(function(resetItem) {
                resetItem.style.width = `${weItemShow}%`;
            });

            item.querySelectorAll('.we-image-item-header, .we-image-item-text, .we-button').forEach(function(child) {
                child.style.display = 'none';
            });
        });
    });
}

