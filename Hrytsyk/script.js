const email = document.getElementById('email')
const tel = document.getElementById('tel')
const password = document.getElementById('password')
const form_form = document.getElementById('form_form')
const error = document.getElementById('error')
const light = document.getElementById('light')
const dark = document.getElementById('dark')
const header = document.getElementById('header')
const logo = document.getElementById('Logo')
const content = document.getElementById('content')
const table = document.getElementById('table')
const form = document.getElementById('form')
const footer = document.getElementById('footer')

dark.onclick = () => {
 	light.style.display = 'block'
 	dark.style.display = 'none'
 	header.style.background  = '#151515'
 	logo.style.backgroundImage = 'url(img/dws_logo.png)'
 	logo.style.backgroundSize = '140px 140px'
 	content.style.backgroundImage = 'url(img/theme1.jpg)'
 	table.style.background = '#151515'
 	form.style.backgroundImage = 'url(img/theme2.jpg)'
 	footer.style.background = '#121212'
 	// change_css('css/style.css', 0)
 }

light.onclick = () => {
 	light.style.display = 'none'
 	dark.style.display = 'block'
 	header.style.background  = '#006bb3'
 	logo.style.background = 'url(img/dws_logo_light_theme.png)'
 	logo.style.backgroundSize = '140px 140px'
 	content.style.backgroundImage = 'url(img/theme1_light.jpg)'
 	table.style.background = '#007acc'
 	form.style.backgroundImage = 'url(img/theme2_light.jpg)'
 	footer.style.background = '#006bb3'
 	// change_css('css_light/style.css', 0)
 }

// function change_css(css_file, css_link) {
//     var first_css = document.getElementsByTagName("link").item(css_link);
//     var second_css = document.createElement("link");
//     second_css.setAttribute("rel", "stylesheet");
//     second_css.setAttribute("type", "text/css");
//     second_css.setAttribute("href", css_file);
//     document.getElementsByTagName("head").item(0).replaceChild(second_css, first_css);
// }

form_form.addEventListener('submit', (e) =>{
	let messages = []
	if (email.value === '' || email.value == null){
		messages.push('Enter your email')
		error.style.opacity = 1
	}

	if (tel.value.length != 13){
		messages.push('Number must be + and 12 digits')
		error.style.opacity = 1
	}

	if (password.value.length <= 6){
		messages.push('Password cant be less than 6 characters')
		error.style.opacity = 1
	}

	if (messages.length > 0){
		e.preventDefault()
		error.innerText = messages.join(', ')
	}
} )  

let w='80px';
let h='40px';
document.querySelector('.dws-submit').onmouseenter = () =>{
document.querySelector('.dws-submit').style.width = '100px';
document.querySelector('.dws-submit').style.height = '50px';
}

document.querySelector('.dws-submit').onmouseout = () =>{
document.querySelector('.dws-submit').style.width = w;
document.querySelector('.dws-submit').style.height = h;
}

