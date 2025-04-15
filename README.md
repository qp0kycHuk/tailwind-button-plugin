
# 🧩 Buttons Plugin for Tailwind CSS

Tailwind CSS плагин для создания настраиваемых кнопок с поддержкой темизации, вариантов, размеров, состояний и утилит.

### Преимущества плагина
✅ Работает из коробки: всего один класс `btn` <br>
🎨 Полная тема: цвета, размеры, варианты <br>
⚙️ Конфигурация и кастомизация <br>
🎯 Target-селекторы: hover/focus от родителей и peer <br>
🛠️ Создан для Tailwind CSS, дружит с утилитами

---

## 🚀 Установка

Установите плагин через NPM:

```bash
npm install @qpokychuk/tailwind-button-plugin --save-dev
```

Добавьте его в ваш `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('@qpokychuk/tailwind-button-plugin'),
  ],
};
```

---

## ⚙️ Базовое использование

Примените базовый класс `btn`, затем добавьте дополнительные модификаторы для настройки внешнего вида:

```html
<button class="btn">text here</button>
```

---

## 🎨 Цвет кнопки

Настройте цвет кнопки с помощью утилиты `btn-{color}` — где `color` соответствует вашей теме Tailwind:

```html
<button class="btn btn-indigo">text here</button>
<button class="btn btn-blue">text here</button>
<button class="btn btn-red">text here</button>
```

Для произвольного значения цвета используйте квадратные скобки:

```html
<button class="btn btn-[#B33771]">text here</button>
```

![Цвета кнопок](https://user-images.githubusercontent.com/42573149/227128489-f560c61d-8605-4de8-9702-00ba7dfa8125.jpg)

---

## 🧩 Варианты кнопок

Поддерживаются следующие варианты: `fill` | `contur` | `light` | `text`

```html
<button class="btn">text here</button> <!-- По умолчанию: fill -->
<button class="btn btn-contur">text here</button>
<button class="btn btn-light">text here</button>
<button class="btn btn-text">text here</button>
```

> 💡 Также доступны: `whitebg`, `icon` — для специальных случаев.

![Варианты кнопок](https://user-images.githubusercontent.com/42573149/227128753-f353f26e-7c29-4ac0-9713-1ba380f69f00.jpg)

---

## 📏 Размер кнопки

Выберите размер с помощью `btn-{size}`:

```html
<button class="btn btn-xs">text here</button>
<button class="btn btn-sm">text here</button>
<button class="btn btn-base">text here</button> <!-- По умолчанию -->
<button class="btn btn-lg">text here</button>
<button class="btn btn-xl">text here</button>
<button class="btn btn-2xl">text here</button>
```

Кастомные размеры:

```html
<button class="btn btn-[50px]">text here</button>
```

![Размеры кнопок](https://user-images.githubusercontent.com/42573149/227129527-85410c6d-4cb7-49da-9ac2-87b8fe2391e1.jpg)

---

## 🛠️ Модификаторы

Используйте стандартные Tailwind модификаторы:

```html
<button class="btn btn-sm md:btn-lg">
  Adaptive Button
</button>
<button class="btn btn-blue-300 dark:btn-blue-500">
  Support dark mode
</button>
<button class="btn btn-red hover:btn-green">
  Custom hover
</button>
```
---

## 🌀 Закругление

Используйте стандартные Tailwind-утилиты `rounded`:

```html
<button class="btn rounded">text here</button>
<button class="btn rounded-xl">text here</button>
<button class="btn rounded-full">text here</button>
```

![Закругления](https://user-images.githubusercontent.com/42573149/227129042-f64b5b24-6956-4164-a9bc-f7a0703fca57.jpg)

---

## 🌑 Тени

Применяйте стандартные Tailwind-утилиты `shadow`:

```html
<button class="btn shadow-md hover:shadow-xl active:shadow-md">text here</button>
```

![Тени](https://user-images.githubusercontent.com/42573149/227129226-e3b069c8-4699-42d8-bb52-9ee39b32e115.jpg)

---

## 👨‍👧 Target-селекторы

Чтобы эффекты наведения, фокуса и клика работали при взаимодействии с родительским или соседним элементом:

```html
<a class="absolute inset-0 flex btn-group">
  <button class="btn m-auto">text here</button>
</a>

<a class="absolute inset-0 flex btn-peer">text here</a>
...
<button class="btn m-auto">icon</button>
```

---

## 🛠 Расширение темы

Вы можете переопределить или расширить размеры кнопок:

```js
// tailwind.config.js
module.exports = {
  theme: {
    btnSize: {
      xs: '28px',
      sm: '32px',
      base: '42px',
      lg: '48px',
      xl: '56px',
      ['2xl']: '64px',
    },
  },
};
```

---

## 🧪 Конфигурация плагина

Вы можете настроить поведение плагина, передав объект опций:

```js
// tailwind.config.js
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
]
```

| Параметр                  | Значение по умолчанию                 | Описание |
|---------------------------|---------------------------------------|----------|
| `className`               | `'btn'`                               | Базовый класс для кнопок |
| `baseStyles`              | `{}`                                  | Базовые стили, которые переопределяют дефолтные |
| `colorHoverOffset`        | `15`                                  | Смещение цвета при наведении (можно отрицательное) |
| `lightColorOpacity`       | `0.1`                                 | Прозрачность цвета в варианте `light` |
| `lightColorOpacityHover`  | `0.2`                                 | Прозрачность при `hover` в варианте `light` |
| `withFocusStyles`         | `false`                               | Добавлять ли стили при фокусе |
| `targetGroupSelector`     | `'.btn-group'`                        | Селектор для наследования состояний от родителя |
| `targetPeerSelector`      | `'.btn-peer'`                         | Селектор для наследования состояний от соседа |
| `hoverStyles`             | `{ background: 'var(--tw-btn-color-light)' }` | Стили при `hover` |
| `focusStyles`             | `{ zIndex: '2' }`                     | Стили при `focus` |
| `activeStyles`            | `{ transform: 'translateY(2px)' }`   | Стили при `active` |
| `disabledStyles`          | `{ opacity: '0.4', pointerEvents: 'none' }` | Стили для `disabled` состояния |

---

## 🔗 Полезные ссылки

- [NPM: @qpokychuk/tailwind-button-plugin](https://www.npmjs.com/package/@qpokychuk/tailwind-button-plugin)
- [Поддержать автора 💖](https://www.tinkoff.ru/rm/yuferov.sergey18/NC17C11734)
