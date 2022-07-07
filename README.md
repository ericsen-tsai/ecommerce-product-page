# Ecommerce Product Page

## Table of contents

- [Ecommerce Product Page](#ecommerce-product-page)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Process](#process)
    - [Built with](#built-with)
    - [Note](#note)
      - [useClickOutsideToClose](#useclickoutsidetoclose)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgement](#acknowledgement)

## Overview

### Screenshot

![Preview](./design/desktop-preview.jpg)

### Links

- [Netlify](https://62c6a063c4129165ca94cf0b--euphonious-bublanina-d7100d.netlify.app)

## Process

### Built with

- Mobile First Development
- Sass
- React
- Typescript
- Context
- Vite

### Note

#### useClickOutsideToClose

> Custom hook which used for cart popup

```typescript
const useClickOutsideToClose = (
  ref: React.RefObject<HTMLElement>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!ref) return

  useEffect(() => {
    // it's easy to build out this hook in javascript
    // however, when it comes to specifying different event,
    // it would be an uneasy work for me, who used typescript for the first time.

    // Since this hooks directly access the node not React element, MouseEvent is used, not React.MouseEvent.
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement))
        setIsOpen(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}
```

### Continued development

- [ ] Save quantity in local storage.

## Author

- GitHub - [Ericsen Tsai](https://github.com/ericsen-tsai)

## Acknowledgement

- 💡 Andarist
