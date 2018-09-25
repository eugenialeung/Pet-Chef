import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'nutrientValues' })
export class NutrientValuesPipe implements PipeTransform {
  transform(nutrient: any) {
    if(nutrient == undefined){
        return 0.0.toFixed(1);
    }
    else{
        return nutrient.toFixed(1);
    }
  }


}

