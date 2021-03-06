LibCanvas.App.Layer
===================

`LibCanvas.App.Layer` - класс для создания слоёв LibCanvas приложения

### Инициализация

Создаётся только при помощи метода `LibCanvas.App#createLayer`:

```js
LibCanvas.App.Layer app.createLayer( object settings );
```

Settings может содержать следующие параметры:

* `name` (*string*) - имя слоя (необходимо только для отладки)
* `zIndex` (*number*) - z-index слоя
* `invoke` (*boolean*) - необходимо ли вызывать у всех объектов метод `onUpdate` каждый кадр (по-умолчанию `false`)
* `intersection` - при перерисовке одного из элементов, необходимо ли перерисовывать остальные. Значения:
  * `auto` (по-умолчанию) - только те, которые необходимо для корректной отрисовки
  * `manual` - нет, ни одного (например, когда вы хотите лично управлять перерисовкой)
  * `all` - да, все (например, если это дешевле, чем просчитывать все пересечения)

#### Пример

```js
var layer = app.createLayer({
	name  : 'units',
	zIndex: 3,
	invoke: true,
	intersection: 'all'
})
```

### Свойства

#### ctx

`2d-libcanvas` контекст элемента canvas слоя

```js
layer.ctx.fillAll( 'red' )
```

### Методы

#### stop

```js
LibCanvas.App.Layer stop()
```

Остановить отрисовку слоя

```js
layer.stop()
```

#### start

```js
LibCanvas.App.Layer start()
```

Возобновить отрисовку слоя

```js
layer.start()
```

#### hide

```js
LibCanvas.App.Layer hide()
```

Временно скрыть слой

```js
layer.hide()
```

#### show

```js
LibCanvas.App.Layer show()
```

Снова показать слой

```js
layer.show()
```
