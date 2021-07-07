export default { title: 'Button' }

export const withText = () => '<button class="btn">Hello World</button>'

export const withEmoji = () => {
  const button = document.createElement('button')
  button.innerText = '😀 😎 👍 💯'
  button.style.cssText = 'border: 1px solid green;'
  return button
}

export const withInput = () => {
  const input = document.createElement('input')
  input.style.cssText = 'border: 1px solid gray;'
  return input
}
