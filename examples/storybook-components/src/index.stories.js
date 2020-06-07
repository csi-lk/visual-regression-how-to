export default { title: 'Button' }

export const withText = () => '<button class="btn">Hello World</button>'

export const withEmoji = () => {
  const button = document.createElement('button')
  button.innerText = '😀 😎 👍 💯'
  button.style.cssText = 'border: 1px solid green;'
  return button
}

export const newThing = () => {
  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'I am an input...'
  input.style.cssText = 'border: 1px solid grey;'
  return input
}
