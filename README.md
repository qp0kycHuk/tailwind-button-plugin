# Buttons Plugin for Tailwind CSS

Предоставляет классы для создания кнопок, включая эффекты при наведении, фокусе, клике

## Установка

```bash
npm install @qpokychuk/tailwind-button-plugin --save-dev
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
Доступны варианты: `fill` | `contur` | `light` | `text`

```html
<button class="btn ...">text here</button>
<button class="btn btn-fill ...">text here</button>
<button class="btn btn-contur ...">text here</button>
<button class="btn btn-light ...">text here</button>
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

Управляйте тенью кнопки с помощью утилит `shadow` из tailwind.

```html
<button class="btn shadow-md hover:shadow-xl active:shadow-md ...">text here</button>
```

![Screenshot_5](https://user-images.githubusercontent.com/42573149/227129226-e3b069c8-4699-42d8-bb52-9ee39b32e115.jpg)

## Target selector

Используйте Target selector чтобы эффекты наведения, фокуса, и клика срабатывали на кнопке при наведении, фокусе, и клике на родительский элемент

```html
<a class="absolute inset-0 flex btn-group">
  <button class="btn m-auto">text here</button>
</a>

<a class="absolute inset-0 flex btn-peer">text here</a>
...
<button class="btn m-auto">icon</button>

```


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


## Конфигурация

Вы можете настроить плагин с помощью опций
Используйте вызов плагина с объектом конфигурации:
```js
// tailwind.config.js
{    
  plugins: [
    require('@qpokychuk/tailwind-button-plugin')({
      className: 'btn',
      baseStyles: {},
      colorHoverOffset: 15,
      lightColorOpacity: 0.1,
      lightColorOpacityHover: 0.2,
      withFocusStyles: false,
      targetGroupSelector: '.btn-group',
      targetPeerSelector: '.btn-peer',
      hoverStyles: {
        background: 'var(--tw-btn-color-light)',
      },
      focusStyles: {
        zIndex: '2',
      },
      activeStyles: {
        transform: 'translateY(2px)',
      },
      disabledStyles: {
        opacity: '0.4',
        pointerEvents: 'none',
      },
    }),
  ],
}
```

| Параметр | Значение по умолчанию | Описание |
|---|---|---|
| className | `'btn'` | Базовый класс для кнопок. Вы можете использовать свой, например `'ui-button'`, тогда ваши классы будут выглядеть так: `ui-button ui-button-indigo ui-button-contur ...` |
| baseStyles | `{}` | Добавление базовых стилей, которые могут переобределить бызовые стили по умолчанию, например `{ borderRadius: 8px }`  |
| disabledOpacity | `0.4` | Определяет непрозрачность неактивной кнопки  |
| colorHoverOffset | `25` | Определяет смещение цвета при наведении, т.е на сколько кнопка потемнеет при наведении. Чтобы кнопка светлела при наведении используйте отрицательное значение  |
| lightColorOpacity | `0.1` | Определяет непрозрачность для light-цвета кнопки который используется например в light-варианте |
| lightColorOpacityHover | `0.2` | Определяет непрозрачность для lightColorOpacity при наведении |
| withFocusStyles | `false` | Если включено будут добавлены эффекты для состояния фокуса |
| targetGroupSelector | `'.btn-group'` | Селектор для передачи состояния от родителя к кнопке |
| targetPeerSelector | `'.btn-peer'` | Селектор для передачи состояния от соседа к кнопке |
| hoverStyles | `{  background: 'var(--tw-btn-color-light)' }` | Стили для состояния при наведении |
| focusStyles | `{  zIndex: '2' }` | Стили для состояния в фокусе |
| activeStyles | `{  transform: 'translateY(2px)' }` | Стили для состояния при нажатии |
| disabledStyles | `{ opacity: '0.4', pointerEvents: 'none' }` | Стили для неактивной кнопки |




[Поддержать автора](https://www.tinkoff.ru/rm/yuferov.sergey18/NC17C11734)