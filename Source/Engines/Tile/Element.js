/*
---

name: "Tile Engine App Element"

license:
	- "[GNU Lesser General Public License](http://opensource.org/licenses/lgpl-license.php)"
	- "[MIT License](http://opensource.org/licenses/mit-license.php)"

authors:
	- "Shock <shocksilien@gmail.com>"

requires:
	- Engines.Tile
	- App.Element

provides: Engines.Tile.Element

...
*/
/** @class TileEngine.Element */
declare( 'LibCanvas.Engines.Tile.Element', App.Element, {
	configure: function () {
		this.shape = new Rectangle(
			this.settings.get('from'),
			this.engine.countSize()
		);
		this.engine.events.add( 'update', this.redraw );
	},

	get engine () {
		return this.settings.get('engine');
	},

	clearPrevious: function () {},

	renderTo: function (ctx) {
		this.engine.refresh(ctx, this.shape.from);
	}
}).own({
	app: function (app, engine, from) {
		return new this( app.createLayer({
			intersection: 'manual',
			invoke: false
		}), {
			engine: engine,
			from: from || new Point(0, 0)
		});
	}
});

