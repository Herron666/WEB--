function validate() {

    let name = document.getElementsByName("dd")[0].value;
    if (!isNameValid(name)){
        document.getElementsByClassName("error")[0].innerText = "Не формат:ПІБ";
    } else{
        document.getElementsByClassName("error")[0].innerText = "";
    }
    let sex = document.getElementsByName("sex")[0].value;
    if (!isNameValid(sex)){
        document.getElementsByClassName("error")[1].innerText = "Не формат:ПІБ";
    } else{
        document.getElementsByClassName("error")[1].innerText = "";
    }}
function isNameValid(name){
    return /^[А-Я]{1}.[а-я]+\s[А-Я]{1}.[а-я]+\s[А-Я]{1}.[а-я]+$/.test(name);
}
function isNameValid(sex){
    return /^[чж].$/.test(sex);
}