//https://api.ownthink.com/bot
const interface = 'https://api.ownthink.com/bot'
const ul = document.querySelector('.talk_list')
let userText = document.querySelector('.input_txt')
function intu(userTextVal) {

    $.get(interface, {
        spoken: userTextVal
    }, function ({ data: { info: { text } }, data }) {
        console.log(data);
        let li = `<li class="left_word ll"><img src="img/person01.png" /> <span>${text}</span></li>`
        ul.insertAdjacentHTML('beforeend', li)
        resetui()
    });
    // $.ajax({
    //     type: "GET",
    //     url: interface,
    //     data: {
    //         spoken: userTextVale
    //     },
    //     // dataType: "dataType",
    //     success: function (...response) {
    //         let data = { ...response }
    //         let newData = { ... { ...data[0] }.data.info }
    //         console.log(newData);
    //       
    //     }
    // });
}
function setData() {
    let userTextVal = userText.value
    if (userTextVal.length <= 0) {
        console.log(userTextVal);
        return
    } else {
        console.log(1);

        let li = `<li class="right_word"><img src="img/person02.png" style="margin:10px"/> <span>${userTextVal}</span></li>`
        ul.insertAdjacentHTML('beforeend', li)
        intu(userTextVal)
    }
    userText.value = '';
    resetui()
}
const btn = document.querySelector('.input_sub')
btn.onclick = function () {
    setData()
}

// btn.addEventListener('keyup', function (e) {

//     console.log(e.target.nodeName);
// })

document.addEventListener('keyup', function (e) {
    //获取键盘按下的那个键
    // console.log(e.keyCode);
    let userTextVal = userText.value
    if (e.keyCode == 13 && userTextVal.length > 0) {
        setData()
    }
})