var getEmail = document.getElementById('email')
var getPassword = document.getElementById('password')
var getPasswordCf = document.getElementById('password_confirmation')
var getInput = Array.from(document.querySelectorAll('input'))
var getSpan = Array.from(document.querySelectorAll('.form-message'))
var getSubmit = document.querySelector('.form-submit')

// console.log(getPasswordCf)
// getEmail.onchange = function () {
//     console.log(typeof getEmail.value)
// }

//show error
function showError (elementInput, elementSpan, message) {
    elementInput.classList.add('error')
    elementSpan.classList.add('textError')
    elementSpan.innerText = message
}
//show success
function showSucces (elementInput, elementSpan) {
    elementInput.classList.remove('error')
    elementSpan.classList.remove('textError')
    elementSpan.innerText = ''
}

//chặn mặc định nút button-submit
getSubmit.onclick = function(e) {
    e.preventDefault()
}

// kiểm tra số lượng kí tự nhập vào input
function checkQuality (elementsInput, elementsSpan) {
    for(var i = 0; i < elementsInput.length; i++) {
        // console.log(elementsInput[i].value.length)
        if(elementsInput[i].value.length < 3 && elementsInput[i].value.length > 0){
            showError(elementsInput[i], elementsSpan[i], 'Nhập tối thiểu 3 kí tự')
        }if(elementsInput[i].value.length > 2) {
            showSucces(elementsInput[i], elementsSpan[i])
        }
    }
}

// kiểm tra input trống
function checkEmpty (elementsInput, elementsSpan) {
    for(var i = 0; i < elementsInput.length; i++) {
        // console.log(elementsInput[i].value.length)
        if(elementsInput[i].value.length === 0){
            showError(elementsInput[i], elementsSpan[i], 'Không được để trống')
        }
    }
}

// kiểm tra Email
function checkEmail (elementEmail, elementSpan) {
    if(!elementEmail.value.includes('@gmail.com') && elementEmail.value != 0) {
        showError(elementEmail, elementSpan, 'Email không hợp lệ')
    }
}

//kiểm tra password giống nhau
function checkCfPassword (elementPassword, elementPasswordCf) {
    var lengthPass = elementPasswordCf.value.length
    if(elementPasswordCf.value !== elementPassword.value  && lengthPass >= 3) {
        showError(elementPassword, getSpan[2], 'Mật khẩu không khớp')
        //xóa 2 password
        elementPassword.value = elementPassword.innerText = ''
        elementPasswordCf.value = elementPasswordCf.innerText = ''
    }
}

//thực hiện click button  (điều kiện những hàm sau ko thỏa mãn nên sẽ ko thực hiện cùng ok)
function clickShow (btnSubmit) {
    btnSubmit.addEventListener("click", function() {
            checkEmpty(getInput, getSpan)
            checkQuality(getInput, getSpan)
            checkEmail(getEmail, getSpan[1])
            checkCfPassword(getPassword, getPasswordCf)
            
    })
}
clickShow(getSubmit)

