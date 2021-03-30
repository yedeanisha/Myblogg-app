import { Injectable } from '@angular/core';
import { recipe} from 'src/app/components/create/create';

@Injectable({
  providedIn: 'root'
})
export class ChineseseviceService {
  constructor() { }
  chinese:recipe[]=[
    {

      "uid":1,
      "title":"Manchuria",
      "step1":"Take the finely chopped or grated veggies in a bowl.  you will need ½ cup finely chopped red cabbage, ½ cup grated carrot, ¼ cup finely chopped capsicum (green bell pepper), ¼ cup finely chopped french beans and ¼ cup finely chopped spring onions. You can also add regular green cabbage instead of red or purple cabbage.",
      "step2":"Then add the dry ingredients – 2 tablespoons corn starch, 2 tablespoons all purpose flour (maida), ½ teaspoon black pepper and ½ teaspoon salt or add as required.",
      "step3":"hello",
      "step4":"In a small bowl take the following three sauces – ½ tablespoon soy sauce (or 1.5 teaspoons soy sauce), 1 tablespoon tomato ketchup, 2 to 3 teaspoons of red chilli sauce. The red chilli sauce is spicy and not sweet.Heat 1 to 1.5 tablespoons oil in a pan or wok. Add 4 tablespoons chopped spring onions (scallions), 1 tablespoon finely chopped ginger, 1 tablespoon finely chopped garlic, 2 green chilies (finely chopped) and ¼ cup finely chopped capsicum (green bell pepper).",
      "url":"https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?fit=2412%2C1944&quality=65&strip=all&ssl=1",
      "yurl":"https://www.youtube.com/watch?v=oyHasipretM"
      },
      
        {

          "uid":  2,
          "title":"Szechwan Chilli Chicken",
          "step1":"Flash fry the chicken with ginger till there colour changes to golden.",
          "step2":"Now drain the oil and keep this aside.Now, add garlic, spring onions green pepper corns and the brown peppercorn.",
          "step3":"Stir for 5 minutes and then add the dry chillies, white pepper powder, ajino moto, salt and chilli oil.",
          "step4":"Stir again for 5-10 minutes and add the black vinegar.Stir fry for 10 minutes and garnish with green peppercorns.Szechwan chilli chicken is ready to be served.",
          "url" :"https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/szechuan-chicken-sichuan-chicken.jpg",
          "yurl" :""
          
          
      }
  ]
  getDetail(id:number):recipe{
    const det = this.chinese.find(
      det=> det.uid === id        
     )
      return det;      
     
   }
   getDetails():recipe[]{
    return this.chinese;
  }
}
