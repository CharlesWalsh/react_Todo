import React, {Component} from 'react'
import { Redirect } from 'react-router'
import facebookProvider from './config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import {Toaster,Intent} from "@blueprintjs/core"
class Login extends Component{
    constructor(){
        super()
        this.fbauthfunction=this.fbauthfunction.bind(this)
        this.state={
            redirect:false
        }
    }
    fbauthfunction(event){
        firebase.auth().signInWithPopup(facebookProvider)
            .then((result,error)=>{
            if(error){
                this.toaster.show(
                    {
                        intent:Intent.DANGER, message:"unable for some reason"
                    }
                )
            }
            else {
                this.setState({redirect:true})
            }
        })
    }
    render() {

        if(this.state.redirect === true){
            return <Redirect to={"/"}/>
                }
        else{

        }
        return(

            <div>
                <Toaster ref={(element) => {this.toaster=element}}/>
                <div className={"container"}>
                <button style={{width:"90%",
                                maxWidth:"320px",
                                margin: "50px auto",
                                border:"1px solid black",
                                borderRadius:"5px",
                                padding: "1px"
                                }}
                        className={"btn"}
                        onClick={()=>{this.fbauthfunction()}}>
                        login with facebook
                </button>
                </div>
                    <form>
                    <h4 className={"container"}>register/Log In have not implemented, please log in with facebook</h4>
                    <label>
                        Email
                        <input style={{width:"100%"}}
                               name={"email"}
                               type={"email"}
                               ref={(input)=>{this.emailInput=input}}/>

                    </label>
                    <label>
                        Password
                        <input style={{width:"100%"}}
                               name={"password"}
                               type={"password"}
                               ref={(input)=>{this.passwordInput=input}}/>

                    </label>
                    <label>
                        <input style={{width:"100%"}}
                               type={"submit"}
                               className={"btn"}
                               value="Log In"/>
                    </label>

                </form>
            </div>
        )
    }

}
export default Login