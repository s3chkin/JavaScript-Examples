let wish1 = "На сянка на чардака, почивка теб те чака.";
let wish2 = "Любовта на теб се пада и знай че много ти приляга.";
let wish3 = "От любов ще си сразен, като гръм през ясен ден.";
let wish4 = "Ще се сбъдне твоята мания, да си душа на цялата компания.";
let wish5 = "Много щастие и пари, всичко друго ще се нареди.";
let wish6 = "Нови върхове ще покориш, пада ти се бизнес печеливш!";
let wish7 = "Знай, че предстои ти повишение, което заслужаваш без съмнение.";
let wish8 = "Чадърът наопаки си обърни, за теб от утре ще валят пари!";
let wish9 = "Силна воля и късмет ще те водят все напред!";
let wish10 = "Щъркелите литнаха на юг, но бебе ще заплаче тук!";
let wish11 = "Ти ще станеш програмист, без да имаш нужда от химикал и лист!";

function shake() {

    var messages = [wish1, wish2, wish3, wish4, wish5, wish6, wish7, wish8, wish9, wish10, wish11];

    var i = messages.length;
    var s = Math.floor(Math.random() * i);

    document.getElementById("result")
        .innerHTML = ' ' + messages[s] + ' ';
}