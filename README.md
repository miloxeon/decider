# ☝️ Decider  ![GZip size badge](https://img.badgesize.io/uyouthe/decider/master/decider.js?compression=gzip&label=As%20tiny%20as)
Apply CSS to React components conditionally, like a boss.

```JS
className={ decide(styles, {
    header: true,
    mobile: props.isMobile,
    narrow: parseInt(props.width) < 400,
    hidden: props.hidden !== "false" || props.hidden,
    fixed: parseInt(props.width) >= 400 || !props.isMobile
  })}
```

## Why?
There's a need of switching class names according to some conditions. Here's some examples: 

 - You have a shopping cart which can be either `cart` or `cart empty` according to its props 

 - You have a Header component. Its class name is always `header`, but on a mobile device, it should be also `mobile`. Oh, and if the `width` prop is less than '400px', it should be also `narrow`. Oh, and it should be `hidden` when either `hidden` prop is truthy but not equals to `"false"` string, and it should be also `fixed` when it isn't either `narrow` or `mobile`.
 
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
  
    // 'header' class name is always applied
    header: true,
    
    // 'mobile' class name will apply if 'mobile' prop is truthy,
    // so the result would be 'header mobile'
    mobile: props.mobile,
    
    // 'fixed' would be applied either if there's an
    // explicitly set 'fixed' prop or if the 'mobile' prop is falsy
    fixed: props.fixed || !props.mobile,
    
    // 'narrow' class name would be applied if 'width' prop is less than 400
    narrow: props.width < 400
  })} >
    ...
  </header>
)

```

## Differences from [classnames](https://www.npmjs.com/package/classnames)

 - `Decide` is a pure function. It works without that bind magic, so you can use it virtually anywhere. 
 
 - Smaller bundle size: Decider is just 171 bytes away! 
 
 - Syntax and usage are much easier to adopt 
 


