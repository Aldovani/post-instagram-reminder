const View = {
  render({minutes,seconds}) {
    document.body.innerHTML =`
    
  <p>Próximo Post:</p>
  <span>${minutes}:${seconds}</span>

    `;
  }
}

export {View}