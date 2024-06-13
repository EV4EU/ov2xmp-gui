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
                            <h1 class="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign Up</h1>
                            <p class="text-base font-bold leading-normal text-white-dark">Enter your credentials to register</p>
                        </div>
                        <form class="space-y-5 dark:text-white" @submit.prevent="handleSignUp">
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


                            <div>
                                <label for="Name">First Name</label>
                                <div class="relative text-white-dark">
                                    <input v-model="firstName" id="First_Name" type="text" placeholder="Enter First Name" class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <IconTag :fill="true" />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label for="Name">Last Name</label>
                                <div class="relative text-white-dark">
                                    <input v-model="lastName" id="Last_Name" type="text" placeholder="Enter Last Name" class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <IconTag :fill="true" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label for="Tariff">Tariff Preference</label>
                                <div class="relative text-white-dark">
                                    <input v-model="tariff" id="Tariff" type="number" placeholder="  Tariff preference" step="any"  class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                    <IconDollar :fill="true" />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label for="Power_Type">Power Type of Vehicle</label>
                                <div class="relative text-white-dark">
                                    <select v-model="powerType" id="Power_Type" class="form-input ps-10 placeholder:text-white-dark">
                                    <option value="" disabled selected>Select Power Type</option>
                                    <option value="AC_1_PHASE">AC 1 Phase</option>
                                    <option value="AC_3_PHASE">AC 3 Phase</option>
                                    <option value="DC">DC</option>
                                    </select>
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                    <IconPlus :fill="true" />
                                    </span>
                                </div>
                            </div>


                            <div>
                                <label for="Email">Email</label>
                                <div class="relative text-white-dark">
                                    <input v-model="email" id="Email" type="email" placeholder="Enter Email" class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-mail :fill="true" />
                                    </span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                Sign Up
                            </button>
                        </form>

                        <!-- Error message and account check -->
                        <div v-if="errorMessage" class="text-center dark:text-white">
                            {{ errorMessage }}
                        </div>
                        <!-- Sign-in link -->
                        <div v-else class="text-center dark:text-white">
                            Already have an account?
                            <router-link to="/auth/boxed-signin" class="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                SIGN IN
                            </router-link>
                        </div>

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

    import IconTag from '@/components/icon/icon-tag.vue';
    import IconDollar from '@/components/icon/icon-dollar-sign-circle.vue';
    import IconPlus from '@/components/icon/icon-plus.vue';
    
    import IconUser from '@/components/icon/icon-user.vue';
    import IconMail from '@/components/icon/icon-mail.vue';
    import IconLockDots from '@/components/icon/icon-lock-dots.vue';


    useMeta({ title: 'Register Boxed' });
    const router = useRouter();

    // Reactive variables for form data
    const username = ref('');
    const password = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');

    const tariff=ref([]);
    const powerType=ref('');

    // Error message for feedback
    const errorMessage = ref('');
    const check1 = ref();

  

 // Function to check if a user exists
 const checkIfUserExists = async () => {
    try {
        // Define the payload for checking user existence
        const query = { username: username.value // Key-value pair for the query parameter
                    };

        // Send a POST request to check if the user exists
        const response = await axios.post('http://localhost:5173/api/user/create/', query);
        
        return response.status; // If status is 200, user exists
    } catch (error) {
        // Narrowing down 'unknown'
        let errorMessage = 'An error occurred during the user existence check';

        if (axios.isAxiosError(error)) { // Check if it's an Axios error
        errorMessage = error.message; // Get the error message
        if (error.response) {
            if (error.response.status === 401) {
            errorMessage = 'Unauthorized. Please check your credentials.';
            } else if (error.response.status === 404) {
            return false; // User doesn't exist
            }
        }
        }

        console.error(errorMessage);
        return false; // Default to 'user doesn't exist'
    }
    };  

    // Function to create a new user
    const createUser = async () => {
    await axios.post('http://localhost:5173/api/user/create/', {
            username: username.value,
            password: password.value,
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value

    });
    };

    // Sign-up handler
    const handleSignUp = async () => {
    try {
        const userExists = await checkIfUserExists();

        if (userExists==400) {
        errorMessage.value = 'This account already exists. Plaase change the Username';
        } else {
        await createUser(); // Create a new user if it doesn't exist
        router.push('/auth/boxed-signin'); // Redirect to sign-in page
        }
    } catch (e) {
        errorMessage.value = 'An error occurred. Please try again later.';
    }
    };
</script>
