const emailInputHeader = document.getElementById('email_header')
const emailInputSubscribe = document.getElementById('email_subscribe')
const formHeader = document.getElementById('header_form')
const formSubscribe = document.getElementById('subscribe_form')
const errorMsgSpan = document.getElementById('error_msg_span')
const errorMsgSubscribe = document.getElementById('error_msg_subscribe')

console.log(svgItem)

formHeader.addEventListener('submit', function (event) {
    event.preventDefault()

    if (emailInputHeader.value === '') {
        errorMsgSpan.innerHTML = 'Email cannot be empty'
        emailInputHeader.classList.add('error_msg_input')
    } else if (emailInputHeader.value.indexOf("@") < 0) {
        errorMsgSpan.innerHTML = 'Please check your email'
    } else {
        alert('Email has been registered')
        emailInputHeader.value = ''
        errorMsgSpan.innerHTML = ''
        emailInputHeader.classList.remove('error_msg_input')
    }

})

formSubscribe.addEventListener('submit', function (event) {
    event.preventDefault()

    if (emailInputSubscribe.value === '') {
        errorMsgSubscribe.innerHTML = 'Email cannot be empty'
        emailInputSubscribe.classList.add('error_msg_input')
    } else if (emailInputSubscribe.value.indexOf("@") < 0) {
        errorMsgSubscribe.innerHTML = 'Please check your email'
    } else {
        alert('Email has been registered')
        emailInputSubscribe.value = ''
        errorMsgSubscribe.innerHTML = ''
        emailInputSubscribe.classList.remove('error_msg_input')
    }

})
