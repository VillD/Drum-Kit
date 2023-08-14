const main = document.querySelector('main')
const selectImg = document.querySelectorAll('section a img')

let linksImg = [
  'icons/icon-github-pressed.svg',
  'icons/icon-codepen-pressed.svg',
  'icons/icon-ig-pressed.svg',
]

for (let i = 0; i < linksImg.length; i++) {
  selectImg[i].addEventListener('click', () => {
    selectImg[i].src = linksImg[i]
  })
}

const keyboard = [
  {
    key: 'A',
    info: 'Clap',
    keyCode: '65',
  },
  {
    key: 'S',
    info: 'Hihat',
    keyCode: '83',
  },
  {
    key: 'D',
    info: 'Kick',
    keyCode: '68',
  },
  {
    key: 'F',
    info: 'Openhat',
    keyCode: '70',
  },
  {
    key: 'H',
    info: 'Boom',
    keyCode: '72',
  },
  {
    key: 'J',
    info: 'Snare',
    keyCode: '74',
  },
  {
    key: 'K',
    info: 'Tom',
    keyCode: '75',
  },
  {
    key: 'L',
    info: 'Tink',
    keyCode: '76',
  },
]

for (let i = 0; i < keyboard.length; i++) {
  let key = keyboard[i].key
  let info = keyboard[i].info
  let keyCode = keyboard[i].keyCode

  let createDiv = document.createElement('div')
  let createP = document.createElement('p')
  let createSpan = document.createElement('span')

  createDiv.setAttribute('id', keyCode)

  createDiv.classList.add(
    'w-32',
    'h-32',
    'vowel',
    'bg-cosmic',
    'flex',
    'flex-col',
    'items-center',
    'py-2',
    'gap-3',
    'rounded-2xl',
    'shadow-button',
    'transition-shadow',
    'delay-75',
    'duration-75'
  )

  createP.classList.add('text-6xl', 'font-bold')
  createSpan.classList.add('text-2xl', 'info', 'font-medium', 'sound-letter')

  createP.innerText = key
  createSpan.innerText = info

  createDiv.appendChild(createP)
  createDiv.appendChild(createSpan)
  main.appendChild(createDiv)
}

const selectAudios = document.querySelectorAll('audio')
const selectDivs = document.querySelectorAll('main div')

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < selectAudios.length; i++) {
    let audio = selectAudios[i]
    let div = selectDivs[i]

    if (e.keyCode == div.id) {
      audio.play()
      audio.currentTime = 0

      div.classList.toggle('pressed-button')
      div.classList.toggle('shadow-button')
      div.classList.toggle('scale-90')
    }
  }
  /*
  selectAudios.forEach((audio) => {
    console.log(audio)
    if (e.keyCode == audio.id) {
      audio.play()
      audio.currentTime = 0
    } else {
      console.log('nada')
    }
  })
  */
})
