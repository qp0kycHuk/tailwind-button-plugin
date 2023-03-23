# Buttons Plugin for Tailwind CSS

## Установка

```bash
npm install @qpokychuk/tailwind-button-plugin --save
```


```js
// tailwind.config.js
{
  theme: {
    btnSize: {
      xs: '28px',
      sm: '32px',
      base: '42px',
      lg: '48px',
      xl: '56px',
      ['2xl']: '64px',
    }
  }
    
  plugins: [
    require('@qpokychuk/tailwind-button-plugin'),
  ],
}
```

## Установка цвета кнопки

Управляйте цветом кнопки с помощью утилит `btn-{color}`.

Если вам нужно использовать одноразовое значение `color`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.