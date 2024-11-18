const data = [
    {
        "code": "0 0 0",
        "name": "Порожній келих",
        "description": "Напій без магії, що залишає відчуття легкості та порожнечі."
    },
    {
        "code": "0 0 1",
        "name": "Шепіт вітру",
        "description": "Ледь відчутний аромат і прохолодний присмак, який навіває спогади про далекі подорожі."
    },
    {
        "code": "0 0 2",
        "name": "Подих моря",
        "description": "Злегка солонуватий коктейль із приємним смаком свіжого бризу."
    },
    {
        "code": "0 0 3",
        "name": "Дух вітру",
        "description": "Прозорий напій, що залишає прохолоду й натякає на свободу."
    },
    {
        "code": "0 1 0",
        "name": "Тінь ночі",
        "description": "Легка темрява з прохолодним післясмаком, що нагадує про нічне небо."
    },
    {
        "code": "0 1 1",
        "name": "Спів лісу",
        "description": "М'який, освіжаючий напій із нотками свіжої роси."
    },
    {
        "code": "0 1 2",
        "name": "Подих дракона",
        "description": "Напій із теплом та димним ароматом, що залишає вогняний післясмак."
    },
    {
        "code": "0 1 3",
        "name": "Дихання пітьми",
        "description": "Насичений, злегка гіркий смак, який пробуджує внутрішні сили."
    },
    {
        "code": "0 2 0",
        "name": "Спокій місяця",
        "description": "М'який коктейль, що заспокоює, як ясна ніч під місяцем."
    },
    {
        "code": "0 2 1",
        "name": "Відблиск роси",
        "description": "Легкий, з ароматом квітів, залишає свіжий післясмак."
    },
    {
        "code": "0 2 2",
        "name": "Туманний ранок",
        "description": "Напій із легким, свіжим смаком, що нагадує вранішню росу."
    },
    {
        "code": "0 2 3",
        "name": "Сльози природи",
        "description": "Сильний, але освіжаючий напій із присмаком вологого лісу."
    },
    {
        "code": "0 3 0",
        "name": "Плач русалки",
        "description": "Гіркий коктейль із солоним післясмаком, нагадує про морські глибини."
    },
    {
        "code": "0 3 1",
        "name": "Штормове око",
        "description": "Напій із сильним ароматом і легкою гіркотою, нагадує про морську бурю."
    },
    {
        "code": "0 3 2",
        "name": "Поклик хвиль",
        "description": "Сильний і солоний, як шум великої хвилі, пробуджує внутрішній спокій."
    },
    {
        "code": "0 3 3",
        "name": "Безодня океану",
        "description": "Насичений і важкий, як таємниці морських глибин."
    },
    {
        "code": "1 0 0",
        "name": "Привид світла",
        "description": "Легкий коктейль, майже непомітний, нагадує про промінь світла."
    },
    {
        "code": "1 0 1",
        "name": "Промінь світанку",
        "description": "Свіжий, легкий коктейль із теплим післясмаком, як ранкове сонце."
    },
    {
        "code": "1 0 2",
        "name": "Сонячний зайчик",
        "description": "Напій із нотками легкості й тепла, як промінь на обличчі."
    },
    {
        "code": "1 0 3",
        "name": "Зоряне сяйво",
        "description": "Свіжий напій із холодним присмаком і легкими нотками магії."
    },
    {
        "code": "1 1 0",
        "name": "Таємний вечір",
        "description": "Збалансований коктейль із легкими, приємними нотками."
    },
    {
        "code": "1 1 1",
        "name": "Сон чарівника",
        "description": "М'який напій, що допомагає зосередитися на власних відчуттях."
    },
    {
        "code": "1 1 2",
        "name": "Політ сови",
        "description": "Напій із легким присмаком ночі, залишає відчуття спокою."
    },
    {
        "code": "1 1 3",
        "name": "Вогонь фенікса",
        "description": "Сильний і зігріваючий, залишає післясмак оновлення й переродження."
    },
    {
        "code": "1 2 0",
        "name": "Квітка сутінків",
        "description": "М'який коктейль із приємним присмаком, навіює спогади про світанок."
    },
    {
        "code": "1 2 1",
        "name": "Серце місяця",
        "description": "Свіжий напій із легким, м'яким присмаком."
    },
    {
        "code": "1 2 2",
        "name": "Відблиск місяця",
        "description": "Освіжаючий коктейль із нотками прохолоди, залишає холодний післясмак."
    },
    {
        "code": "1 2 3",
        "name": "Магічна ніч",
        "description": "Сильний напій із приємним, насиченим смаком, що пробуджує магію."
    },
    {
        "code": "1 3 0",
        "name": "Мрія алхіміка",
        "description": "Яскравий і пікантний коктейль із натхненням для творчості."
    },
    {
        "code": "1 3 1",
        "name": "Пісня хвиль",
        "description": "Легкий напій із свіжим післясмаком, як звуки моря."
    },
    {
        "code": "1 3 2",
        "name": "Заклик Океану",
        "description": "Напій із насиченим, солоним присмаком, навіює бажання подорожей."
    },
    {
        "code": "1 3 3",
        "name": "Тайна морів",
        "description": "Сильний і насичений, залишає післясмак солоних глибин.",
        // "price": "25 $",
        // "img": "27.png",
    }
]


    
    function changeValue(inputId, delta) {
        const input = document.getElementById(inputId);
        let currentValue = parseInt(input.value);
        currentValue += delta;

        if (currentValue < 0) currentValue = 3;
        if (currentValue > 3) currentValue = 0;

        input.value = currentValue;
}
  
function mix() {
    //const buttonMix = document.getElementById("mix")
    const input1 = document.getElementById("zillia1");
    const input2 = document.getElementById("zillia2");
    const input3 = document.getElementById("zillia3");
    const code = input1.value + " " + input2.value + " " + input3.value
    console.log(code)
    choosecoctail(code)
}

function choosecoctail(code) {
    data.forEach((element) => {
        if (element.code == code) {
            console.log(element.name)
            console.log(element.description)
            document.getElementById("name").innerText = element.name
            document.getElementById("description").innerText = element.description
        }
    })

    
}




    