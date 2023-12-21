let selected = [];

document.addEventListener("DOMContentLoaded", function() {
    const heroImages = document.querySelectorAll('.hero');
    const selectorImg = document.getElementById('selector-img');
    const herosText = document.getElementById('heros_text');
    const selectedHeroImgs = document.querySelectorAll('.selected-hero');
    let clickCount = 0;

    heroImages.forEach(image => {
        image.addEventListener('click', function() {
           
            const id = this.id;
            for (let i = 0; i < selected.length; i++) {
                const element = selected[i];
                
                if (element == id) {
                    return; // 终止点击事件的执行
                }
            }
            selected.push(id);
            clickCount++;
            if (clickCount > selectedHeroImgs.length) {
                return; // 终止点击事件的执行
            }
            const selectedHeroImg = selectedHeroImgs[clickCount - 1];
            selectedHeroImg.src = this.src;
            selectedHeroImg.style.display = 'block';
            selectedHeroImg.style.left = `${selectorImg.offsetLeft + 10+104*(clickCount-1)}px`;
            herosText.textContent = selected.join(' ');

            
        });
    });

    // 监听窗口大小改变事件，更新 selected-hero-img 的 left 值以适应居中
    window.addEventListener('resize', function() {
        // selectedHeroImgs.forEach(selectedHeroImg => {
        //     clickCount=1;
        //     selectedHeroImg.style.left = `${selectorImg.offsetLeft  + 10+104*(clickCount-1)}px`;
        // });
         location.reload(); // 刷新页面
    });

    // 初始化时设置 selected-hero-img 的初始 left 值
    selectedHeroImgs.forEach(selectedHeroImg => {
        selectedHeroImg.style.left = `${selectorImg.offsetLeft}px`;
    });
});