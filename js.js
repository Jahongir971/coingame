const buttons = document.querySelectorAll('button');
        const input = document.querySelector('#input');
        // forEach==> massiv metodi. massivga qo‘shilgan har bir elementni ko‘rib chiqadi va har bir element uchun belgilangan amallarni bajaradi.
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const value = button.innerText;
                
                if (value === 'C') {
                    input.value = '';  // Ekranni tozalash yaniy inputdaga barcha yozuvlarni o'chiradi
                } else if (value === '=') {
                    // Matematik ifodani hisoblash
                    const result = input.value;
                    // Oddiy tarzda ifoda tekshirish va hisoblash
                    if (result) {
                        input.value = eval(result);  // matematik ifodani hisoblaydi
                    }
                } else {
                    input.value += value;  // Tugmalarni ekraningga qo‘shish
                }
            });
        });