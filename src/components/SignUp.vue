<template>
    <section id="signin">
        <div class="containers">
            <div class="user signinBx">
                <div class="imgBx"><img src="../assets/signin.jpg"></div>
                <div class="formBx">
                    <a href="/"><i class="bi bi-x-lg"></i></a>
                    <h2>Login</h2>
                    <div>
                        <input type="email" name="email" placeholder="Email" v-model="state.email" />
                        <span v-if="v$.email.$error" id="error">
                            {{ v$.email.$errors[0].$message }}
                        </span>

                        <input type="password" name="password" placeholder="Password" v-model="state.password.password" />
                        <span v-if="v$.password.password.$error" id="error">
                            {{ v$.password.password.$errors[0].$message }}
                        </span>
                    </div>
                    <input type="submit" value="Login" v-on:click="submitForm" />
                    <p class="signup">Don't have an account? <a href="#" v-on:click="toggleForm">Sign Up.</a></p>
                </div>
            </div>
            <div class="user signupBx">
                <div class="formBx">
                    <a href="/"><i class="bi bi-x-lg"></i></a>
                    <h2>Create An Account</h2>
                    <div>
                        <input type="email" name="email" placeholder="Email" v-model="state.email" />
                        <span v-if="v$.email.$error" id="error">
                            {{ v$.email.$errors[0].$message }}
                        </span>

                        <input type="password" name="password" placeholder="Create Password" v-model="state.password.password" />
                        <span v-if="v$.password.password.$error" id="error">
                            {{ v$.password.password.$errors[0].$message }}
                        </span>

                        <input type="password" name="cPassword" placeholder="Confirm Password" v-model="state.password.confirm" />
                        <span v-if="v$.password.confirm.$error" id="error">
                            {{ v$.password.confirm.$errors[0].$message }}
                        </span>
                    </div>
                    <input type="submit" value="Sign Up" v-on:click="submitForm" />
                    <p class="signin">Already Have An Account? <a href="#" v-on:click="toggleForm">Login.</a></p>
                </div>
                <div class="imgBx"><img src="../assets/signup.jpg"></div>
            </div>
        </div>
    </section>
</template>

<script>
// import axios from 'axios'
import { reactive, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
export default {
    name : 'SignUp',
    setup() {
        const state = reactive ({
            email:'',
            password: {
                password:'',
                confirm:''
            }
            

        })

        const rules = computed(() => {
            return {
                email: { required, email },
                password: {
                    password: { required, minLength: minLength(6) },
                    confirm: { required, sameAs: sameAs(state.password) }
                }
            }
        })

        const v$ = useValidate(rules, state)

        return {
            state,
            v$
        }
    },
    methods : {
        toggleForm() {
            var containers = document.querySelector('.containers')
            containers.classList.toggle('active')
        },
        submitForm() {
            console.log("success");
        }
    },
}
</script>

<style scoped>
/*===== Main ==== */
#error {
    font-size: 12px;
    color: #9A9A9A;
}

#signin {
    position: relative;
    min-height: 100vh;
    background-color: #FFC93C;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

#signin .containers {
    position: relative;
    background: #FFFFFF;
    width: 800px;
    height: 500px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

#signin .containers .user {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
}
    
#signin .containers .user .imgBx {
    position: relative;
    width: 50%;
    height: 100%;
    background: #f1f1f1;
    transition: 0.5s;
}

#signin .containers .user .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#signin .containers .user .formBx {
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: 0.5s;
}

#signin .containers .signinBx .formBx h2 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #3d3d3d;
}

#signin .containers .signinBx .formBx i {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 30px;
    opacity: 50%;
    color: #333;
}

#signin .containers .signupBx .formBx i {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 30px;
    opacity: 50%;
    color: #333;
}

#signin .containers .signupBx .formBx h2 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #ED950F;
}

#signin .containers .user .formBx input {
    position: relative;
    width: 100%;
    padding: 10px;
    background: #f5f5f5;
    color: #333;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 300;
}

#signin .containers .signinBx .formBx input[type="submit"] {
    max-width: 100px;
    background: #3d3d3d;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s;
}

#signin .containers .signupBx .formBx input[type="submit"] {
    max-width: 100px;
    background: #ED950F;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s;
}
#signin .containers .user .formBx .signup {
    position: relative;
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #575757;
    font-weight: 300px;
}

#signin .containers .user .formBx .signup a {
    font-weight: 600;
    color: #ED950F;
}

#signin .containers .user .formBx .signin {
    position: relative;
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #575757;
    font-weight: 300px;
}

#signin .containers .user .formBx .signin a {
    font-weight: 600;
    color: #3d3d3d;
}

#signin .containers .signupBx {
    pointer-events: none;
}

#signin .containers.active .signupBx {
    pointer-events: initial;
}

#signin .containers .signinBx .formBx {
    left: 0;
}

#signin .containers.active .signinBx .formBx {
    left: 100%;
}

#signin .containers .signinBx .imgBx {
    left: 0;
}

#signin .containers.active .signinBx .imgBx {
    left: -100%;
}

#signin .containers .signupBx .formBx {
    left: 100%;
}

#signin .containers.active .signupBx .formBx {
    left: 0;
}

#signin .containers .signupBx .imgBx {
    left: -100%;
}

#signin .containers.active .signupBx .imgBx {
    left: 0;
}

@media (max-width: 768px) {
    #signin .containers {
        max-width: 590px;
    } 
}

@media (max-width: 426px) {
    #signin .containers {
        max-width: 590px;
    }

    #signin .containers .imgBx {
        display: none;
    }

    #signin .containers .user .formBx {
        width: 100%;
    }

    #signin .containers .signupBx .formBx i {
        position: absolute;
        top: 30px;
        right: 30px;
        font-size: 30px;
        opacity: 50%;
        color: #333;
    }
}
</style>