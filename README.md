# window-resize

Optimised window resize function using `requestAnimationFrame`.

Since resize events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. Instead, it is recommended to throttle the event using requestAnimationFrame. 

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

// to remove the resize listener call .clear()
windowResize.clear()
```
