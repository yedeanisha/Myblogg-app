import { Injectable } from '@angular/core';
import { ActivatedRoute, Router,Route } from "@angular/router";

import { mexican} from 'src/app/components/create/create';

@Injectable({
  providedIn: 'root'
})
export class MexicanService {

  constructor() { }
  mexidetails:mexican[]=
  [
    {
        "uid": 1,
         "url"    :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWm2ropTtUQ4k_6txXNiR15DmPPHcYSPq0Q&usqp=CAU",       
        "title"   :"lamb",
         "step1"  :"Remove the lamb chops from the refrigerator and seaon with 1 teaspoon kosher salt. Set aside at room temperature for at least 5 minutes. Meanwhile, finely chop 4 garlic cloves and 1/4 cup fresh herb leaves and set each aside separately.",   
         "step2"   :"Melt 1 stick unsalted butter in a 12-inch skillet over medium-high heat until sizzling but not yet browned. Add the lamb chops and sear until browned and an instant-read thermometer inserted into the thickest part of the meat registers 145°F for medium doneness, flipping halfway through, 8 to 12 minutes total.",
        "step3"  :"Add the garlic and 1/4 teaspoon black pepper to the butter, and cook for 1 minute more. Remove from the heat and garnish with the herbs.",
      "step4"    : " The lamb chops can be seasoned with salt up to 1 hour in advance and left at room temperature."
      },
      {
        "uid": 2,
         "url" :"https://i2.wp.com/coolfooddude.com/wp-content/uploads/2020/06/8C72FCA7-C002-4B27-9920-DA95FB619759.png?resize=620%2C604&ssl=1",
         "title": "Mexican Rice Bowl",
        "step1" :"Either slice an avocado in sections, cubes or use it to make guacamole.Pico De Gallo is a quick Mexican salsa made with simple ingredients like diced tomatoes, onions, cilantro, and jalapeno peppers. Add a squeeze of lime juice, a dash of salt, and you're done",
        "step2" :" Slice some yellow onion, bell pepper, mushrooms, zucchini, and slivered garlic. Feel free to leave out any ingredient you don't like, or substitute with other vegetables. Squeeze some lemon over the vegetables and season with a pinch of salt and fajita seasoning. Or make your own seasoning using salt, pepper, and chili powder. Heat a tablespoon or less of vegetable oil and sauté for a few minutes.",
        "step3"  :"Once all your ingredients are ready, begin by adding the rice to a bowl. Next, divide the bowl, visually, by how many toppings you have and arrange the toppings over the rice.",
        "step4"  :"If you're not concerned about presentation, just mix everything together and enjoy!" 
      },
      {

        "uid":3,
        "title":"Apricot and Pistachio Biscotti",
        "step1":"Heat oven to 350°F. Line baking sheets with parchment paper. In a medium bowl, whisk together flour, cornmeal, baking powder, and salt.",
        "step2":"Using an electric mixer, combine oil, sugar, eggs, vanilla, and orange zest in a large bowl. Gradually add flour mixture, mixing until fully incorporated (the dough will be very stiff). Fold in pistachios and apricots.",
        "step3":"Divide dough into 6 portions and, with floured hands, roll each portion into a 11⁄2-in.-thick log (about 6 in. long). Place crosswise on the prepared baking sheets and slightly flatten the tops. Bake, rotating the positions of the pans halfway through, until light golden brown and tops begin to crack, 30 to 40 minutes. Let logs cool 15 minutes.",
        "step4":"Using a serrated knife, cut logs on a slight diagonal into 1⁄4-in.-thick slices. Arrange slices on the same sheets in a single layer and bake until light golden brown, 10 to 12 minutes. Transfer to a wire rack to cool",
        "url":"https://i.pinimg.com/originals/ac/8a/84/ac8a844f2ebabe08a7253a1eedaac807.png"
        }       
           
        
  ]

  getDetail(id:number):mexican{
    const det = this.mexidetails.find(
      det=> det.uid === id        
     )
      return det;      
     
   }
   getDetails():mexican[]{
    return this.mexidetails;
  }
}
