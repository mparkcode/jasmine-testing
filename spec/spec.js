describe("Calculator tests", function(){
    describe("Addition tests", function(){
        
        it("should return 4", function(){
            expect(addition(2,2)).toBe(4);
        });
        
        it("should not return 4 for different numbers", function(){
            expect(addition(20,22)).toBe(42)
        });
        
        it("should show an alert for NaN", function(){
            spyOn(window, "alert");
            addition("Fish",22);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
        
        it("should show an alert if we only supply one number", function(){
            spyOn(window, "alert");
            addition(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
    });
    
    describe("Subtraction tests", function(){
        
        it("should return 4", function(){
            expect(subtract(6,2)).toBe(4);
        });
        
        it("should return 10", function(){
            expect(subtract(15,5)).toBe(10);
        })
        
        it("Should return an alert for NaN", function(){
            spyOn(window, "alert");
            subtract("Hi", 5);
            expect(window.alert).toHaveBeenCalledWith("Please provide two numbers, no words");
        })
        
        it("Should show an alert if we supply just one number", function(){
            spyOn(window, "alert");
            subtract(4);
            expect(window.alert).toHaveBeenCalledWith("Please provide two numbers, no words");
        })
    });
    
    describe("Multiplication tests", function(){
        
        it("should return 16", function(){
            expect(multiply(4,4)).toBe(16);
        });
        
        it("should return 4", function(){
            expect(multiply(4,1)).toBe(4);
        });
        
        it("should show an alert if NaN", function(){
            spyOn(window, "alert");
            multiply("hi",7);
            expect(window.alert).toHaveBeenCalledWith("You must multiply two numbers, no words!");
        });
        
        it("should ahow an alert if only one number", function(){
            spyOn(window, "alert");
            multiply(2);
            expect(window.alert).toHaveBeenCalledWith("You must multiply two numbers, no words!");
        })
    });
    
    describe("Division tests", function(){
        it("should have returned 3", function(){
            expect(divide(9,3)).toBe(3);
        })
        
        it("should have returned 2", function(){
            expect(divide(20,10)).toBe(2);
        })
        
        it("should have shown an alert if NaN used", function(){
            spyOn(window, "alert");
            divide("hi",4);
            expect(window.alert).toHaveBeenCalledWith("You must divide two numbers, no words");
        })
        
        it("should show an alert if only one number used", function(){
            spyOn(window, "alert");
            divide(4);
            expect(window.alert).toHaveBeenCalledWith("You must divide two numbers, no words");
        });
    });
})