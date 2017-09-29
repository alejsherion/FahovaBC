import { NgModule } from '@angular/core';
import { FavoritesPipe } from './favorites/favorites';
@NgModule({
	declarations: [FavoritesPipe],
	imports: [],
	exports: [FavoritesPipe]
})
export class PipesModule {}
