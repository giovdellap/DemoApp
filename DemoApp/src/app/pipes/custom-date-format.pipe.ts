import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormat',
  standalone: true
})
export class CustomDateFormatPipe implements PipeTransform {

  transform(value: Date | string | number): string {
    if (!value) return '';

    // Ensure the input value is a valid date
    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    // Format the date in Italian
    const formatter = new Intl.DateTimeFormat('it-IT', {
      weekday: 'long', // Lunedì, Martedì, etc.
      day: 'numeric',  // 19
      month: 'long',   // Giugno, Luglio, etc.
      year: 'numeric', // 2023
    });

    return formatter.format(date);
  }

}
