import { recipe } from './create';
import { Injectable, OnInit } from "@angular/core"
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class CreateService {
details:recipe[]=[  
    {
    "uid"    : 1,
    "title" : "Chicken Nuggets",
    "step1" : "Bake it, don’t fry it. I say this because frying requires a lot of sizzling hot oil, and that scares me. I also don’t have a good vent over my oven to take the fried food smell far, far away. Plus, you can use a reasonably amount of heart-healthy olive oil in the baked version.",
    "step2" :  "Coat your rimmed baking sheet with olive oil. That way, you get a fried effect in the oven, and you don’t have to brush the little falafels individually with olive oil. Winning!",
    "step3" :"Use dried chickpeas, not canned. Canned chickpeas do not work for falafel. They’re far too wet. If you try to use canned chickpeas instead of dried and soaked chickpeas, you’ll end up with sad falafel pancakes. Some recipes try to counteract the wetness by adding flour, which significantly dulls the flavor and makes the texture more doughy.",
    "step4" : "Choose your dried chickpeas wisely. Try to buy your dried chickpeas from a store with high turnover, because old chickpeas need longer to soften. If you have options, pick the chickpeas that are the smallest, since they’ll soften faster.",
    "url"   :  "../assets/Crispy-Falafel-Recipe-1200.jpg",
     "yurl" :" https://www.youtube.com/embed/D-q5bZ2ESwg"
     },
 
    {
    "uid" :2,
    "title"   : "Chicken Meet balls",
    "step1"   : " Mix meatball ingredients together. Roll into meatballs. Heat a skillet over medium high heat. Add a swizzle of olive oil. Add meatballs and cook until browned on all sides. Remove from pan and set aside." ,
    "step2"  :  " Add peppers and garlic to the same pan  plus a little more oil if you need it Get all the yummy browned bits off the bottom of the pan. Sauté for 10 minutes." ,
    "step3"  :  "Add meatballs back into the pan. Stir in tomato sauce and capers. Bring to a low simmer and let it hang out.Orzo: Cook orzo according to package directions. Drain and toss with something creamy. Season with salt, Parmesan, and parsley.",
              
    "step4"  : "You’re Done: Plate and serve! Top with more Parmesan and parsley because you are just that fancy",
    "url"    : "../assets/chicken meetballs.jpeg",
     "yurl"  : " https://www.youtube.com/embed/D-RrxSD8ziXec"
    },
    {
      "uid":3,
      "title" :"Slow Cooker shreded pork",
      "step1" : "Combine the tomato sauce, chili powder, brown sugar, coriander and cumin in the base of your slow cooker. Stir to combine and distribute the spices evenly.",
      "step2" :"Sprinkle the pork with salt and pepper and place it in the slow cooker. Using tongs, turn the pork to coat it evenly in the sauce. Add in the garlic and onions, stir again. Place the lid on the slow cooker and cook until the pork is tender and beginning to fall apart, on low 8 to 10 hours or on high 4 to 6 hours.",
      "step3" :"Transfer the pork to a serving bowl. Allow to cool slightly, and then shred using 2 forks, removing any excess fat.",
      "step4" :"Skim any excess fat off of the sauce remaining in the slow cooker. Stir in the lime juice and season with salt and pepper. Add the shredded pork back into the slow cooker and mix it with the sauce that was created during the cooking. You can store the pork in its sauce for 3 to 4 days. ",
      "url"   :  " ../assets/pork.jpg",
      "yurl"  : ""
      },
      {
        "uid"    :4,
        "title" :"Bhindi Shahi",
        "step1" : "Rinse 250 grams bhindi (okra) in water. Then wipe dry them with a kitchen towel or just allow to dry them naturally in a plate.Slice off the crown and base of each bhindi and make a slit on one side.Before chopping make sure the okra is completely dried. Never chop the wet okra otherwise it will become slimy.",
        "step2" : "Sprinkle ½ tsp chaat masala and ¼ tsp salt. Mix and toss the bhindi very well with the salt and chaat masala. Keep aside for 5 minutes. In a dry grinder, powder 14 to 15 cashews finely. If some fat releases while powdering the cashews, its alright. You can also substitute blanched almonds, instead of cashews.",     
        "step3" : " Beat ½ cup fresh curd/dahi and keep aside. Crush 1 inch ginger + 4 to 5 garlic + 2 green chilies, crushed to a paste in mortar-pestle. You can also grind these in a small grinder. Also thinly slice 1 large onion and chop 1 medium to large tomato finely.On a low to medium flame, saute the bhindi till they become tender and are just about cooked. No need to brown them. You can saute the bhindi in batches too.",
        "step4" : "In the same pan, add ½ tsp cumin seeds and a pinch of asafoetida (hing). On a low heat saute till the cumin seeds crackle.Then add 1 heaped cup of sliced onions.Then add the crushed ginger-garlic-green chili paste. Stir and saute for few seconds or till the raw aroma of ginger-garlic goes away.Add ⅓ cup finely chopped tomatoes.On a low to medium flame, stir and saute the masala mixture for 5 to 6 minutes till you see oil releasing from the sides.Keep the flame to the lowest and add the beaten curd gradually.Stir and mix very well.Season with salt as required and simmer for two minutes.Now add 1 tbsp milk powder/dairy whitener. 2 tbsp milk powder can also be added, but it makes the bhindi gravy more sweet. Substitutes for milk powder is fresh cream and khoyaNow add 1 tbsp milk powder/dairy whitener. 2 tbsp milk powder can also be added, but it makes the bhindi gravy more sweet. Substitutes for milk powder is fresh cream and khoya",
        "url"  :"../assets/bindi.jpg",
        "yurl"  : " https://www.youtube.com/embed/_EaIF9WQzDQ"
      }
    
 ]

  getDetails():recipe[]{
      return this.details;
    }

  getDetail(id:number):recipe{
    const det = this.details.find(
      det=> det.uid === id        
     )
      return det;      
     
   }
   //via Api
      detailsurl='../app/data/create.json'
      httpOptions={
      headers:new HttpHeaders({
       'content-Type' : 'application/json'
     })
   }
  //Dependency Injection
constructor(private http:HttpClient){  }

//Fetching by api
getDetailsapi():Observable<recipe[]> {
  return this.http.get<recipe[]>(this.detailsurl)     
  
} 
//fetching by api id
getDetailsByid( id:number):Observable<recipe>{
   const url = `${this.detailsurl}/${id}`;
   return this.http.get<recipe>(url)
}

//adding by api




delete(id:number) {
  const index = this.details.findIndex(
      detail => detail.uid === id 
      
)
  if (index>= 0) {
    console.log(index);
    console.log("deleting")
    console.log(this.details[index])
    this.details.splice(index,1);
}
}
//delete by api
deletebyapi(id:number){
  return this.http.delete<recipe>(`${this.detailsurl}/${id}`);
}
deleteapi(id): Observable<any> {
  console.log("deleting")
  return this.http.delete(`${this.detailsurl}/${id}`);
}

//upadting
update(id: number, detailinfo: recipe) {
  const detail = this.getDetail(id);
  if (detail) {
      detail.step1 = detailinfo.step1
      detail.step2=  detailinfo.step2;
  }
  
}

add(a){  
  console.log(this.details)
  this.details.push(a)
  console.log("hi")
}

}


   

  








