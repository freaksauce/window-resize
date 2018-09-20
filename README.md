# window-resize

Optimised window resize function using `requestAnimationFrame`

## Installation

```
npm i window-resize
```

## Usage

```
import windowResize from 'window-resize'

function myOnResize() {
  console.log('on resize called')
}

windowResize.add(() => {
  myOnResize()
})
```

[![Donate with Bitcoin](https://en.cryptobadges.io/badge/big/15H4Wbpmqa6rp8wLRP2atWVhfemUhKjHbn)](https://en.cryptobadges.io/donate/15H4Wbpmqa6rp8wLRP2atWVhfemUhKjHbn)