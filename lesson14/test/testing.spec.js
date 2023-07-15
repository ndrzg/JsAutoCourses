const Calculator = require('../calculator') 
const{expect} = require('chai')




describe('calculator testing suit', function(){
    let calculator
    
    beforeEach(() => {
        calculator = new Calculator()
      })
    

    describe('add function testing suit', function(){
        
        it('should check add with positive numbers', function(){
            
            //const result = calculator.add(10, 5)
            expect(calculator.add(10, 5)).to.equal(15)
        })
        it('verifies add with negative numbers', function(){
            
            const result = calculator.add(10, -5)
            expect(result).to.equal(5)
        })

        it('should check add with fractional numbers', function(){
        
            const result = calculator.add(10.4, 5.5)
            expect(result).to.equal(15.9)
        })

        it('should check function  with 1 element', function(){
            
            const result = calculator.add(10)
            expect(result).to.equal(10)
        })
        it('should check NAN case', function(){
            
            const result = calculator.add(10, true)
            expect(result).to.equal(11)
        })
        it('should check add with 5 element', function(){
        
            const result = calculator.add(10, 5, 1, 4, 6)
            expect(result).to.equal(26)
        })
        it('should check add without elements', function(){
        
            const result = calculator.add()
            expect(result).to.equal(NaN, 'add numbers')
        })
        it('should check add with 0 element', function(){
        
            const result = calculator.add(5, 0)
            expect(result).to.equal(5)
        })




    })      

    describe('multiply function testing suit', function(){

   
        it('should check multiply with positive numbers', function(){
            
            const result = calculator.multiply(10, 5)
            expect(result).to.equal(50)
        })

        it('should check multiply with negative numbers', function(){
            
            const result = calculator.multiply(10, -5)
            expect(result).to.equal(-50)
        })

        it('should check multiply with fractional numbers', function(){
            
            const result = calculator.multiply(10.3, 5.6)
            expect(result).to.equal(57.68)
        })

        it('should check multiply function  with 1 element', function(){
            
            const result = calculator.multiply(10)
            expect(result).to.equal(10)
        })
        it('should check NAN case', function(){
            
            const result = calculator.multiply(10, '5')
            expect(result).to.equal(50)
        })
        it('should check multiply with 5 element', function(){
        
            const result = calculator.multiply(10, 5, 1, 4, 6)
            expect(result).to.equal(1200)
        })

    })

    describe('subtraction function testing suit', function(){

   
        it('should check subtraction with positive numbers', function(){
        
            const result = calculator.subtraction(10, 5)
            expect(result).to.equal(5)
        })
    
        it('should check subtraction with negative numbers', function(){
        
            const result = calculator.subtraction(10, -5)
            expect(result).to.equal(15)
        })
    
        it('should check subtraction with fractional numbers', function(){
            
            const result = calculator.subtraction(10.3, 5.6)
            expect(result).to.equal(4.700000000000001)
        })
    
        it('should check subtraction function  with 1 element', function(){
            
            const result = calculator.subtraction(10)
            expect(result).to.equal(NaN, 'need to add second number')
        })
        it('should check NAN case', function(){
            
            const result = calculator.subtraction(10, '5')
            expect(result).to.equal(5)
        })
        it('should check subtraction with 5 element', function(){
        
            const result = calculator.subtraction(10, 5, 1, 4, 6)
            expect(result).to.equal(5)
        })
    
        })


    describe('divide function testing suit', function(){

   
            it('should check divide with positive numbers', function(){
                
                const result = calculator.divide(10, 5)
                expect(result).to.equal(2)
            })
        
            it('should check divide with negative numbers', function(){
                
                const result = calculator.divide(10, -5)
                expect(result).to.equal(-2)
            })
        
            it('should check divide with fractional numbers', function(){
                
                const result = calculator.divide(10.3, 5.6)
                expect(result).to.equal(1.8392857142857146)
            })
        
            it('should check divide function  with 1 element', function(){
                
                const result = calculator.divide(10)
                expect(result).to.equal(NaN ,'need to add numbers')
            })
            it('should check NAN case', function(){
                
                const result = calculator.divide(10, '5')
                expect(result).to.equal(2)
            })
            it('should check divide with 5 element', function(){
            
                const result = calculator.divide(10, 5, 1, 4, 6)
                expect(result).to.equal(2)
            })

            it('should check divide with 0 in divider element', function(){
            
                const result = calculator.divide(10, 0)
                expect(result).to.equal(!Infinity, 'not possible to devide with 0')
            })
        
    })


    describe('exponentiation function testing suit', function(){

   
        it('should check exponentiation with positive numbers', function(){
            
            const result = calculator.exponentiation(10)
            expect(result).to.equal(100)
        })
    
        it('should check exponentiation with negative numbers', function(){
            
            const result = calculator.exponentiation(-5)
            expect(result).to.equal(25)
        })
    
        it('should check exponentiation with fractional numbers', function(){
            
            const result = calculator.exponentiation(10.3)
            expect(result).to.equal(106.09000000000002)
        })
    
        it('should check NAN case', function(){
            
            let result = calculator.exponentiation('5')
            expect(result).to.equal(25)

            result = calculator.exponentiation(true)
            expect(result).to.equal(1)

        })
        it('should check exponentiation with 5 element', function(){
        
            const result = calculator.exponentiation(10, 5, 1, 4, 6)
            expect(result).to.equal(100)
        })
    
        it('should check exponentiation without elements', function(){
        
            const result = calculator.exponentiation()
            expect(result).to.equal(NaN, 'need to add numbers')
        })
        it('should check exponentiation with 0 element', function(){
        
            const result = calculator.exponentiation(0)
            expect(result).to.equal(1)
        })

        })



})
