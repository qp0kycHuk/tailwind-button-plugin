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
## Основа использования

Добавьте обязательный класс `btn`, затем добавьте дополнительные классы для настройки отображения

```html
<button class="btn">text here</button>
```

## Установка цвета кнопки

Управляйте цветом кнопки с помощью утилит `btn-{color}` (color - цвета вашей темы).

```html
<button class="btn btn-indigo ...">text here</button>
<button class="btn btn-blue ...">text here</button>
<button class="btn btn-red ...">text here</button>
```

Если вам нужно использовать одноразовое значение `color`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

```html
<button class="btn btn-[#B33771] ...">text here</button>
```

![Screenshot_1](https://user-images.githubusercontent.com/42573149/227128489-f560c61d-8605-4de8-9702-00ba7dfa8125.jpg)


## Установка варианта кнопки

Управляйте вариантом кнопки с помощью утилит `btn-{variant}`.
Доступны варианты: `fill` | `contur` | `light` | `whitebg` | `text`

```html
<button class="btn ...">text here</button>
<button class="btn btn-fill ...">text here</button>
<button class="btn btn-contur ...">text here</button>
<button class="btn btn-light ...">text here</button>
<button class="btn btn-whitebg ...">text here</button>
<button class="btn btn-text ...">text here</button>
```

![Screenshot_2](https://user-images.githubusercontent.com/42573149/227128753-f353f26e-7c29-4ac0-9713-1ba380f69f00.jpg)


## Установка размера кнопки

Управляйте размером кнопки с помощью утилит `btn-{btnSize}`.

```html
<button class="btn btn-xs ...">text here</button>
<button class="btn btn-sm ...">text here</button>
<button class="btn btn-base ...">text here</button> <!-- Вариант по умолчанию -->
<button class="btn btn-lg ...">text here</button>
<button class="btn btn-xl ...">text here</button>
<button class="btn btn-2xl ...">text here</button>
```

Если вам нужно использовать одноразовое значение `btnSize`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

```html
<button class="btn btn-[50px] ...">text here</button>
```

![Screenshot_6](https://user-images.githubusercontent.com/42573149/227129527-85410c6d-4cb7-49da-9ac2-87b8fe2391e1.jpg)


## Установка закругления кнопки

Управляйте закруглением кнопки с помощью утилит `rounded` из tailwind.

```html
<button class="btn ...">text here</button>
<button class="btn rounded ...">text here</button>
<button class="btn rounded-xl ...">text here</button>
<button class="btn rounded-full ...">text here</button>
```

![Screenshot_4](https://user-images.githubusercontent.com/42573149/227129042-f64b5b24-6956-4164-a9bc-f7a0703fca57.jpg)


## Установка тени кнопки

Управляйте тенью кнопки с помощью класса `btn-shadow` или с помощью утилит `shadow` из tailwind.

```html
<button class="btn btn-shadow ...">text here</button>
<button class="btn shadow-md hover:shadow-xl active:shadow-md ...">text here</button>
```

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
