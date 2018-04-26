describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("should return an alert if NaN is entered", function(){
            spyOn(window,"alert");
            areaOfCircle("djfg");
            expect(window.alert).toHaveBeenCalledWith("You must enter a number, no words");
        })
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        
        it("should return an alert if NaN entered", function(){
            spyOn(window, "alert");
            squareRoot("serfg");
            expect(window.alert).toHaveBeenCalledWith("You must enter a number, no words");
        })
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        
        it("should return 16 as the square of 4", function(){
            expect(squareMe(4)).toBe(16);
        })
        
        it("should return an alert if NaN entered", function(){
            spyOn(window, "alert");
            squareMe("sdfg");
            expect(window.alert).toHaveBeenCalledWith("You must enter a number, no words");
        })
    });
    
    describe("Cube function", function(){
        it("should return 8",function(){
            expect(cubeMe(2)).toBe(8);
        });
        
        it("should return 27", function(){
            expect(cubeMe(3)).toBe(27);
        })
        
        it("should show an alert if NaN entered", function(){
            spyOn(window, "alert");
            cubeMe();
            expect(window.alert).toHaveBeenCalledWith("Please enter a number, no words!")
        })
    });
    
    describe("area of triangle", function(){
        it("should return 6", function(){
            expect(areaTriangle(3,4)).toBe(6);
        })
        
        it("should return 8", function(){
            expect(areaTriangle(4,4)).toBe(8);
        })
        
        it("should return alert if NaN entered", function(){
            spyOn(window, "alert");
            areaTriangle("dsfg", 5);
            expect(window.alert).toHaveBeenCalledWith("enter two numbers for triangle area, no words");
        })
    });
    
    describe("years until 2018", function(){
        it("should return 5", function(){
            expect(yearsLeft(2013)).toBe(5);
        })
        
        it("should return 10", function(){
            expect(yearsLeft(2008)).toBe(10);
        });
        
        it("should return an error if year is greater than 2018", function(){
            spyOn(window, "alert");
            yearsLeft(2020);
            expect(window.alert).toHaveBeenCalledWith("Please enter a year less than 2018");
        })
        
        it("should return an error if NaN is entered", function(){
            spyOn(window, "alert");
            yearsLeft("dfg");
            expect(window.alert).toHaveBeenCalledWith("Please enter a number, no words!")
        })
        
        it("should return an error if a float is entered", function(){
            spyOn(window, "alert");
            yearsLeft(2000.23);
            expect(window.alert).toHaveBeenCalledWith("please input an integer, no floats!");
        })
    });
    
    describe("area of a cylinder", function(){
       it("should return 62.83", function(){
           expect(cylinderArea(2,3)).toBe(62.83);
       })
       
       it("should return 131.95", function(){
           expect(cylinderArea(3,4)).toBe(131.95);
       })
       
       it("should return an error if NaN entered", function(){
           spyOn(window, "alert");
           cylinderArea("dfsdf", 4);
           expect(window.alert).toHaveBeenCalledWith("enter both radius and height as numbers");
       });
       
    });
    
    describe("fizz buzz game", function(){
        it("should return fizz", function(){
            expect(fizzBuzz(3)).toBe("fizz");
        });
        
        it("should return buzz", function(){
            expect(fizzBuzz(5)).toBe("buzz");
        });
        
        it("should return fizzBuzz", function(){
            expect(fizzBuzz(30)).toBe("FizzBuzz");
        });
        
        it("should return 14", function(){
            expect(fizzBuzz(14)).toBe(14);
        });
        
        it("should return fizz", function(){
            expect(fizzBuzz(13)).toBe("fizz");
        });
        
        it("should alert if NaN entered", function(){
            spyOn(window,"alert");
            fizzBuzz("efgsd", "fsdgsdfg");
            expect(window.alert).toHaveBeenCalledWith("FizzBuzz needs a number, no words!")
        });
    });
    
    describe("What can I drink game", function(){
       it("should return 'Sorry. I can't tell you what to drink because that age is incorrect", function(){
           expect(whatCanIDrink()).toBe("Sorry. I can't tell you what to drink because that age is incorrect");
       }); 
       
       it("should return 'Drink Toddy'", function(){
           expect(whatCanIDrink(10)).toBe("Drink Toddy");
       });
       
       it("should return 'Drink Coke'", function(){
           expect(whatCanIDrink(15)).toBe("Drink Coke");
       });
       
       it("should return 'Drink Beer'", function(){
           expect(whatCanIDrink(20)).toBe("Drink Beer");
       });
       
       it("should return 'Drink Whiskey'", function(){
           expect(whatCanIDrink(80)).toBe("Drink Whiskey");
       });
       
       it("should return 'Sorry. I can't tell you what to drink because that age is incorrect'", function(){
           expect(whatCanIDrink(800)).toBe("Sorry. I can't tell you what to drink because that age is incorrect");
       });
    });

});