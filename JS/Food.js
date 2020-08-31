class Food{

    constructor(){

     this.foodStock = 0;
     this.image = loadImage("images/Milk.png");  
     
    }

    updateFood(foodStock){

        this.foodStock = foodStock;
    }

    deductFood(){

        if(fodStock>0){

            this.foodStock = this.foodStock-1;
        }
    }

     getFoodStock(){

        
        return this.foodStock;
     }

    display(){

        imageMode(CENTER);
        
        image(this.image,160,600,70,70);

        var x,y;

        x = 100;
        y = 80;

        if(foodStock!=0){

            for(var i = 0;i<this.foodStock;i++){

                if(i%10==0){
                    y = y+70;
                    x = 110;
                }
                image(this.image,x,y,70,70);
                x = x+30;
            }
        }
    }

}