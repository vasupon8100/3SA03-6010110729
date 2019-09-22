import React, { Component } from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
     let word = given_word.toUpperCase()
     let chars = _.shuffle(Array.from(word)) 
     return { 
         word, 
         chars, 
         attempt: 1, 
         guess: [], 
         completed: false 
        } 
    }

export default class WordCard extends
Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) =>{
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})

      
        if(guess.length == this.state.chars.length){
            console.log('Mistake Word: '+guess.join('').toString())
            console.log('Correct Word: '+this.state.chars.join('').toString())
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                this.setState({guess: [], complete: true})
                document.getElementById('result').innerHTML = `Congratulations! Or Succees`
                
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('result').innerHTML = `Attempt Or Try Again: ${this.state.attempt} `
                
            }
        if(this.state.attempt == 3){
            document.getElementById('result').innerHTML = `Game Over! So RestartGame`
            setTimeout(() => window.location.reload(false),3000)
        }
        }
    }
    render() {
        if(this.props.requestHint){
            var a;
            var lenghtstring = 0;
            var stringword = " ";
            for(a in this.state.chars){
                lenghtstring++;
            }
            lenghtstring = lenghtstring/2;
            lenghtstring=lenghtstring.toFixed(0);
            for(a = 0; a < lenghtstring; a++)
            {
                stringword += this.state.chars[a]
        
            }
            this.props.getHint(stringword)
        }
        
        return (
            <div>
                { Array.from(this.props.value).map((c, i) =><CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>) }
            </div>
        );
    }
}