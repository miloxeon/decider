# ☝️ Decider
Apply CSS to React components conditionally.

## Why?
There's a need of switching class names according to some conditions. Here's some examples: 

 - You have a shopping cart which can be either `cart` or `cart empty` according to its props 

 - You have a header component which is always `header`, but sometimes it's `header fixed`, `header narrow` or even `header fixed narrow` 
 
 - You have an universal rules like a `mobile` class name should be applied to all of your components and you want to have the decision logic as a single piece of code imported by all of your components  
 
I bet you get the idea. This is what decider is for, and this package could help achieving that with a really tiny and meaningful way.

## Installation 
```
npm i --save uyouthe/decider
```

## Syntax
```JS
import decide from 'decider'

decide(styles, {
  className: condition
})
```

The first argument is your styles imported as a CSS module. The second is _decision matrix_, where keys are class names and values are conditions which'll be interpreted as either `true` or `false`. If it's `true`, the corresponding class name will be applied, otherwise it wouldn't.

## Example
```JS
import decide from 'decider'
import styles from './header.module.css'

export default props => (
  <header className={ decide(styles, {
    header: true,                 // 'header' class name is always applied
    mobile: props.mobile,         // 'mobile' class name will apply if 'mobile' prop is truthy,
                                  //          so the result would be 'header mobile'
    fixed: props.fixed || !props.mobile,  // 'fixed' would be applied either if there's an
                                          //  explicitly set 'fixed' prop or if the 'mobile' prop is falsy
    narrow: props.width < 400     // 'narrow' class name would be applied if 'width' prop is less than 400
  }} >
    ...
  </header>
)

```

