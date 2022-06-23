// https://programadorbr.club.hotmart.com/lesson/qV73XWVlO3/canvas-retangulo

let screen = document.querySelector('#screen')
let screen2 = document.querySelector('#screen2')
let square = document.querySelector('#square')
document.body.style.backgroundColor = 'black'

let tr = screen.getContext('2d') // Line
let tt = screen.getContext('2d') // Rect
let pt = screen.getContext('2d') // Path
let cr = screen2.getContext('2d') // Circle (arco)



//Line
tr.moveTo(0,0);
tr.lineTo(250, 250)
tr.stroke()

//Rectangle
tt.rect(50, 100, 100, 200)//(pos X, pos Y, width, height)
tt.fillStyle = "blue"
tt.fill()

tt.strokeStyle = 'red'
tt.stroke()

tt.clearRect(100, 100, 30, 30)

//Path
pt.beginPath() //Starts a new line
pt.lineWidth = 4
pt.strokeStyle = 'red'

//pt.closePath() -> pt.fill()

//Circle

let x = 150 //pos
let y = 150 //pos
let raio = 70 // circle size
let anguloInicial = 0
let fim = 1.5 * Math.PI // 2 = complete circle

cr.beginPath()
cr.strokeStyle = 'red'
cr.fillStyle = 'blue'
cr.arc(x, y, raio, anguloInicial, fim)// x = distancia da borda, y = distancia pra cima
cr.fill()
cr.stroke()