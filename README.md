# Deprecation notice
I parted ways with React. This package will not be updated to support future versions of React. It is just one function though, so it may still work for a very long time.

The original readme:

## 🤔 Decider 
Apply CSS to React components conditionally.

```JS
className={decide(styles, {
    header: true,
    mobile: props.isMobile,
    narrow: parseInt(props.width) < 400,
    hidden: (props.hidden !== "false" && Boolean(props.hidden)),
    fixed: parseInt(props.width) >= 400 || !props.isMobile
})}
```

## Why?
Sometimes you need to switch class names conditionally. Here are some examples: 
 - You have a shopping cart which can be either `cart` or `cart empty` according to its props;
 - You have a Header component. Its class name is always `header`, but on a mobile device, it should be also `mobile`. Oh, and if the `width` prop is less than '400px', it should also be `narrow`. Oh, and it should be `hidden` when either `hidden` prop is truthy but not equals to `"false"` string, and it should also be `fixed` when it is neither `narrow` nor `mobile`.

## Installation 
```
npm i --save miloxeon/decider
```

## Syntax
```JS
import decide from 'decider'

decide(styles, {
  className: condition
})
```

The first argument is your styles imported as a CSS module. The second is _decision matrix_, where keys are class names, and values are conditions that will be interpreted as boolean values. If it's `true`, the corresponding class name will be applied.

## Example
```JS
import decide from 'decider'
import styles from './header.module.css'

export default props => (
  <header className={ decide(styles, {
  
    // 'header' class name is always applied
    header: true,
    
    // 'mobile' class name will apply if 'mobile' prop is truthy, so the result would be 'header mobile'
    mobile: props.mobile,
    
    // 'fixed' would be applied either if there's an explicitly set 'fixed' prop, or if the 'mobile' prop is falsy
    fixed: props.fixed || !props.mobile,
    
    // 'narrow' class name would be applied if 'width' prop is less than 400
    narrow: props.width < 400
  })} >
    ...
  </header>
)

```

## Differences from [classnames](https://www.npmjs.com/package/classnames)
 - `decide` is a pure function. It works with CSS modules without bind magic, so you can use it virtually anywhere.
 - Smaller bundle size: Decider is around 176 bytes gzipped! 
 - Syntax was much easier for me to adopt.
 
