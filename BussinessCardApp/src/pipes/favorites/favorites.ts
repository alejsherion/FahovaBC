import { Contact } from './../../model/contacts';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FavoritesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'favoritesPipe',
  pure: false
})
export class FavoritesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(contacts: Contact[]) {
    if(contacts == null)
      return [];
    return contacts.sort((a,b) => (!a.isFavorite && b.isFavorite) ? 1 : -1 );
  }
}
