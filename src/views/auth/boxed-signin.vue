<template>
    <div>
        <div class="absolute inset-0">
            <img src="/assets/images/auth/bg-gradient.png" alt="image" class="h-full w-full object-cover" />
        </div>

        <div
            class="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16"
        >
            <img src="/assets/images/auth/coming-soon-object1.png" alt="image" class="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
            <img src="/assets/images/auth/coming-soon-object2.png" alt="image" class="absolute left-24 top-0 h-40 md:left-[30%]" />
            <img src="/assets/images/auth/coming-soon-object3.png" alt="image" class="absolute right-0 top-0 h-[300px]" />
            <img src="/assets/images/auth/polygon-object.svg" alt="image" class="absolute bottom-0 end-[28%]" />
            <div
                class="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]"
            >
                <div class="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">
                    <div class="absolute top-6 end-6">
                        <div class="dropdown">

                        </div>
                    </div>
                    <div class="mx-auto w-full max-w-[440px]">
                        <div class="mb-10">
                            <h1 class="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign In</h1>
                            <p class="text-base font-bold leading-normal text-white-dark">Enter your credentials to Log in</p>
                        </div>
                        <form class="space-y-5 dark:text-white" @submit.prevent="handleSignIn">
                            <div>
                                <label for="Name">Username</label>
                                <div class="relative text-white-dark">
                                    <input v-model="username" id="Username" type="text" placeholder="Enter Username" class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-user :fill="true" />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label for="Password">Password</label>
                                <div class="relative text-white-dark">
                                    <input v-model="password" id="Password" type="password" placeholder="Enter Password" class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-lock-dots :fill="true" />
                                    </span>
                                </div>
                            </div>



                            <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                Sign In
                            </button>
                        </form>

                        <!-- Error message and account check -->
                        <!-- Display error message -->
                        <div v-if="errorMessage" class="text-center dark:text-white">
                        {{ errorMessage }}
                        </div>
                        <!-- Sign-in link -->

                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    import { useMeta } from '@/composables/use-meta';
    import IconUser from '@/components/icon/icon-user.vue';
    import IconLockDots from '@/components/icon/icon-lock-dots.vue';
    import CryptoJS from 'crypto-js';

    useMeta({ title: 'Log In Boxed' });
    const router = useRouter();

    // Reactive variables for form data
    const username = ref('');
    const password = ref('');
    // Error message for feedback
    const errorMessage = ref('');

    

  
    // Function to check if a user exists
    const checkIfUserExists = async () => {
    try {
        // Define the payload for checking user existence
        const payload = { 
            username: username.value, 
            password: password.value
        };

        // Send a POST request to check if the user exists
        const response = await axios.post('http://localhost:5173/api/token/', payload);
        
    
      // Successful authentication
      return response// Redirect to a protected page
    
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
            errorMessage.value = 'Invalid credentials. Please try again.';
        } else {
            errorMessage.value = 'An unexpected error occurred.';
        }
        } else {
        errorMessage.value = 'An error occurred during authentication.';
        }
    }
    };


    // Sign-up handler
    const handleSignIn = async () => {
    try {
        const userExists = await checkIfUserExists();
        console.log("userExists",userExists)
        //alert(userExists)
        //alert([username.value, password.value])
        if (userExists.status==200) {



        var encrypted_Username = CryptoJS.AES.encrypt(username.value, "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=");
        var encrypted_Token = CryptoJS.AES.encrypt(userExists.data.access, "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=");

        errorMessage.value = 'This account  exists! Entering the Dashboard';
        router.push({ path: '/', query: { username: encrypted_Username, token: encrypted_Token } }); // Pass username as a query parameter //, token_values: token_values 
        //router.push({ path: '/', query: { username: username.value, token: userExists.data.access } }); // Pass username as a query parameter //, token_values: token_values 
        //router.push('/');
        } else {
        errorMessage.value='Please try again later.Please Re-enter your credentials'
        router.push('/auth/boxed-signin'); // Redirect to sign-in page
        
        }
    } catch (e) {
        errorMessage.value = 'An error occurred. Please try again later.';
    }
    };
</script>
