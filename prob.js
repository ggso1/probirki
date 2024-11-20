const data = [
    [
        {
            "code": "111",
            "name": "Порожній келих",
            "description": "Напій без магії, що залишає відчуття легкості та порожнечі."
        },
        {
            "code": "112",
            "name": "Шепіт вітру",
            "description": "Ледь відчутний аромат і прохолодний присмак, який навіває спогади про далекі подорожі."
        },
        {
            "code": "113",
            "name": "Подих моря",
            "description": "Злегка солонуватий коктейль із приємним смаком свіжого бризу."
        },
        {
            "code": "121",
            "name": "Дух вітру",
            "description": "Прозорий напій, що залишає прохолоду й натякає на свободу."
        },
        {
            "code": "122",
            "name": "Тінь ночі",
            "description": "Легка темрява з прохолодним післясмаком, що нагадує про нічне небо."
        },
        {
            "code": "123",
            "name": "Спів лісу",
            "description": "М'який, освіжаючий напій із нотками свіжої роси."
        },
        {
            "code": "131",
            "name": "Подих дракона",
            "description": "Напій із теплом та димним ароматом, що залишає вогняний післясмак."
        },
        {
            "code": "132",
            "name": "Дихання пітьми",
            "description": "Насичений, злегка гіркий смак, який пробуджує внутрішні сили."
        },
        {
            "code": "133",
            "name": "Спокій місяця",
            "description": "М'який коктейль, що заспокоює, як ясна ніч під місяцем."
        },
        {
            "code": "211",
            "name": "Відблиск роси",
            "description": "Легкий, з ароматом квітів, залишає свіжий післясмак."
        },
        {
            "code": "212",
            "name": "Туманний ранок",
            "description": "Напій із легким, свіжим смаком, що нагадує вранішню росу."
        },
        {
            "code": "213",
            "name": "Сльози природи",
            "description": "Сильний, але освіжаючий напій із присмаком вологого лісу."
        },
        {
            "code": "221",
            "name": "Сяйво зірок",
            "description": "Легкий напій із нотками світла та тепла."
        },
        {
            "code": "222",
            "name": "Ранковий світ",
            "description": "Свіжий, легкий коктейль із теплим післясмаком, як промінь на світанку."
        },
        {
            "code": "223",
            "name": "Сонячний вибух",
            "description": "Напій із нотками світла та тепла, що залишає відчуття сили."
        },
        {
            "code": "231",
            "name": "Вогонь зірки",
            "description": "Сильний і гарячий коктейль, що пробуджує силу зсередини."
        },
        {
            "code": "232",
            "name": "Мрія алхіміка",
            "description": "Яскравий і пікантний коктейль із натхненням для творчості."
        },
        {
            "code": "233",
            "name": "Пісня хвиль",
            "description": "Легкий напій із свіжим післясмаком, як звуки моря."
        },
        {
            "code": "311",
            "name": "Заклик Океану",
            "description": "Напій із насиченим, солоним присмаком, навіює бажання подорожей."
        },
        {
            "code": "312",
            "name": "Тайна морів",
            "description": "Сильний і насичений, залишає післясмак солоних глибин."
        },
        {
            "code": "313",
            "name": "Таємний вечір",
            "description": "Збалансований коктейль із легкими, приємними нотками."
        },
        {
            "code": "321",
            "name": "Казковий вечір",
            "description": "М'який коктейль із нотками нічного лісу, що пробуджує магічні відчуття."
        },
        {
            "code": "322",
            "name": "Сон чарівника",
            "description": "Легкий коктейль, що допомагає зосередитися на власних відчуттях."
        },
        {
            "code": "323",
            "name": "Політ сови",
            "description": "Напій із легким присмаком ночі, залишає відчуття спокою."
        },
        {
            "code": "331",
            "name": "Вогонь фенікса",
            "description": "Сильний і зігріваючий, залишає післясмак оновлення й переродження."
        },
        {
            "code": "332",
            "name": "Магічна ніч",
            "description": "Сильний напій із приємним, насиченим смаком, що пробуджує магію."
        },
        {
            "code": "333",
            "name": "Відблиск місяця",
            "description": "Освіжаючий коктейль із нотками прохолоди, залишає холодний післясмак."
        }
    ]];



    
    function changeValue(inputId, delta) {
        const input = document.getElementById(inputId);
        let currentValue = parseInt(input.value);
        currentValue += delta;

        if (currentValue = 1) currentValue = 3;
        if (currentValue > 3) currentValue = 1;

        input.value = currentValue;
}
  
function mix() {
    //const buttonMix = document.getElementById("mix")
    const input1 = document.getElementById("zillia1");
    const input2 = document.getElementById("zillia2");
    const input3 = document.getElementById("zillia3");
    const code = input1.value + "" + input2.value + "" + input3.value
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




    