import React, { Component, useState } from 'react'

class SampleClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "Coco Martin",
            background: "red",
            foreground: "white" 
        }
        //this.changeName = this.changeName.bind(); this is also another approach for binding
    }

    showAlert1() {
        alert("onClick={this.showAlert} without using 'this' keyword")
    }

    showAlert2() {
        alert(`onClick={()=>this.showAlert()} using 'this' keyword: ${this.props.name}`)
    }

    showAlert2P(text) {
        alert(`onClick={()=>this.showAlert(text)} with Param: ${text}`)
    }

    changeName() {
        this.setState({
            name: "Dingdong Dantes"
        })
    }

    changeEverything(pName, pForeground, pBackground) {
        this.setState({
            name: pName,
            background: pBackground,
            foreground: pForeground
        })
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.name}`);
        event.preventDefault();
    }

    render() {
        const {name} = this.state

        return (
            <div>
                <div>
                    <h1>
                        Sample Class Component!
                        {this.props.name}
                    </h1>
                    {this.props.children}
                </div>
                
                <button
                    onClick={this.showAlert1}
                >
                    showAlert1
                </button>

                <button
                    onClick={()=>this.showAlert2()}
                >
                    showAlert2 using 'this' keyword
                </button>

                <button
                    onClick={()=>this.showAlert2P(this.props.name)}
                >
                    showAlert2P with Param
                </button>

                <button
                    onClick={this.showAlert2P.bind(this, this.props.name)}
                >
                    showAlert2P using bind() with Param
                </button>

                <h1
                    style={{padding: '0.5rem', color: this.state.foreground, background: this.state.background}}
                >
                    {this.state.name}
                </h1>

                <button
                    onClick={()=>this.changeName()}
                >
                    changeName
                </button>

                <button
                    onClick={this.changeName.bind(this)}
                >
                    changeName using bind()
                </button>

                <button
                    onClick={()=>this.changeEverything("Flash", "yellow", "red")}
                >
                    Flash
                </button>

                <button
                    onClick={()=>this.changeEverything("Green Lantern", "white", "green")}
                >
                    Superman
                </button>

                <button
                    onClick={()=>this.changeEverything("Batman", "gray", "black")}                
                >
                    Batman
                </button>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={name} onChange={this.handleNameChange}/>
                    <select value={name} onChange={this.handleNameChange}>
                        <option value=""></option>
                        <option>Coco Martin</option>
                        <option>Flash</option>
                        <option>Superman</option>
                        <option>Batman</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SampleClassComponent