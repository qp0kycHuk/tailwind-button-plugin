# Buttons Plugin for Tailwind CSS

Предоставляет классы для создания кнопок, включая эффекты при наведении, фокусе, клике

## Установка

```bash
npm install @qpokychuk/tailwind-button-plugin --save
```

```js
// tailwind.config.js
{    
  plugins: [
    require('@qpokychuk/tailwind-button-plugin'),
  ],
}
```

## Установка цвета кнопки

Управляйте цветом кнопки с помощью утилит `btn-{color}` (color - цвета вашей темы).

Если вам нужно использовать одноразовое значение `color`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

![Screenshot_1](https://user-images.githubusercontent.com/42573149/227128489-f560c61d-8605-4de8-9702-00ba7dfa8125.jpg)


## Установка варианта кнопки

Управляйте вариантом кнопки с помощью утилит `btn-{variant}`.
Доступны варианты: `fill` | `contur` | `light` | `whitebg` | `text`

![Screenshot_2](https://user-images.githubusercontent.com/42573149/227128753-f353f26e-7c29-4ac0-9713-1ba380f69f00.jpg)


## Установка размера кнопки

Управляйте размером кнопки с помощью утилит `btn-{btnSize}`.

Если вам нужно использовать одноразовое значение `btnSize`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

![Screenshot_6](https://user-images.githubusercontent.com/42573149/227129527-85410c6d-4cb7-49da-9ac2-87b8fe2391e1.jpg)


## Установка закругления кнопки

Управляйте закруглением кнопки с помощью утилит `rounded` из tailwind.

![Screenshot_4](https://user-images.githubusercontent.com/42573149/227129042-f64b5b24-6956-4164-a9bc-f7a0703fca57.jpg)


## Установка тени кнопки

Управляйте закруглением кнопки с помощью класса `btn-shadow` или с помощью утилит `shadow` из tailwind.

![Screenshot_5](https://user-images.githubusercontent.com/42573149/227129226-e3b069c8-4699-42d8-bb52-9ee39b32e115.jpg)


## Настройка вашей темы

По умолчанию плагин предоставляет размеры кнопок, вы можете их расширить

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
}
```
