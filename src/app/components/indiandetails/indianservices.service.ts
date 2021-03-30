import { Injectable } from '@angular/core';
import { recipe} from 'src/app/components/create/create';

@Injectable({
  providedIn: 'root'
})
export class IndianservicesService {

  constructor() { }
  indian:recipe[]=[
    {

      "uid": 1,
      "title":"Chicken Biryani",
      "step1":"Marinate the chicken for at least 30 minutes. You can also marinate ahead of time, for up to 12 hours in the refrigerator.Soak the rice for 20 minutes, which makes rice fluffy and light with long separate grains. I would recommend extra long grain basmati rice for making chicken biryani. Some of my favorite brands are Kohinoor and Royal, both available in Indian groceries.As the rice soaks, you can start to caramelize the onions. Caramelizing in the Instant Pot may cause the bottom of the pot to get scorched. Remember to deglaze the pot well with the liquids from the marinated chicken. Pressing cancel during deglazing also prevents further overheating",
      "step2":"Bone-in chicken legs or drumsticks need longer time to pressure cook than the basmati rice. To achieve this, we first pressure cook the chicken for 4 minutes. For boneless thighs, just sautéing for 2 to 3 minutes cooks the chicken partially and then they can further cook  along with the layered rice.Drain the rice, completely after soaking for 20 minutes. Then layer the rice on the partially cooked chicken. Add water (which should be 1:1 ratio with rice) and make sure all the rice is under the liquids ",
      "step3":"After pressure cooking the rice, if the top layer looks a bit undercooked, simply fluff the top layer with a fork. Use a silicone spatula to gently mix the rice and the chicken pieces at the bottom of the pot.  Garnish with the caramelized onions, saffron mixed with milk, cilantro, and mint. Layer over with hard-boiled eggs.",
      "step4":"Stir again for 5-10 minutes and add the black vinegar.Stir fry for 10 minutes and garnish with green peppercorns.Szechwan chilli chicken is ready to be served.",
      "url" :"https://media.istockphoto.com/photos/chicken-biryani5-picture-id501141009?k=6&m=501141009&s=612x612&w=0&h=IM18kpeCmPT0fsJozTez9lnbSrJqybe6rPIFmr7XeGs=",
      "yurl" :""
    } ,
    
      {
        "uid":2,
        "title":"Panner Tikka",
        "step1":"Whisk the yogurt in a large bowl until smooth. I have used greek yogurt here, you can use regular yogurt just make sure to strain it for several hours until you have thick yogurt left and then use in the recipe.",
        "step2":"Add all the ingredients for marinade to the yogurt- ginger garlic paste, mustard oil, coriander powder, chaat masala, kashmiri red chili powder, garam masala, red chili powder, kasuri methi and salt.",
        "step3":"Mix until all the paneer pieces and veggies are well coated with the marinade. Cover the bowl and refrigerate for minimum for 1 hour or up to 4 hours.  Overnight also works!",
        "step4":"After 1-2 hours, take the marinated paneer and veggies out of the refrigerator. Take a skewer and arrange paneer, onion and peppers on a skewer, alternating with each other.",
        "url" :"https://www.whiskaffair.com/wp-content/uploads/2018/07/Achari-Paneer-Tikka-1-3.jpg",
        "yurl":"",
        }
    

  ]

getDetail(id:number):recipe{
  const det = this.indian.find(
    det=> det.uid === id        
   )
    return det;      
   
 }
 getDetails():recipe[]{
  return this.indian;
}
}
